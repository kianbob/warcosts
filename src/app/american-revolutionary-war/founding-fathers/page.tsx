import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Founding Fathers — The Men Who Built America | WarCosts',
  description: 'Profiles of 12 key figures of the American Revolution: Washington, Jefferson, Franklin, Adams, Hamilton, Paine, Lafayette, Greene, and more. Their contributions, sacrifices, quotes, and legacies.',
  keywords: ['founding fathers', 'George Washington', 'Thomas Jefferson', 'Benjamin Franklin', 'Alexander Hamilton', 'American Revolution leaders'],
  openGraph: {
    title: 'The Founding Fathers — What They Risked and What They Built',
    description: '12 profiles of the men and women who created the United States of America.',
    url: 'https://warcosts.org/american-revolutionary-war/founding-fathers',
  },
}

const figures = [
  {
    name: 'George Washington',
    years: '1732–1799',
    role: 'Commander-in-Chief of the Continental Army',
    quote: 'The time is now near at hand which must probably determine whether Americans are to be freemen or slaves.',
    warContribution: 'Led the Continental Army for 8 years through defeat after defeat, starvation, mutiny, and near-collapse. Lost more battles than he won — but won the ones that mattered. His greatest achievement was not any single victory but holding the army and the cause together when all logic said to surrender. At Trenton, he saved the Revolution. At Yorktown, he won it.',
    sacrifice: 'Left his beloved Mount Vernon for 8 years. Served without pay (though he charged expenses). Risked execution as a traitor. Aged dramatically during the war.',
    postWar: 'Presided over the Constitutional Convention. Unanimously elected first President — twice. Set the precedent of peaceful transfer of power by voluntarily stepping down. King George III said his resignation as commander made him "the greatest man in the world."',
    legacy: 'The indispensable man. Without Washington, there is no Continental Army, no endurance through Valley Forge, no victory at Yorktown, and no republic.',
  },
  {
    name: 'Thomas Jefferson',
    years: '1743–1826',
    role: 'Author of the Declaration of Independence',
    quote: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.',
    warContribution: 'At 33, drafted the Declaration of Independence — the most consequential political document since the Magna Carta. In a few hundred words, he articulated principles that would inspire revolutions worldwide. Served as wartime Governor of Virginia (1779-1781), barely escaping capture by Tarleton\'s cavalry.',
    sacrifice: 'His reputation was damaged by his tenure as governor during British invasion. His wife Martha died in 1782, partly from the stress of wartime flight.',
    postWar: 'Minister to France, Secretary of State, Vice President, 3rd President. Louisiana Purchase doubled the nation. Founded the University of Virginia. Died July 4, 1826 — the 50th anniversary of the Declaration.',
    legacy: 'The philosopher of the Revolution. His words in the Declaration are the foundation upon which all American claims to liberty rest. A deeply flawed man who wrote the most perfect expression of human freedom.',
  },
  {
    name: 'Benjamin Franklin',
    years: '1706–1790',
    role: 'Diplomat, Statesman, Scientist, Inventor',
    quote: 'We must, indeed, all hang together or, most assuredly, we shall all hang separately.',
    warContribution: 'At 70 — already the most famous American in the world — Franklin sailed to France on a mission that would determine the war\'s outcome. Through charm, cunning, and celebrity, he secured the French alliance: $9.6 million in loans and gifts, 12,000 troops, and the French Navy. Without Franklin\'s diplomacy, there is no Yorktown.',
    sacrifice: 'Spent nearly a decade in France away from family. His son William, the Loyalist governor of New Jersey, was imprisoned — and they never reconciled. At 70+, he risked capture on the Atlantic crossing.',
    postWar: 'Constitutional Convention delegate at 81. Helped create the Great Compromise between large and small states. His last public act was a petition to Congress to abolish slavery.',
    legacy: 'America\'s first great diplomat. His contributions to victory were arguably more important than any general\'s besides Washington. He proved that a republic could play the great game of European power politics — and win.',
  },
  {
    name: 'John Adams',
    years: '1735–1826',
    role: 'Political Philosopher, Diplomat, Champion of Independence',
    quote: 'The revolution was effected before the war commenced. The revolution was in the minds and hearts of the people.',
    warContribution: 'The firebrand in Congress who pushed independence when others hesitated. Nominated Washington as commander — a masterstroke of political judgment. Served on 90 Congressional committees. Secured Dutch recognition and loans. Co-negotiated the Treaty of Paris that ended the war.',
    sacrifice: 'Spent years overseas, away from Abigail and his children. Nearly died of illness in Holland. His blunt honesty made him enemies at every turn.',
    postWar: 'First Vice President, 2nd President. Kept America out of war with France despite enormous pressure. His son John Quincy became the 6th President. Died July 4, 1826 — same day as Jefferson. His last words: "Thomas Jefferson survives." (Jefferson had died hours earlier.)',
    legacy: 'The most underappreciated founder. If Jefferson was the pen and Washington the sword, Adams was the voice — the man who argued independence into existence in the Continental Congress.',
  },
  {
    name: 'Alexander Hamilton',
    years: '1755 or 1757–1804',
    role: 'Washington\'s Chief of Staff, Artillery Commander',
    quote: 'There is a certain enthusiasm in liberty, that makes human nature rise above itself, in acts of bravery and heroism.',
    warContribution: 'An immigrant orphan from the Caribbean who became Washington\'s most trusted aide in his early twenties. Managed the army\'s correspondence and logistics — essentially functioning as chief of staff. Frustrated by desk work, he begged for a field command and led the decisive bayonet assault on Redoubt No. 10 at Yorktown — the charge that broke British defenses.',
    sacrifice: 'Left King\'s College to join the army at 19. Fought through the entire war. Nearly court-martialed for leaving his post briefly (he and Washington had a famous falling-out).',
    postWar: 'First Secretary of the Treasury. In 5 years, he created the national bank, assumed state war debts ($25M), established the mint, and made American credit internationally viable. Killed in a duel with Aaron Burr on July 12, 1804, at age 47 or 49 (his birth year is disputed).',
    legacy: 'The financial architect of the republic. Without Hamilton\'s economic genius, the nation that won independence might have collapsed under its war debts — as many predicted it would.',
  },
  {
    name: 'Thomas Paine',
    years: '1737–1809',
    role: 'Revolutionary Writer and Propagandist',
    quote: 'These are the times that try men\'s souls. The summer soldier and the sunshine patriot will, in this crisis, shrink from the service of their country; but he that stands by it now, deserves the love and thanks of man and woman.',
    warContribution: 'A failed corset-maker from England who arrived in America in 1774 and changed history. Common Sense (January 1776) sold 500,000 copies — in a nation of 2.5 million — and made the case for independence in language ordinary people could understand. His American Crisis papers sustained morale through the darkest days. Washington read "The American Crisis" aloud to his troops before crossing the Delaware.',
    sacrifice: 'Served in the army as a common soldier. Never profited from his writings — he donated the royalties to the cause.',
    postWar: 'Continued his revolutionary writing. Supported the French Revolution (nearly guillotined). Wrote The Rights of Man and The Age of Reason. Returned to America impoverished and largely forgotten. Only six people attended his funeral.',
    legacy: 'The voice of the common man\'s revolution. Paine proved that ideas, expressed clearly and passionately, can move a nation to action. His arguments for independence, human rights, and republican government remain powerful today.',
  },
  {
    name: 'Marquis de Lafayette',
    years: '1757–1834',
    role: 'French Volunteer, Major General',
    quote: 'Humanity has won its battle. Liberty now has a country.',
    warContribution: 'A 19-year-old French aristocrat who defied his king to fight for American liberty. Arrived in 1777, volunteered without pay, and was commissioned a Major General. Wounded at Brandywine in his first battle. Endured Valley Forge. Commanded the force that pinned Cornwallis at Yorktown before Washington arrived.',
    sacrifice: 'Left his pregnant wife and enormous fortune. Was wounded in battle. The French government initially tried to stop him from going.',
    postWar: 'Returned to France and played a key role in the French Revolution. Drafted the Declaration of the Rights of Man. Sent Washington the key to the Bastille — it still hangs at Mount Vernon. Returned to the US in 1824 to a hero\'s welcome, visiting all 24 states.',
    legacy: 'The embodiment of Franco-American friendship. Proof that the American Revolution was not just a colonial rebellion but a universal cause that inspired people across the world.',
  },
  {
    name: 'Nathanael Greene',
    years: '1742–1786',
    role: 'Major General, Commander of the Southern Campaign',
    quote: 'We fight, get beat, rise, and fight again.',
    warContribution: 'Washington\'s most gifted strategic general. A Quaker with a limp and no military training who became the master of the Southern campaign. After the disasters at Charleston and Camden, Greene took a shattered army and conducted a brilliant campaign of calculated retreats and strategic battles that bled Cornwallis dry. He lost every major battle in the South — and won the campaign.',
    sacrifice: 'Left his iron forge business. His personal finances were ruined by guaranteeing army supply contracts. Died at 43 from sunstroke, impoverished.',
    postWar: 'Died just three years after the war ended. Never held political office. His plantation in Georgia, gifted by a grateful state, was nearly insolvent.',
    legacy: 'The most underrated American general. Military historians consider his Southern Campaign one of the finest examples of strategic warfare in history. He deserves to be as famous as Washington.',
  },
  {
    name: 'Samuel Adams',
    years: '1722–1803',
    role: 'Political Organizer, "Father of the Revolution"',
    quote: 'It does not take a majority to prevail... but rather an irate, tireless minority, keen on setting brushfires of freedom in the minds of men.',
    warContribution: 'If anyone single person "started" the Revolution, it was Samuel Adams. Founded the Sons of Liberty. Organized the Boston Tea Party. Created the Committees of Correspondence — the revolutionary communication network that connected the colonies. Pushed for independence years before most considered it possible.',
    sacrifice: 'Perpetually in debt. The British specifically targeted him for arrest (along with John Hancock) — Paul Revere\'s ride was to warn them.',
    postWar: 'Governor of Massachusetts. Advocate for the Bill of Rights — he insisted the Constitution needed explicit protections for individual liberty.',
    legacy: 'The master organizer who made revolution happen. While others wrote eloquently about liberty, Samuel Adams built the political infrastructure that turned ideas into action.',
  },
  {
    name: 'John Paul Jones',
    years: '1747–1792',
    role: 'Naval Commander, Father of the American Navy',
    quote: 'I have not yet begun to fight!',
    warContribution: 'Conducted daring raids on British shipping and even attacked the British coast — something no one had done in over a century. His epic battle in the Bonhomme Richard against HMS Serapis (September 23, 1779) became legendary: with his ship sinking and on fire, asked if he would surrender, he shouted his immortal reply and went on to capture the British vessel.',
    sacrifice: 'Constantly underfunded and undermanned. Fought with whatever ships Congress could scrape together. Never received the recognition he deserved during his lifetime.',
    postWar: 'Served briefly in the Russian Navy. Died in Paris at 45, largely forgotten. His body was brought to the US Naval Academy in 1905 — his crypt is one of the most visited sites at Annapolis.',
    legacy: 'Established that the United States would have a navy worthy of a sovereign nation. His aggression and refusal to surrender became the defining spirit of the US Navy.',
  },
  {
    name: 'Abigail Adams',
    years: '1744–1818',
    role: 'Political Advisor, Advocate for Women\'s Rights',
    quote: 'Remember the ladies, and be more generous and favorable to them than your ancestors. Do not put such unlimited power into the hands of the husbands.',
    warContribution: 'While John Adams served the Revolution in Congress and Europe, Abigail managed the family farm, finances, and raised four children — including a future president. Her letters to John reveal one of the sharpest political minds of the era. She was his closest advisor, and her counsel influenced his positions on independence, governance, and human rights.',
    sacrifice: 'Endured years of separation from her husband. Managed through wartime scarcity. Lost a stillborn daughter during the stress of the war years.',
    postWar: 'First Second Lady and second First Lady. Her correspondence with John Adams is one of the most valuable primary sources of the Revolutionary era.',
    legacy: 'The most important woman of the Revolution. Her "Remember the Ladies" letter was decades ahead of its time. She proved that the Revolution\'s ideals of equality had implications the founders themselves hadn\'t fully considered.',
  },
  {
    name: 'Baron von Steuben',
    years: '1730–1794',
    role: 'Inspector General of the Continental Army',
    quote: 'You say to your soldier, "Do this," and he does it. But I am obliged to say, "This is the reason why you ought to do that," and then he does it.',
    warContribution: 'A Prussian military officer (his "Baron" title was somewhat embellished) who arrived at Valley Forge in February 1778 and transformed the Continental Army. He developed a standardized drill system, personally training a model company that then trained others. He taught soldiers bayonet technique, field sanitation, and how to maneuver as a unit. Before von Steuben, the army was a militia. After von Steuben, it was an army.',
    sacrifice: 'Left Europe with no guarantee of employment or pay. Worked through the language barrier (he drilled in French, with aides translating to English, while swearing at the soldiers in German — which they loved).',
    postWar: 'Became an American citizen. Lived on a pension and land grants from Congress and various states. His "Blue Book" drill manual was the US Army\'s standard training guide for decades.',
    legacy: 'The man who taught America how to fight. Without von Steuben\'s training at Valley Forge, Monmouth and Yorktown might have been impossible.',
  },
]

export default function FoundingFathersPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Revolutionary War', href: '/american-revolutionary-war' }, { label: 'Founding Fathers' }]} dark />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-6 mb-4">
            The Founding Fathers
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl">
            They pledged their lives, their fortunes, and their sacred honor. These are the men and women who risked everything to create a nation founded on liberty.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        {figures.map((f, i) => (
          <div key={i} className="bg-white border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-stone-50 border-b border-stone-200 p-6">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold">{f.name}</h2>
              <p className="text-red-600 font-medium">{f.role}</p>
              <p className="text-stone-500 text-sm">{f.years}</p>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <blockquote className="border-l-4 border-red-500 pl-4 italic text-stone-600">
                &ldquo;{f.quote}&rdquo;
              </blockquote>

              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide text-stone-400 mb-1">War Contribution</h3>
                <p className="text-stone-700">{f.warContribution}</p>
              </div>

              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide text-stone-400 mb-1">Personal Sacrifice</h3>
                <p className="text-stone-700">{f.sacrifice}</p>
              </div>

              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide text-stone-400 mb-1">After the War</h3>
                <p className="text-stone-700">{f.postWar}</p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h3 className="font-bold text-sm uppercase tracking-wide text-amber-700 mb-1">Legacy</h3>
                <p className="text-stone-700">{f.legacy}</p>
              </div>
            </div>
          </div>
        ))}

        <ShareButtons title="The Founding Fathers — What They Risked and Built" />
      </main>
    </>
  )
}
