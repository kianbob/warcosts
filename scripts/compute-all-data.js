#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Utility functions
function loadJsonFile(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error.message);
    return null;
  }
}

function saveJsonFile(data, filePath) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`✅ Generated: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error saving ${filePath}:`, error.message);
  }
}

function calculateGrade(objectivesMet, costPerYear, costPerDeath, humanCostScore) {
  // Grade A: Objectives met with reasonable cost
  if (objectivesMet && costPerYear < 50000000000 && costPerDeath < 10000000) return 'A';
  
  // Grade B: Objectives met but expensive, or limited objectives with reasonable cost
  if (objectivesMet && (costPerYear < 100000000000 || costPerDeath < 50000000)) return 'B';
  if (!objectivesMet && costPerYear < 20000000000 && costPerDeath < 5000000) return 'B';
  
  // Grade C: Mixed results
  if (objectivesMet && costPerYear < 200000000000) return 'C';
  if (!objectivesMet && costPerYear < 100000000000) return 'C';
  
  // Grade D: Poor performance
  if (objectivesMet || costPerYear < 500000000000) return 'D';
  
  // Grade F: Objectives failed with massive cost
  return 'F';
}

console.log('🚀 Starting data computation for WarCosts.org...\n');

// Load existing data
const conflicts = loadJsonFile('public/data/conflicts.json');
const presidents = loadJsonFile('public/data/presidents.json');
const yearlySpending = loadJsonFile('public/data/yearly-spending.json');
const currentVeterans = loadJsonFile('public/data/veterans-by-war.json');

if (!conflicts) {
  console.error('❌ Could not load conflicts.json');
  process.exit(1);
}

// 1. Generate war-roi.json
console.log('1️⃣ Computing War ROI data...');
const warRoiData = conflicts.map(conflict => {
  // Determine if objectives were met
  let objectivesMet = false;
  if (typeof conflict.objectivesMet === 'boolean') {
    objectivesMet = conflict.objectivesMet;
  } else {
    // Infer from outcome
    objectivesMet = conflict.outcome === 'Victory' || 
                   conflict.outcome === 'Limited Success' ||
                   conflict.outcome === 'Achieved objectives';
  }
  
  const objectivesMetRatio = objectivesMet ? 1.0 : 0.0;
  const durationYears = Math.max(1, conflict.endYear - conflict.startYear + 1);
  const cost = conflict.costInflationAdjusted || 0;
  const costPerYear = cost / durationYears;
  
  const usDeaths = conflict.usCasualties?.deaths || conflict.usCasualties?.battleDeaths || 0;
  const civilianDeaths = conflict.civilianDeaths || 0;
  const totalDeaths = usDeaths + civilianDeaths;
  const costPerDeath = totalDeaths > 0 ? cost / totalDeaths : Infinity;
  
  const humanCostScore = (usDeaths + civilianDeaths) / durationYears;
  
  const grade = calculateGrade(objectivesMet, costPerYear, costPerDeath, humanCostScore);
  
  return {
    name: conflict.name,
    slug: conflict.id,
    grade,
    objectivesMet,
    objectivesMetRatio,
    cost: cost,
    costPerYear: Math.round(costPerYear),
    costPerDeath: Math.round(costPerDeath === Infinity ? 0 : costPerDeath),
    deaths: {
      us: usDeaths,
      civilian: civilianDeaths,
      total: totalDeaths
    },
    duration: durationYears,
    outcome: conflict.outcome,
    humanCostScore: Math.round(humanCostScore)
  };
}).sort((a, b) => {
  // Sort by grade (worst first: F, D, C, B, A)
  const gradeOrder = { 'F': 0, 'D': 1, 'C': 2, 'B': 3, 'A': 4 };
  return gradeOrder[a.grade] - gradeOrder[b.grade];
});

saveJsonFile(warRoiData, 'public/data/war-roi.json');

// 2. Generate constitutional-scores.json
console.log('2️⃣ Computing Constitutional Scores...');
const conflictScores = conflicts.map(conflict => {
  let score = 10; // Default: covert/none
  
  if (conflict.congressionalAuth === true) {
    // Check if it was a formal declaration
    const hasDeclaration = conflict.authDetail && 
      (conflict.authDetail.includes('Declaration') || 
       conflict.authDetail.includes('declared war'));
    score = hasDeclaration ? 100 : 60; // AUMF = 60
  } else if (conflict.congressionalAuth === false) {
    // Executive only
    score = 30;
  }
  
  return {
    name: conflict.name,
    slug: conflict.id,
    score,
    congressionalAuth: conflict.congressionalAuth,
    authDetail: conflict.authDetail
  };
});

const presidentsScores = presidents.map(president => {
  const relevantConflicts = conflictScores.filter(conflict => 
    president.conflicts.some(c => 
      c.toLowerCase().replace(/[^a-z0-9]/g, '') === 
      conflict.name.toLowerCase().replace(/[^a-z0-9]/g, '')
    )
  );
  
  const totalScore = relevantConflicts.reduce((sum, c) => sum + c.score, 0);
  const averageScore = relevantConflicts.length > 0 ? totalScore / relevantConflicts.length : 0;
  
  const declared = relevantConflicts.filter(c => c.score >= 60).length;
  const undeclared = relevantConflicts.filter(c => c.score < 60).length;
  
  return {
    name: president.name,
    averageScore: Math.round(averageScore),
    totalConflicts: relevantConflicts.length,
    declared,
    undeclared
  };
});

const constitutionalData = {
  conflicts: conflictScores,
  presidents: presidentsScores
};

saveJsonFile(constitutionalData, 'public/data/constitutional-scores.json');

// 3. Generate blowback-chains.json
console.log('3️⃣ Creating Blowback Chains...');
const blowbackChains = [
  {
    name: "Iran Chain",
    description: "1953 coup → 1979 revolution → Iran-Iraq War → 2026 war",
    nodes: [
      { year: 1953, event: "CIA overthrows democratically elected Mossadegh", conflictId: "iran-coup-1953", consequence: "Installs Shah, builds secret police SAVAK" },
      { year: 1979, event: "Iranian Revolution overthrows US-backed Shah", conflictId: null, consequence: "Anti-American theocracy takes power" },
      { year: 1980, event: "Iran-Iraq War begins", conflictId: "iran-iraq-war", consequence: "US arms both sides, 1M+ die" },
      { year: 2026, event: "US-Iran War", conflictId: "iran-war", consequence: "Predicted escalation from decades of hostility" }
    ]
  },
  {
    name: "Afghanistan Chain",
    description: "1980s CIA funding → Taliban → 9/11 → 20-year war → Taliban takeover",
    nodes: [
      { year: 1979, event: "CIA arms Afghan mujahideen against Soviets", conflictId: "afghanistan-soviet", consequence: "$3B+ creates international jihadist network" },
      { year: 1996, event: "Taliban emerges from CIA-funded fighters", conflictId: null, consequence: "Provides safe haven for Al Qaeda" },
      { year: 2001, event: "September 11 attacks", conflictId: null, consequence: "3,000 Americans killed by CIA's former assets" },
      { year: 2001, event: "US invades Afghanistan", conflictId: "afghanistan", consequence: "20-year war, $2.3T spent, 175K+ dead" },
      { year: 2021, event: "Taliban retakes Afghanistan", conflictId: null, consequence: "Back to square one after 20 years" }
    ]
  },
  {
    name: "Iraq Chain", 
    description: "Gulf War → sanctions → Iraq War → ISIS → regional chaos",
    nodes: [
      { year: 1991, event: "Gulf War devastates Iraq infrastructure", conflictId: "gulf-war", consequence: "500K+ Iraqi children die from sanctions" },
      { year: 2003, event: "US invades Iraq based on WMD lies", conflictId: "iraq-war", consequence: "Destroys government, disbands army" },
      { year: 2006, event: "Iraqi civil war begins", conflictId: null, consequence: "Sectarian violence kills 100K+ civilians" },
      { year: 2014, event: "ISIS emerges from Iraqi chaos", conflictId: "isis", consequence: "Conquers territory size of Britain" },
      { year: 2020, event: "Regional proxy wars continue", conflictId: null, consequence: "Syria, Yemen devastated, millions refugees" }
    ]
  },
  {
    name: "Libya Chain",
    description: "2011 intervention → failed state → weapons to ISIS/Sahel",
    nodes: [
      { year: 2011, event: "NATO bombs Libya for 'humanitarian intervention'", conflictId: "libya-intervention", consequence: "Gaddafi killed, government collapses" },
      { year: 2012, event: "Benghazi attack kills US ambassador", conflictId: null, consequence: "Libya becomes failed state with multiple governments" },
      { year: 2014, event: "Libyan weapons flow to ISIS and African groups", conflictId: null, consequence: "Arms bazaar destabilizes entire Sahel region" },
      { year: 2020, event: "Sahel coups cascade across Africa", conflictId: null, consequence: "Mali, Burkina Faso, Niger reject Western presence" }
    ]
  },
  {
    name: "Guatemala Chain",
    description: "1954 CIA coup → 36-year civil war → 200K dead",
    nodes: [
      { year: 1954, event: "CIA overthrows democratically elected Árbenz", conflictId: "guatemala-coup", consequence: "Protects United Fruit Company's land" },
      { year: 1960, event: "Guatemalan Civil War begins", conflictId: "guatemala-civil-war", consequence: "36-year conflict starts" },
      { year: 1996, event: "Civil war ends", conflictId: null, consequence: "200,000 dead, 83% indigenous Maya" },
      { year: 2024, event: "Migrants flee generational poverty", conflictId: null, consequence: "Legacy of violence drives Central American migration" }
    ]
  },
  {
    name: "Chile Chain",
    description: "1973 CIA coup → Pinochet → 40K tortured",
    nodes: [
      { year: 1973, event: "CIA helps overthrow democratically elected Allende", conflictId: "chile-coup", consequence: "General Pinochet takes power" },
      { year: 1974, event: "Pinochet begins Operation Condor", conflictId: null, consequence: "Cross-border assassination program" },
      { year: 1990, event: "Pinochet leaves power", conflictId: null, consequence: "40,000+ tortured, 3,200+ killed/disappeared" },
      { year: 2006, event: "Pinochet dies, never prosecuted", conflictId: null, consequence: "US blocks international justice for decades" }
    ]
  },
  {
    name: "Vietnam Chain",
    description: "Domino theory → 20-year war → 58K dead → dominoes didn't fall",
    nodes: [
      { year: 1954, event: "US backs South Vietnam after French defeat", conflictId: "vietnam-war", consequence: "Domino theory: stop communism spreading" },
      { year: 1964, event: "Gulf of Tonkin lie escalates war", conflictId: "vietnam-war", consequence: "False flag attack justifies massive escalation" },
      { year: 1975, event: "North Vietnam conquers South", conflictId: "vietnam-war", consequence: "58,220 Americans dead, 3.8M Vietnamese" },
      { year: 1976, event: "Dominoes don't fall", conflictId: null, consequence: "Thailand, Malaysia, Singapore remain capitalist" }
    ]
  },
  {
    name: "Somalia Chain",
    description: "1992 intervention → Black Hawk Down → Al-Shabaab → AFRICOM return",
    nodes: [
      { year: 1992, event: "US humanitarian intervention in Somalia", conflictId: "somalia-intervention", consequence: "Mission creep leads to nation-building" },
      { year: 1993, event: "Black Hawk Down disaster", conflictId: "somalia-intervention", consequence: "18 Americans killed, hasty withdrawal" },
      { year: 2006, event: "Islamic Courts Union brings stability", conflictId: null, consequence: "US backs Ethiopian invasion to destroy it" },
      { year: 2007, event: "Al-Shabaab emerges from chaos", conflictId: null, consequence: "More radical than Islamic Courts" },
      { year: 2022, event: "AFRICOM returns with drone war", conflictId: "somalia-drone-war", consequence: "30 years later, back where we started" }
    ]
  }
];

saveJsonFile(blowbackChains, 'public/data/blowback-chains.json');

// 4. Generate audit-timeline.json (hardcoded as requested)
console.log('4️⃣ Creating Pentagon Audit Timeline...');
const auditData = {
  audits: [
    {year: 2018, passed: false, budget: 700000000000, finding: "First-ever comprehensive audit. Failed across most categories."},
    {year: 2019, passed: false, budget: 716000000000, finding: "Failed again. Only 7 of 24 sub-audits received clean opinions."},
    {year: 2020, passed: false, budget: 721000000000, finding: "Third failure. COVID cited as complication."},
    {year: 2021, passed: false, budget: 742000000000, finding: "Fourth failure. 1,600 auditors, still can't pass."},
    {year: 2022, passed: false, budget: 782000000000, finding: "Fifth failure. Marine Corps passed for first time, rest failed."},
    {year: 2023, passed: false, budget: 816000000000, finding: "Sixth failure. Can't account for 63% of $3.8T in assets."},
    {year: 2024, passed: false, budget: 824000000000, finding: "Seventh failure. $2.5T unaccounted. Pentagon says 'momentum on our side.'"},
    {year: 2025, passed: false, budget: 886000000000, finding: "Eighth consecutive failure. GOP senator introduces audit legislation."}
  ],
  totalUnaccounted: 2500000000000,
  totalAssets: 3800000000000,
  percentUnaccounted: 63
};

saveJsonFile(auditData, 'public/data/audit-timeline.json');

// 5. Generate spending-per-capita.json
console.log('5️⃣ Computing Per-Capita Spending...');
const taxpayers = 150000000; // ~150M taxpayers
const households = 131000000; // ~131M households
const secondsPerYear = 365.25 * 24 * 60 * 60;

const spendingPerCapita = yearlySpending.map(year => {
  const totalSpending = year.amount * 1000000; // Convert millions to actual dollars
  
  return {
    year: year.year,
    total: totalSpending,
    perTaxpayer: Math.round(totalSpending / taxpayers),
    perHousehold: Math.round(totalSpending / households),
    perSecond: Math.round(totalSpending / secondsPerYear),
    perDay: Math.round(totalSpending / 365.25)
  };
});

saveJsonFile(spendingPerCapita, 'public/data/spending-per-capita.json');

// 6. Generate contractor-by-war.json
console.log('6️⃣ Creating Contractor-War Relationships...');
const contractorData = [
  {
    contractor: "Halliburton/KBR",
    wars: [
      {conflictId: "iraq-war", role: "Logistics support (LOGCAP)", estimatedValue: 39500000000, notes: "Largest Iraq contractor, no-bid contracts"},
      {conflictId: "afghanistan", role: "Base construction & support", estimatedValue: 8000000000, notes: "Bagram, Kandahar operations"}
    ]
  },
  {
    contractor: "Lockheed Martin", 
    wars: [
      {conflictId: "iraq-war", role: "F-16s, Hellfire missiles", estimatedValue: 15000000000, notes: "Primary weapons supplier"},
      {conflictId: "afghanistan", role: "F-35 development, missiles", estimatedValue: 12000000000, notes: "Next-gen fighter development"},
      {conflictId: "iran-war", role: "F-35s, THAAD systems", estimatedValue: 25000000000, notes: "Projected 2026 conflict spending"}
    ]
  },
  {
    contractor: "Boeing",
    wars: [
      {conflictId: "gulf-war", role: "B-52 bombers, cruise missiles", estimatedValue: 5000000000, notes: "Air campaign backbone"},
      {conflictId: "iraq-war", role: "Apache helicopters, bombs", estimatedValue: 8000000000, notes: "Close air support"},
      {conflictId: "afghanistan", role: "Chinook helicopters, tankers", estimatedValue: 6000000000, notes: "Transport and refueling"}
    ]
  },
  {
    contractor: "Raytheon",
    wars: [
      {conflictId: "gulf-war", role: "Tomahawk cruise missiles", estimatedValue: 3000000000, notes: "First major Tomahawk use"},
      {conflictId: "kosovo", role: "Tomahawk missiles", estimatedValue: 500000000, notes: "Precision strikes"},
      {conflictId: "libya-intervention", role: "Tomahawks", estimatedValue: 300000000, notes: "Opening strikes"},
      {conflictId: "iran-war", role: "Patriot, Tomahawk systems", estimatedValue: 15000000000, notes: "Projected air defense needs"}
    ]
  },
  {
    contractor: "General Dynamics",
    wars: [
      {conflictId: "iraq-war", role: "Abrams tanks, Stryker vehicles", estimatedValue: 12000000000, notes: "Primary ground vehicles"},
      {conflictId: "afghanistan", role: "Mine-resistant vehicles", estimatedValue: 7000000000, notes: "IED protection systems"}
    ]
  },
  {
    contractor: "Northrop Grumman",
    wars: [
      {conflictId: "afghanistan", role: "Global Hawk drones", estimatedValue: 4000000000, notes: "Surveillance and reconnaissance"},
      {conflictId: "iraq-war", role: "B-2 stealth bombers", estimatedValue: 2000000000, notes: "Precision bombing missions"}
    ]
  },
  {
    contractor: "Blackwater/Academi",
    wars: [
      {conflictId: "iraq-war", role: "Security services", estimatedValue: 1200000000, notes: "Diplomatic protection, infamous for civilian killings"},
      {conflictId: "afghanistan", role: "Security & training", estimatedValue: 800000000, notes: "Private military operations"}
    ]
  },
  {
    contractor: "Dow Chemical",
    wars: [
      {conflictId: "vietnam-war", role: "Agent Orange production", estimatedValue: 400000000, notes: "Defoliant causing birth defects and cancer"}
    ]
  },
  {
    contractor: "Bell Helicopter",
    wars: [
      {conflictId: "vietnam-war", role: "UH-1 Huey helicopters", estimatedValue: 2000000000, notes: "Iconic Vietnam War aircraft"}
    ]
  },
  {
    contractor: "DynCorp",
    wars: [
      {conflictId: "afghanistan", role: "Police training program", estimatedValue: 3000000000, notes: "Failed Afghan National Police training"},
      {conflictId: "iraq-war", role: "Police & infrastructure", estimatedValue: 2000000000, notes: "Post-invasion reconstruction"}
    ]
  }
];

saveJsonFile(contractorData, 'public/data/contractor-by-war.json');

// 7. Generate draft-analysis.json
console.log('7️⃣ Analyzing Draft vs Volunteer Wars...');

const draftWars = [
  {name: "World War I", drafted: 2800000, totalServed: 4700000, duration: 2, outcome: "Victory"},
  {name: "World War II", drafted: 10000000, totalServed: 16100000, duration: 4, outcome: "Victory"},
  {name: "Korean War", drafted: 1500000, totalServed: 5700000, duration: 3, outcome: "Stalemate"},
  {name: "Vietnam War", drafted: 2200000, totalServed: 8700000, duration: 11, outcome: "Defeat"}
];

const volunteerWars = conflicts.filter(c => c.startYear >= 1973).map(c => ({
  name: c.name,
  duration: c.endYear - c.startYear + 1,
  outcome: c.outcome
}));

const draftStats = {
  averageDuration: draftWars.reduce((sum, w) => sum + w.duration, 0) / draftWars.length,
  successRate: draftWars.filter(w => w.outcome === "Victory").length / draftWars.length,
  totalDrafted: draftWars.reduce((sum, w) => sum + w.drafted, 0),
  totalServed: draftWars.reduce((sum, w) => sum + w.totalServed, 0)
};

const volunteerStats = {
  averageDuration: volunteerWars.reduce((sum, w) => sum + w.duration, 0) / volunteerWars.length,
  successRate: volunteerWars.filter(w => w.outcome === "Victory" || w.outcome === "Limited Success").length / volunteerWars.length,
  totalWars: volunteerWars.length
};

const draftAnalysis = {
  summary: {
    draftEra: "1917-1973",
    volunteerEra: "1973-present",
    keyFinding: `Draft wars averaged ${draftStats.averageDuration.toFixed(1)} years, volunteer wars averaged ${volunteerStats.averageDuration.toFixed(1)} years`
  },
  draftWars: {
    wars: draftWars,
    stats: draftStats
  },
  volunteerWars: {
    wars: volunteerWars.slice(0, 10), // Limit for brevity
    stats: volunteerStats
  },
  analysis: {
    draftAdvantages: [
      "Higher public investment in quick victory",
      "Democratic brake on war enthusiasm", 
      "Shared sacrifice across social classes"
    ],
    volunteerAdvantages: [
      "Professional military competence",
      "No domestic draft resistance",
      "Easier to deploy globally"
    ],
    volunteerDisadvantages: [
      "Wars can drag on indefinitely",
      "Public disconnected from costs",
      "Military-civilian gap widens"
    ]
  }
};

saveJsonFile(draftAnalysis, 'public/data/draft-analysis.json');

// 8. Enhance veterans-by-war.json
console.log('8️⃣ Enhancing Veterans Data...');

const enhancedVeterans = [
  {
    war: "World War I",
    conflictId: "world-war-i",
    years: "1917-1918",
    served: 4700000,
    killed: 116000,
    wounded: 204000,
    ptsdRate: null,
    suicideEstimate: null,
    avgAge: null,
    livingVeterans: 0,
    notes: "Last WWI veteran died in 2011. Shell shock recognized but not treated."
  },
  {
    war: "World War II", 
    conflictId: "world-war-ii",
    years: "1941-1945",
    served: 16100000,
    killed: 405000,
    wounded: 671000,
    ptsdRate: 0.3,
    suicideEstimate: null,
    avgAge: 98,
    livingVeterans: 119550,
    notes: "GI Bill transformed America. Created middle class and suburbs."
  },
  {
    war: "Korean War",
    conflictId: "korean-war", 
    years: "1950-1953",
    served: 5700000,
    killed: 36500,
    wounded: 103000,
    ptsdRate: 0.25,
    suicideEstimate: null,
    avgAge: 91,
    livingVeterans: 410000,
    notes: "The Forgotten War. Veterans received less recognition and support."
  },
  {
    war: "Vietnam War",
    conflictId: "vietnam-war",
    years: "1964-1975", 
    served: 2700000,
    killed: 58200,
    wounded: 153000,
    ptsdRate: 0.30,
    suicideEstimate: 150000,
    avgAge: 77,
    livingVeterans: 5900000,
    notes: "PTSD first formally defined due to Vietnam advocacy. 9,000+ suicides in first 5 years home."
  },
  {
    war: "Gulf War",
    conflictId: "gulf-war",
    years: "1990-1991",
    served: 694000,
    killed: 383,
    wounded: 467,
    ptsdRate: 0.12,
    suicideEstimate: null,
    avgAge: 58,
    livingVeterans: 650000,
    notes: "Gulf War Illness affected 250,000+ veterans. Causes still disputed."
  },
  {
    war: "Afghanistan",
    conflictId: "afghanistan",
    years: "2001-2021",
    served: 800000,
    killed: 2461,
    wounded: 20744,
    ptsdRate: 0.29,
    suicideEstimate: 30177,
    avgAge: 42,
    livingVeterans: 780000,
    notes: "Burn pit exposure affected 350K+. 17 veterans die by suicide daily."
  },
  {
    war: "Iraq War", 
    conflictId: "iraq-war",
    years: "2003-2011",
    served: 1000000,
    killed: 4431,
    wounded: 31994,
    ptsdRate: 0.29,
    suicideEstimate: null,
    avgAge: 42,
    livingVeterans: 990000,
    notes: "TBI from IEDs affected 380K+. Called signature injury of Iraq."
  },
  {
    war: "War on Terror (Combined)",
    conflictId: "war-on-terror",
    years: "2001-2021",
    served: 2700000,
    killed: 7000,
    wounded: 53000,
    ptsdRate: 0.29,
    suicideEstimate: 30177,
    avgAge: 42,
    livingVeterans: 2500000,
    notes: "Post-9/11 GI Bill disbursed $78B. PACT Act covers toxic exposure."
  }
];

saveJsonFile(enhancedVeterans, 'public/data/veterans-by-war.json');

// Validation check - verify all files are valid JSON
console.log('\n🔍 Validating generated files...');
const filesToValidate = [
  'public/data/war-roi.json',
  'public/data/constitutional-scores.json', 
  'public/data/blowback-chains.json',
  'public/data/audit-timeline.json',
  'public/data/spending-per-capita.json',
  'public/data/contractor-by-war.json',
  'public/data/draft-analysis.json',
  'public/data/veterans-by-war.json'
];

let allValid = true;
filesToValidate.forEach(file => {
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    console.log(`✅ ${file} - Valid JSON (${Array.isArray(data) ? data.length + ' items' : Object.keys(data).length + ' keys'})`);
  } catch (error) {
    console.log(`❌ ${file} - Invalid JSON:`, error.message);
    allValid = false;
  }
});

console.log('\n🎉 Data computation complete!');
if (allValid) {
  console.log('✅ All files generated successfully and contain valid JSON.');
} else {
  console.log('⚠️  Some files may have validation issues.');
  process.exit(1);
}