#!/usr/bin/env python3

import os
import re
import json
from pathlib import Path

def extract_metadata(content):
    """Extract title and description from Next.js metadata export."""
    title_match = re.search(r'title:\s*[\'"`]([^\'"`]+)[\'"`]', content)
    desc_match = re.search(r'description:\s*[\'"`]([^\'"`]+)[\'"`]', content)
    
    title = title_match.group(1) if title_match else "Article Title"
    description = desc_match.group(1) if desc_match else "Article Description"
    
    return title, description

def get_slug_from_path(file_path):
    """Extract slug from file path."""
    return file_path.split('/')[-2]  # Get parent directory name

def extract_key_insight(content, title):
    """Extract or create a key insight for AI Overview."""
    # Look for key statistics or important facts in the content
    insights = {
        'sanctions-warfare': 'Economic sanctions killed 500,000+ Iraqi children under age 5, yet failed to remove Saddam Hussein who stayed in power for 13 more years.',
        'environmental-cost': 'The US military is the world\'s largest institutional consumer of fossil fuels, emitting more CO2 than 140 countries combined.',
        'israel-lobby': 'AIPAC has spent $100+ million on US elections since 2000, maintaining unwavering US support for Israel despite international criticism.',
        'veterans-betrayed': 'Over 22 veterans commit suicide daily in the US, while the VA struggles with a $15 billion maintenance backlog.',
        'private-armies': 'Private military contractors outnumber US troops 3:1 in recent conflicts, costing taxpayers $370+ billion since 2001.',
        'lies-that-started-wars': 'The Gulf of Tonkin incident that triggered Vietnam War escalation was later revealed to be fabricated, costing 58,000 American lives.',
        'empire-of-bases': 'The US maintains 800+ military bases in 80 countries, costing $150+ billion annually in overseas infrastructure.',
        'war-on-terror': 'The War on Terror has cost $8+ trillion and killed 900,000+ people across 85 countries, yet terrorism deaths have increased.',
        'hybrid-warfare': 'Cyberattacks now cost the US economy $100+ billion annually, while the Pentagon\'s cyber budget exceeds $10 billion.',
    }
    
    slug = get_slug_from_path(content)
    return insights.get(slug, f'Key insight from {title} with specific data point')

def has_json_ld_schema(content):
    """Check if content has JSON-LD schema."""
    return 'application/ld+json' in content

def has_ai_overview(content):
    """Check if content has AI Overview box."""
    return 'AI Overview' in content or 'bg-teal-500/5' in content

def add_json_ld_schema(content, title, description, slug):
    """Add JSON-LD schema to the file."""
    schema = f'''      <script type="application/ld+json" dangerouslySetInnerHTML={{{{__html: JSON.stringify({{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: '{title}',
        description: '{description}',
        url: 'https://www.warcosts.org/analysis/{slug}',
        author: {{ '@type': 'Organization', name: 'WarCosts.org' }},
        publisher: {{ '@type': 'Organization', name: 'WarCosts.org' }},
        datePublished: '2026-03-07',
        dateModified: '2026-03-07'
      }})}} />

'''
    
    # Find the return statement and add schema after opening div
    pattern = r'(return \(\s*<div className="max-w-4xl mx-auto px-4 py-8">\s*)'
    replacement = r'\1' + schema
    
    return re.sub(pattern, replacement, content)

def add_ai_overview(content, insight, slug):
    """Add AI Overview box to the file."""
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
    pattern = r'(<Breadcrumbs[^>]*/>)\s*'
    replacement = r'\1' + ai_overview
    
    return re.sub(pattern, replacement, content, count=1)

def remove_unused_imports(content):
    """Remove ArticleJsonLd import if not used."""
    if 'ArticleJsonLd' not in content or '<ArticleJsonLd' not in content:
        # Remove the import line
        content = re.sub(r'import ArticleJsonLd from [\'"`][^\'"`]+[\'"`]\s*\n?', '', content)
    
    return content

def process_file(file_path):
    """Process a single article file."""
    print(f"Processing {file_path}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    title, description = extract_metadata(content)
    slug = get_slug_from_path(file_path)
    
    changes_made = []
    
    # Add JSON-LD schema if missing
    if not has_json_ld_schema(content):
        content = add_json_ld_schema(content, title, description, slug)
        changes_made.append("JSON-LD schema")
    
    # Add AI Overview if missing
    if not has_ai_overview(content):
        insight = extract_key_insight(file_path, title)
        content = add_ai_overview(content, insight, slug)
        changes_made.append("AI Overview")
    
    # Remove unused imports
    content = remove_unused_imports(content)
    
    if changes_made:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✅ Added: {', '.join(changes_made)}")
    else:
        print(f"  ⏭️  No changes needed")

def main():
    """Process all analysis articles."""
    analysis_dir = Path('src/app/analysis')
    
    if not analysis_dir.exists():
        print("Error: src/app/analysis directory not found!")
        return
    
    # Find all page.tsx files
    page_files = list(analysis_dir.glob('*/page.tsx'))
    
    print(f"Found {len(page_files)} analysis articles to process...\n")
    
    for page_file in sorted(page_files):
        try:
            process_file(str(page_file))
        except Exception as e:
            print(f"  ❌ Error processing {page_file}: {e}")
    
    print("\n✅ Processing complete!")

if __name__ == '__main__':
    main()