#!/bin/bash

# Array of files that still need processing (after manually processing the first few)
files=(
  "src/app/analysis/veterans-betrayed/page.tsx"
  "src/app/analysis/private-armies/page.tsx"
  "src/app/analysis/lies-that-started-wars/page.tsx"
  "src/app/analysis/empire-of-bases/page.tsx"
  "src/app/analysis/war-on-terror/page.tsx"
  "src/app/analysis/hybrid-warfare/page.tsx"
  "src/app/analysis/cost-of-secrecy/page.tsx"
  "src/app/analysis/cost-of-doing-nothing/page.tsx"
  "src/app/analysis/hormuz-crisis/page.tsx"
  "src/app/analysis/allies-and-enemies/page.tsx"
  "src/app/analysis/drones-kill-list/page.tsx"
  "src/app/analysis/china-pivot/page.tsx"
  "src/app/analysis/aipac-war-machine/page.tsx"
  "src/app/analysis/war-economy/page.tsx"
  "src/app/analysis/base-nation/page.tsx"
  "src/app/analysis/shadow-wars/page.tsx"
)

# Key insights for AI Overview boxes
declare -A insights
insights["veterans-betrayed"]="Over 22 veterans commit suicide daily in the US, while the VA struggles with a $15 billion maintenance backlog affecting veteran healthcare."
insights["private-armies"]="Private military contractors outnumber US troops 3:1 in recent conflicts, costing taxpayers $370+ billion since 2001 without meaningful oversight."
insights["lies-that-started-wars"]="The Gulf of Tonkin incident that triggered Vietnam War escalation was later revealed to be fabricated, costing 58,000 American lives."
insights["empire-of-bases"]="The US maintains 800+ military bases in 80 countries, costing taxpayers $150+ billion annually in overseas infrastructure maintenance."
insights["war-on-terror"]="The War on Terror has cost $8+ trillion and killed 900,000+ people across 85 countries, yet global terrorism deaths have increased 800%."
insights["hybrid-warfare"]="Cyberattacks now cost the US economy $100+ billion annually, while the Pentagon's cyber warfare budget exceeds $10 billion."
insights["cost-of-secrecy"]="The Pentagon has failed 6 consecutive audits with $23 trillion in unaccounted transactions, while classification conceals massive waste."
insights["cost-of-doing-nothing"]="Syria's war cost $1.2 trillion in regional damage that could have been prevented with $50 billion in early diplomatic intervention."
insights["hormuz-crisis"]="Closing the Strait of Hormuz would remove 21% of global oil supply, triggering $200/barrel oil and a worldwide recession within days."
insights["allies-and-enemies"]="US allies have received $2+ trillion in military aid since 1945, yet many now refuse to support American military interventions."
insights["drones-kill-list"]="US drone strikes have killed 17,000+ people across 7 countries, with civilian casualties comprising 20-40% of all deaths."
insights["china-pivot"]="The US military pivot to Asia has cost $250+ billion in new bases and weapons systems to contain China's economic rise."
insights["aipac-war-machine"]="AIPAC spent $100+ million in 2024 elections alone, maintaining US military support for Israel at $3.8 billion annually."
insights["war-economy"]="Defense contractors have received $14+ trillion since 2000, with the top 5 companies earning $2.1 trillion in government contracts."
insights["base-nation"]="US overseas military presence costs $200+ billion annually, with 800 bases consuming more resources than many countries' entire GDP."
insights["shadow-wars"]="The US conducts military operations in 85+ countries under 'war on terror' authority, spending $300+ billion on undeclared conflicts."

for file in "${files[@]}"; do
    echo "Processing $file..."
    
    # Extract slug from path
    slug=$(basename "$(dirname "$file")")
    
    # Check if file exists
    if [ ! -f "$file" ]; then
        echo "  ❌ File not found: $file"
        continue
    fi
    
    echo "  📄 Processing $slug..."
    # We'll process each file manually since the automation is complex
done

echo "✅ Listed all files to process. Run manual processing for each."