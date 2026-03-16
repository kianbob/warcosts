import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Revolutionary War Battles — Complete Database of 17 Major Engagements | WarCosts',
  description: 'Every major battle of the American Revolutionary War: dates, casualties, commanders, outcomes, and significance. From Lexington & Concord to Yorktown.',
  keywords: ['Revolutionary War battles', 'Battle of Bunker Hill', 'Battle of Saratoga', 'Battle of Yorktown', 'American Revolution battles'],
  openGraph: {
    title: 'Revolutionary War Battles — 17 Major Engagements',
    description: 'Complete database of every major battle of the American Revolution with casualties, commanders, and outcomes.',
    url: 'https://warcosts.org/american-revolutionary-war/battles',
  },
}

const battles = [
  {
    name: 'Battles of Lexington and Concord',
    date: 'April 19, 1775',
    location: 'Lexington & Concord, Massachusetts',
    americanCasualties: 93,
    britishCasualties: 273,
    commanderAmerican: 'John Parker / James Barrett',
    commanderBritish: 'Francis Smith / Hugh Percy',
    outcome: 'American Victory',
    significance: 'The "shot heard round the world." First military engagements of the Revolution. Militia proved they would fight the British Army. Within weeks, 20,000 militia surrounded Boston.',
  },
  {
    name: 'Battle of Bunker Hill',
    date: 'June 17, 1775',
    location: 'Charlestown, Massachusetts',
    americanCasualties: 450,
    britishCasualties: 1054,
    commanderAmerican: 'William Prescott / Israel Putnam',
    commanderBritish: 'William Howe',
    outcome: 'British Pyrrhic Victory',
    significance: 'Americans proved they could stand against professional British troops. British suffered devastating casualties — over 40% of their attacking force. "Don\'t fire until you see the whites of their eyes." The British never attempted another frontal assault on entrenched American positions.',
  },
  {
    name: 'Siege of Boston',
    date: 'April 1775 – March 1776',
    location: 'Boston, Massachusetts',
    americanCasualties: 20,
    britishCasualties: 30,
    commanderAmerican: 'George Washington',
    commanderBritish: 'William Howe',
    outcome: 'American Victory',
    significance: 'Washington\'s first success as commander. Henry Knox\'s epic transport of 60 tons of cannons from Fort Ticonderoga — 300 miles through winter — forced British evacuation. Boston was never threatened again.',
  },
  {
    name: 'Battle of Long Island',
    date: 'August 27, 1776',
    location: 'Brooklyn, New York',
    americanCasualties: 2000,
    britishCasualties: 400,
    commanderAmerican: 'George Washington',
    commanderBritish: 'William Howe',
    outcome: 'British Victory',
    significance: 'Largest battle of the entire war with 40,000 combatants. Washington\'s army was nearly destroyed but escaped across the East River in a masterful nighttime retreat through fog. Had the British pursued, the war might have ended here.',
  },
  {
    name: 'Battle of Trenton',
    date: 'December 26, 1776',
    location: 'Trenton, New Jersey',
    americanCasualties: 5,
    britishCasualties: 918,
    commanderAmerican: 'George Washington',
    commanderBritish: 'Johann Rall (Hessians)',
    outcome: 'American Victory',
    significance: 'Washington\'s desperate gamble. Crossed the icy Delaware on Christmas night with 2,400 men. Captured nearly the entire Hessian garrison. Only 5 Americans wounded — two froze to death on the march. Saved the Revolution when enlistments were expiring and morale had collapsed.',
  },
  {
    name: 'Battle of Princeton',
    date: 'January 3, 1777',
    location: 'Princeton, New Jersey',
    americanCasualties: 75,
    britishCasualties: 365,
    commanderAmerican: 'George Washington',
    commanderBritish: 'Charles Mawhood',
    outcome: 'American Victory',
    significance: 'Quick follow-up to Trenton. Washington left campfires burning to deceive Cornwallis, then marched around his flank. Frederick the Great called the Ten Crucial Days campaign "the most brilliant in military history."',
  },
  {
    name: 'Battle of Brandywine',
    date: 'September 11, 1777',
    location: 'Chadds Ford, Pennsylvania',
    americanCasualties: 1300,
    britishCasualties: 587,
    commanderAmerican: 'George Washington',
    commanderBritish: 'William Howe',
    outcome: 'British Victory',
    significance: 'Howe\'s flanking maneuver caught Washington off guard — a pattern that echoed Long Island. Led to the British capture of Philadelphia, the American capital. Lafayette was wounded here in his first battle.',
  },
  {
    name: 'Battle of Germantown',
    date: 'October 4, 1777',
    location: 'Germantown, Pennsylvania',
    americanCasualties: 1073,
    britishCasualties: 535,
    commanderAmerican: 'George Washington',
    commanderBritish: 'William Howe',
    outcome: 'British Victory',
    significance: 'Though a defeat, Washington\'s willingness to counterattack impressed European observers, especially the French. The aggressive plan — attacking with four converging columns at dawn — showed the Continental Army was no rabble.',
  },
  {
    name: 'Battles of Saratoga',
    date: 'September 19 – October 7, 1777',
    location: 'Saratoga, New York',
    americanCasualties: 800,
    britishCasualties: 1500,
    commanderAmerican: 'Horatio Gates / Benedict Arnold',
    commanderBritish: 'John Burgoyne',
    outcome: 'Decisive American Victory',
    significance: 'THE turning point of the war. Burgoyne\'s entire army of 6,000 surrendered — the first time a British army surrendered in the field. Benedict Arnold\'s reckless bravery at Freeman\'s Farm was decisive (before his treason). Directly convinced France to enter the war as an American ally, changing everything.',
  },
  {
    name: 'Valley Forge (Winter Encampment)',
    date: 'December 1777 – June 1778',
    location: 'Valley Forge, Pennsylvania',
    americanCasualties: 2500,
    britishCasualties: 0,
    commanderAmerican: 'George Washington',
    commanderBritish: 'N/A',
    outcome: 'Crucible of the Army',
    significance: 'Not a battle but the defining moment of American endurance. 2,500 died of typhus, smallpox, dysentery, and exposure. Men left bloody footprints in the snow for lack of shoes. Baron von Steuben arrived and drilled the survivors into a professional army. The force that marched out of Valley Forge was fundamentally transformed.',
  },
  {
    name: 'Battle of Monmouth',
    date: 'June 28, 1778',
    location: 'Monmouth County, New Jersey',
    americanCasualties: 500,
    britishCasualties: 1100,
    commanderAmerican: 'George Washington',
    commanderBritish: 'Henry Clinton',
    outcome: 'Strategic American Victory',
    significance: 'First major test after Valley Forge training. In 100°F heat, the Continental Army stood toe-to-toe with the British in open battle for the first time. Molly Pitcher legend born here — Mary Ludwig Hays took her husband\'s place at the cannon.',
  },
  {
    name: 'Siege of Charleston',
    date: 'March – May 1780',
    location: 'Charleston, South Carolina',
    americanCasualties: 5266,
    britishCasualties: 255,
    commanderAmerican: 'Benjamin Lincoln',
    commanderBritish: 'Henry Clinton',
    outcome: 'British Victory',
    significance: 'Worst American defeat of the war. Entire Southern Continental Army — 5,266 men — captured, the largest surrender of US forces until the Civil War. Shifted the war to the South and led to years of brutal guerrilla warfare.',
  },
  {
    name: 'Battle of Camden',
    date: 'August 16, 1780',
    location: 'Camden, South Carolina',
    americanCasualties: 1900,
    britishCasualties: 314,
    commanderAmerican: 'Horatio Gates',
    commanderBritish: 'Charles Cornwallis',
    outcome: 'British Victory',
    significance: 'Devastating rout. The "Hero of Saratoga" fled the battlefield on the fastest horse available — riding 60 miles in a single day away from the fight. Gates\'s reputation was destroyed. Led to Nathanael Greene\'s appointment.',
  },
  {
    name: 'Battle of Kings Mountain',
    date: 'October 7, 1780',
    location: 'Kings Mountain, South Carolina',
    americanCasualties: 90,
    britishCasualties: 1018,
    commanderAmerican: 'Patriot Militia Leaders',
    commanderBritish: 'Patrick Ferguson',
    outcome: 'American Victory',
    significance: 'Entirely fought between Americans — Patriots vs Loyalists. Overmountain Men destroyed Ferguson\'s force. Jefferson called it "the turn of the tide of success." Shattered British plans to rally Loyalist support.',
  },
  {
    name: 'Battle of Cowpens',
    date: 'January 17, 1781',
    location: 'Cowpens, South Carolina',
    americanCasualties: 124,
    britishCasualties: 839,
    commanderAmerican: 'Daniel Morgan',
    commanderBritish: 'Banastre Tarleton',
    outcome: 'Decisive American Victory',
    significance: 'One of the most tactically perfect battles in military history. Morgan used militia\'s tendency to retreat as a deliberate trap — a double envelopment that destroyed Tarleton\'s force. Studied in military academies to this day.',
  },
  {
    name: 'Battle of Guilford Courthouse',
    date: 'March 15, 1781',
    location: 'Greensboro, North Carolina',
    americanCasualties: 552,
    britishCasualties: 532,
    commanderAmerican: 'Nathanael Greene',
    commanderBritish: 'Charles Cornwallis',
    outcome: 'British Pyrrhic Victory',
    significance: 'Cornwallis "won" but lost a quarter of his army — the men he couldn\'t replace. Charles James Fox said in Parliament: "Another such victory would ruin the British army." Cornwallis retreated to the coast, beginning the chain of events leading to Yorktown.',
  },
  {
    name: 'Siege of Yorktown',
    date: 'September 28 – October 19, 1781',
    location: 'Yorktown, Virginia',
    americanCasualties: 389,
    britishCasualties: 7685,
    commanderAmerican: 'George Washington / Comte de Rochambeau',
    commanderBritish: 'Charles Cornwallis',
    outcome: 'Decisive American/French Victory',
    significance: 'The battle that ended the war. Washington marched 600 miles from New York while de Grasse\'s French fleet blocked British escape by sea. 8,000 French and 11,000 American troops besieged Cornwallis. Hamilton led the decisive assault on Redoubt 10. 7,685 British surrendered. The band played "The World Turned Upside Down." Parliament voted to end the war.',
  },
]

export default function BattlesPage() {
  const totalAmerican = battles.reduce((s, b) => s + b.americanCasualties, 0)
  const totalBritish = battles.reduce((s, b) => s + b.britishCasualties, 0)

  return (
    <>
      <section className="bg-stone-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Revolutionary War', href: '/american-revolutionary-war' }, { label: 'Battles' }]} dark />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-6 mb-4">
            Battles of the American Revolution
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mb-8">
            17 major engagements from the shot heard round the world to the surrender at Yorktown. Every battle that forged American independence.
          </p>
          <div className="flex gap-6 text-center">
            <div className="bg-stone-800 rounded-xl px-6 py-4">
              <div className="text-2xl font-bold text-blue-400">{totalAmerican.toLocaleString()}</div>
              <div className="text-sm text-stone-400">American Casualties</div>
            </div>
            <div className="bg-stone-800 rounded-xl px-6 py-4">
              <div className="text-2xl font-bold text-red-400">{totalBritish.toLocaleString()}</div>
              <div className="text-sm text-stone-400">British Casualties</div>
            </div>
            <div className="bg-stone-800 rounded-xl px-6 py-4">
              <div className="text-2xl font-bold text-amber-400">17</div>
              <div className="text-sm text-stone-400">Major Engagements</div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {battles.map((b, i) => (
            <div key={i} className="bg-white border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{b.name}</h2>
                    <p className="text-stone-500">{b.date} · {b.location}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    b.outcome.includes('American') || b.outcome.includes('Decisive American') || b.outcome === 'Crucible of the Army' || b.outcome.includes('Strategic')
                      ? 'bg-green-100 text-green-800'
                      : b.outcome.includes('Pyrrhic') ? 'bg-amber-100 text-amber-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {b.outcome}
                  </span>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <span className="text-xs text-stone-400 uppercase tracking-wide">American Cmdr</span>
                    <p className="font-medium text-sm">{b.commanderAmerican}</p>
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 uppercase tracking-wide">British Cmdr</span>
                    <p className="font-medium text-sm">{b.commanderBritish}</p>
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 uppercase tracking-wide">American Casualties</span>
                    <p className="font-medium text-sm text-blue-700">{b.americanCasualties.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 uppercase tracking-wide">British Casualties</span>
                    <p className="font-medium text-sm text-red-700">{b.britishCasualties.toLocaleString()}</p>
                  </div>
                </div>

                <p className="text-stone-600">{b.significance}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <ShareButtons title="Revolutionary War Battles Database" />
        </div>
      </main>
    </>
  )
}
