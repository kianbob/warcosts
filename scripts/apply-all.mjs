import { readFileSync, writeFileSync } from 'fs';
import { enrichments2, expansions } from './enrich-conflicts-2.mjs';

// Read the main enrichments
const mainEnrich = await import('./enrich-conflicts-main.mjs');
const enrichments = mainEnrich.enrichments;

const data = JSON.parse(readFileSync('./public/data/conflicts.json', 'utf8'));

let enrichedCount = 0;
let expandedCount = 0;

for (const conflict of data) {
  const id = conflict.id;
  
  // Apply new enrichments (for conflicts missing narrative fields)
  if (enrichments[id]) {
    Object.assign(conflict, enrichments[id]);
    enrichedCount++;
  }
  
  // Apply enrichments from part 2
  if (enrichments2[id]) {
    Object.assign(conflict, enrichments2[id]);
    enrichedCount++;
  }
  
  // Apply expansions (for conflicts that already have fields - expand them)
  if (expansions[id]) {
    const exp = expansions[id];
    // For arrays, replace with expanded versions; for strings, only replace if longer
    for (const [key, value] of Object.entries(exp)) {
      if (Array.isArray(value)) {
        conflict[key] = value;
      } else if (typeof value === 'string' && (!conflict[key] || value.length > conflict[key].length)) {
        conflict[key] = value;
      } else if (typeof value === 'object' && value !== null) {
        conflict[key] = value;
      }
    }
    expandedCount++;
  }
}

// Verify all conflicts have the required fields
const missing = [];
for (const c of data) {
  const fields = ['narrative', 'didYouKnow', 'keyQuote', 'costBreakdown', 'legacyImpact', 'controversies', 'keyFigures'];
  const missingFields = fields.filter(f => !c[f]);
  if (missingFields.length > 0) {
    missing.push(`${c.id}: missing ${missingFields.join(', ')}`);
  }
}

if (missing.length > 0) {
  console.log('WARNING: Still missing fields:');
  missing.forEach(m => console.log('  ' + m));
}

writeFileSync('./public/data/conflicts.json', JSON.stringify(data, null, 2));
console.log(`Done! Enriched ${enrichedCount}, expanded ${expandedCount}. Total conflicts: ${data.length}`);
console.log(`Missing: ${missing.length} conflicts still need data`);
