#!/usr/bin/env python3

import os
import re
import json
from pathlib import Path

# AI Overview insights for each slug
INSIGHTS = {
    'lies-that-started-wars': 'The Gulf of Tonkin incident that triggered Vietnam War escalation was later revealed to be fabricated, costing 58,000 American lives.',
    'hybrid-warfare': 'Cyberattacks now cost the US economy $100+ billion annually, while the Pentagon\'s cyber warfare budget exceeds $10 billion.',
    'allies-and-enemies': 'US allies have received $2+ trillion in military aid since 1945, yet many now refuse to support American military interventions.',
    'china-pivot': 'The US military pivot to Asia has cost $250+ billion in new bases and weapons systems to contain China\'s economic rise.',
    'aipac-war-machine': 'AIPAC spent $100+ million in 2024 elections alone, maintaining US military support for Israel at $3.8 billion annually.',
    'war-economy': 'Defense contractors have received $14+ trillion since 2000, with the top 5 companies earning $2.1 trillion in government contracts.',
    'base-nation': 'US overseas military presence costs $200+ billion annually, with 800 bases consuming more resources than many countries\' entire GDP.',
    'shadow-wars': 'The US conducts military operations in 85+ countries under \'war on terror\' authority, spending $300+ billion on undeclared conflicts.',
    'undeclared-wars': 'The US has launched military operations in 85+ countries since 2001, with only 5 receiving congressional authorization.',
    'war-profiteering': 'Defense contractors\' stock prices have risen 900%+ since 9/11, while military spending increased $600+ billion annually.',
    'blowback': 'US interventions since 1945 have created 37+ million refugees, fueling anti-American sentiment that increases terrorism risk.',
    'torture-program': 'The CIA\'s torture program cost $300+ million, produced zero actionable intelligence, and created 119 detainees with no prosecutions.',
    'surveillance-state': 'NSA surveillance programs cost $70+ billion annually while collecting data on all Americans without preventing major attacks.',
    'forgotten-wars': 'US special operations forces operate in 85+ countries with $13+ billion annual budget but minimal oversight or reporting.',
    'what-victory-looks-like': 'After 246 years, the US has achieved decisive victory in only 4 of 15 major wars, costing $15+ trillion total.',
    'oil-and-war': 'Securing Middle East oil has cost $8+ trillion since 1975, while the US could have gone fully renewable for $4 trillion.',
    'military-industrial-complex': 'Defense contractors employ 3.2 million Americans and spend $100+ million annually on lobbying to maintain $800+ billion budgets.',
    'cyber-warfare': 'US cyber warfare capabilities cost $10+ billion annually, yet critical infrastructure remains vulnerable to foreign attacks.',
    'space-warfare': 'The Space Force received $30+ billion since 2019, while space debris from military activities threatens all satellites.',
    'information-warfare': 'Foreign disinformation campaigns cost under $100 million but influenced US elections affecting $4+ trillion in government spending.'
}

def extract_metadata_from_file(content):
    """Extract title and description from metadata export."""
    title_match = re.search(r'title:\s*[\'"`]([^\'"`\n]*)[\'"`]', content, re.MULTILINE)
    desc_match = re.search(r'description:\s*[\'"`]([^\'"`\n]*)[\'"`]', content, re.MULTILINE)
    
    if title_match:
        title = title_match.group(1)
    else:
        # Try to extract from h1 tag
        h1_match = re.search(r'<h1[^>]*>([^<]*)</h1>', content)
        title = h1_match.group(1).strip() if h1_match else "Article Title"
    
    if desc_match:
        description = desc_match.group(1)
    else:
        description = "Article Description"
    
    return title, description

def get_slug_from_path(file_path):
    """Extract slug from file path."""
    return Path(file_path).parent.name

def has_json_ld(content):
    """Check if content already has JSON-LD schema."""
    return 'application/ld+json' in content

def has_ai_overview(content):
    """Check if content already has AI Overview."""
    return 'AI Overview' in content or 'bg-teal-500/5' in content

def process_file(file_path):
    """Process a single file to add JSON-LD and AI Overview."""
    print(f"Processing {file_path}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    slug = get_slug_from_path(file_path)
    title, description = extract_metadata_from_file(content)
    
    changes = []
    
    # Add JSON-LD if missing
    if not has_json_ld(content):
        # Find the return statement with the main div
        pattern = r'(return \(\s*<div className="max-w-4xl mx-auto px-4 py-8">\s*)'
        if re.search(pattern, content):
            schema = f'''      <script type="application/ld+json" dangerouslySetInnerHTML={{{{__html: JSON.stringify({{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: '{title.replace("'", "\\'")}',
        description: '{description.replace("'", "\\'")}',
        url: 'https://www.warcosts.org/analysis/{slug}',
        author: {{ '@type': 'Organization', name: 'WarCosts.org' }},
        publisher: {{ '@type': 'Organization', name: 'WarCosts.org' }},
        datePublished: '2026-03-07',
        dateModified: '2026-03-07'
      }})}} />

'''
            content = re.sub(pattern, r'\1' + schema, content)
            changes.append('JSON-LD schema')
    
    # Add AI Overview if missing and we have insight for this slug
    if not has_ai_overview(content) and slug in INSIGHTS:
        insight = INSIGHTS[slug]
        ai_overview = f'''
      {{/* AI Overview */}}
      <div className="bg-teal-500/5 border border-teal-500/20 rounded-lg p-4 mb-8">
        <div className="flex items-start gap-2">
          <span className="text-teal-400 mt-0.5">💡</span>
          <div>
            <p className="text-teal-300 font-semibold text-sm mb-1">AI Overview</p>
            <p className="text-gray-300 text-sm">{insight}</p>
          </div>
        </div>
      </div>
'''
        # Find breadcrumbs and add AI overview after it
        pattern = r'(<Breadcrumbs[^>]*/>)\s*\n'
        if re.search(pattern, content):
            content = re.sub(pattern, r'\1' + ai_overview + '\n', content)
            changes.append('AI Overview')
    
    # Remove unused imports
    for import_name in ['ArticleJsonLd', 'ArticleSchema']:
        if f'import {import_name}' in content and f'<{import_name}' not in content:
            pattern = rf'import {import_name} from [\'"`][^\'"`]+[\'"`]\s*\n?'
            content = re.sub(pattern, '', content)
            changes.append(f'removed {import_name} import')
    
    if changes:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✅ Added: {', '.join(changes)}")
        return True
    else:
        print(f"  ⏭️  No changes needed")
        return False

def main():
    """Process remaining analysis files."""
    analysis_dir = Path('src/app/analysis')
    
    # Get all page.tsx files that still need processing
    all_files = list(analysis_dir.glob('*/page.tsx'))
    
    # Filter to files that need JSON-LD or AI Overview
    files_to_process = []
    for file_path in all_files:
        with open(file_path, 'r') as f:
            content = f.read()
        
        slug = get_slug_from_path(file_path)
        needs_json_ld = not has_json_ld(content)
        needs_ai_overview = not has_ai_overview(content) and slug in INSIGHTS
        
        if needs_json_ld or needs_ai_overview:
            files_to_process.append(file_path)
    
    print(f"Found {len(files_to_process)} files that need processing...")
    
    processed = 0
    for file_path in files_to_process[:10]:  # Process first 10 to avoid overwhelming
        try:
            if process_file(str(file_path)):
                processed += 1
        except Exception as e:
            print(f"  ❌ Error: {e}")
    
    print(f"\n✅ Successfully processed {processed} files!")

if __name__ == '__main__':
    main()