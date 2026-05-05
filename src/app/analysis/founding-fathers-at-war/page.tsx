import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Founding Fathers at War: Six Men Who Won Freedom',
  description: 'Washington\'s generalship, Jefferson\'s pen, Franklin\'s diplomacy, Adams\'s advocacy, Hamilton\'s charge, and Paine\'s words.',
  keywords: ['founding fathers war', 'Washington Revolutionary War', 'Jefferson Declaration', 'Franklin diplomacy', 'Hamilton Yorktown', 'Thomas Paine Common Sense'],
  openGraph: {
    title: 'The Founding Fathers at War — Six Men Who Changed the World',
    description: 'Washington held the army. Jefferson wrote the words. Franklin won the alliance. Adams argued for independence. Hamilton charged the redoubt. Paine lit the fire.',
    url: 'https://warcosts.org/analysis/founding-fathers-at-war',
  },
}

const founders = [
  {
    name: 'George Washington',
    title: 'The Indispensable Man',
    years: '1732–1799',
    warRole: 'Commander-in-Chief of the Continental Army (1775–1783)',
    portrait: '🎖️',
    sections: [
      {
        heading: 'The General Who Held Everything Together',
        text: 'Washington lost more battles than he won. He was outmaneuvered at Long Island, outflanked at Brandywine, and surprised at Germantown. On paper, he was not the best tactical commander of the war — that honor probably belongs to Nathanael Greene or Benedict Arnold (before the treason).\n\nBut Washington was something more important than a brilliant tactician. He was the man who held the cause together when everything said it should fail. When the army was starving at Valley Forge, Washington stayed. When soldiers\' enlistments expired and they walked home, Washington rebuilt. When Congress failed to pay the troops and officers plotted mutiny (the Newburgh Conspiracy), Washington talked them down with nothing but his personal authority and a pair of reading glasses.\n\n"Gentlemen," he said, struggling to read a letter, "you will permit me to put on my spectacles, for I have not only grown gray but almost blind in the service of my country." Hardened officers wept. The mutiny dissolved.',
      },
      {
        heading: 'His Greatest Victory',
        text: 'Washington\'s greatest moment was not Yorktown — it was what came after. On December 23, 1783, he voluntarily resigned his commission and returned to Mount Vernon as a private citizen. In an age when victorious generals became kings, Washington gave up power.\n\nKing George III, upon hearing that Washington would resign, said: "If he does that, he will be the greatest man in the world." He did. And he was.',
      },
    ],
  },
  {
    name: 'Thomas Jefferson',
    title: 'The Pen of the Revolution',
    years: '1743–1826',
    warRole: 'Author of the Declaration of Independence, Governor of Virginia (1779–1781)',
    portrait: '📜',
    sections: [
      {
        heading: 'The Writer Who Changed History',
        text: 'Thomas Jefferson did not fight at Yorktown or cross the Delaware. His weapon was language — and it proved more powerful than any cannon.\n\nAt 33, Jefferson was assigned to draft the Declaration of Independence because his colleagues recognized his extraordinary gift for expression. In 17 days, working from a portable writing desk in a rented Philadelphia room, he produced 1,320 words that would reshape human civilization.\n\n"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."\n\nThese words have been quoted by every liberation movement since — from French revolutionaries to Frederick Douglass to Martin Luther King Jr. to Nelson Mandela. Jefferson didn\'t just declare independence from Britain. He declared the independence of the individual from arbitrary power.',
      },
      {
        heading: 'The Wartime Governor',
        text: 'Jefferson\'s tenure as wartime Governor of Virginia (1779–1781) was less glorious. When British forces under Banastre Tarleton raided Charlottesville, Jefferson barely escaped capture — fleeing Monticello on horseback just minutes ahead of British cavalry. His reputation suffered, and he was investigated (though exonerated) by the Virginia legislature.\n\nBut Jefferson\'s contribution to the Revolution was never military. It was intellectual. The pen, in his case, truly was mightier than the sword.',
      },
    ],
  },
  {
    name: 'Benjamin Franklin',
    title: 'The Diplomat Who Won the War',
    years: '1706–1790',
    warRole: 'Ambassador to France (1778–1785)',
    portrait: '⚡',
    sections: [
      {
        heading: 'America\'s Secret Weapon',
        text: 'Benjamin Franklin was 70 years old and already the most famous American alive when he sailed to France in 1776 on a mission that would determine the war\'s outcome.\n\nFrance was sympathetic but cautious — backing a losing cause against Britain would be catastrophic. Franklin needed to convince the French court that the ragtag Americans could actually win.\n\nHe did this through a combination of charm, celebrity, and calculated image-making. Franklin wore a fur cap in Paris, played up the image of the "rustic American philosopher," and became the toast of French society. Women wore their hair à la Franklin. His face appeared on medallions, snuffboxes, and chamber pots. Voltaire embraced him publicly.\n\nBehind the celebrity, Franklin was a ruthless diplomat. He played the French against the British, leaked intelligence strategically, and cultivated relationships with key ministers. When news of the American victory at Saratoga reached Paris in December 1777, Franklin had already laid the groundwork. Within weeks, France signed the Treaty of Alliance.',
      },
      {
        heading: 'The Numbers',
        text: 'Franklin secured $9.6 million in French loans and gifts — over $300 million in today\'s dollars. He arranged for 12,000 French troops under Rochambeau, the French fleet under de Grasse, and vast quantities of arms, ammunition, and supplies.\n\nWithout Franklin\'s diplomacy, there is no French alliance. Without the French alliance, there is no Yorktown. Without Yorktown, there is no independence. Franklin\'s drawing rooms in Paris arguably contributed more to American victory than any battlefield.',
      },
    ],
  },
  {
    name: 'John Adams',
    title: 'The Voice of Independence',
    years: '1735–1826',
    warRole: 'Congressional Leader, Diplomat to Holland and France',
    portrait: '🗣️',
    sections: [
      {
        heading: 'The Man Who Argued Independence Into Existence',
        text: 'In the spring of 1776, independence was far from certain. Many delegates to the Continental Congress hoped for reconciliation with Britain. It was John Adams — short, blunt, and relentless — who pushed independence through Congress by sheer force of argument.\n\nAdams served on 90 Congressional committees. He nominated Washington as commander-in-chief — a masterstroke of political judgment that unified the colonies behind a Virginian leader (Adams was from Massachusetts; choosing a Southerner was essential). He was the floor manager for the Declaration of Independence, managing the debate that led to its adoption.\n\nJefferson later said that Adams was "the pillar of [the Declaration\'s] support on the floor of Congress, its ablest advocate and defender."',
      },
      {
        heading: 'Diplomat in the Cold',
        text: 'Adams\'s diplomatic career was as important as his Congressional service. He secured crucial loans from Dutch bankers — $3.6 million that kept the war effort alive. He won Dutch recognition of American independence, opening another diplomatic front against Britain.\n\nHe co-negotiated the Treaty of Paris (1783) that ended the war on remarkably favorable terms — the United States gained all territory east of the Mississippi, fishing rights off Newfoundland, and full British recognition of American sovereignty.\n\nAdams died on July 4, 1826 — the 50th anniversary of the Declaration. His last words: "Thomas Jefferson survives." Unknown to Adams, Jefferson had died hours earlier.',
      },
    ],
  },
  {
    name: 'Alexander Hamilton',
    title: 'The Immigrant Who Saved the Republic',
    years: '1757–1804',
    warRole: 'Washington\'s Chief of Staff, Commander at Yorktown',
    portrait: '⚔️',
    sections: [
      {
        heading: 'From Caribbean Orphan to Washington\'s Right Hand',
        text: 'Alexander Hamilton arrived in America in 1773 — a penniless orphan from the island of Nevis in the Caribbean. Within three years, he was a captain of artillery. Within four, he was George Washington\'s most trusted aide-de-camp — essentially the chief of staff of the Continental Army at age 20.\n\nHamilton managed Washington\'s correspondence, drafted orders, negotiated with Congress, and handled the crushing administrative burden of running an army that was perpetually underfunded, undersupplied, and undermanned. His organizational genius kept the headquarters functioning during the war\'s darkest hours.',
      },
      {
        heading: 'The Charge at Yorktown',
        text: 'Hamilton yearned for battlefield glory and chafed at desk work. At Yorktown, he finally got his chance. On the night of October 14, 1781, Hamilton led 400 men in a bayonet assault on Redoubt No. 10 — a fortified British position that anchored their defense.\n\nThe assault was conducted with unloaded muskets to maintain silence. Hamilton\'s men scrambled over the walls, fought hand-to-hand in the dark, and captured the redoubt in ten minutes with minimal casualties. The fall of Redoubt 10 made the British position at Yorktown untenable. Cornwallis surrendered five days later.',
      },
      {
        heading: 'The Financial Founder',
        text: 'Hamilton\'s greatest contribution came after the war. As the first Secretary of the Treasury, he took a bankrupt nation drowning in $79 million of war debt and, in five years, made it creditworthy. His assumption of state debts, creation of the national bank, and establishment of customs revenue transformed the United States from a fiscal disaster into a functioning economic power.\n\nWithout Hamilton, the nation that won independence might have collapsed under the financial weight of winning it.',
      },
    ],
  },
  {
    name: 'Thomas Paine',
    title: 'The Fire-Starter',
    years: '1737–1809',
    warRole: 'Author of Common Sense and The American Crisis',
    portrait: '🔥',
    sections: [
      {
        heading: 'The Words That Made Revolution Possible',
        text: 'Thomas Paine arrived in America in November 1774 — a twice-failed English corset-maker with a letter of introduction from Benjamin Franklin and nothing else.\n\nFourteen months later, he published Common Sense.\n\nIn an era when political writing was dense and aimed at elites, Paine wrote for ordinary people. In plain, passionate language, he made the case that reconciliation with Britain was impossible, that monarchy itself was absurd, and that Americans had a once-in-history chance to create something new.\n\n"We have it in our power to begin the world over again."\n\nCommon Sense sold 500,000 copies in a nation of 2.5 million — the equivalent of selling 65 million copies today. It turned the debate from "should we seek better terms from Britain?" to "should we declare independence?" Within six months, the Declaration was signed.',
      },
      {
        heading: 'The Crisis Papers',
        text: '"These are the times that try men\'s souls. The summer soldier and the sunshine patriot will, in this crisis, shrink from the service of their country; but he that stands by it now, deserves the love and thanks of man and woman."\n\nPaine wrote these words on a drumhead by firelight in December 1776, as Washington\'s army retreated through New Jersey — cold, demoralized, shrinking daily as enlistments expired. Washington ordered The American Crisis read aloud to every regiment before the crossing of the Delaware.\n\nPaine continued writing Crisis papers throughout the war — 16 in total — each one rallying spirits when they flagged. He served as a common soldier, fought at Trenton and Princeton, and donated every penny of his royalties to the Revolution.',
      },
      {
        heading: 'The Forgotten Founder',
        text: 'Paine\'s later life was tragic. He supported the French Revolution, was imprisoned during the Terror, and barely escaped the guillotine. His deist writings (The Age of Reason) alienated the devoutly religious American public. He returned to America in 1802, impoverished, reviled, and largely forgotten.\n\nOnly six people attended his funeral in 1809.\n\nYet without Thomas Paine, there might be no Declaration of Independence, no crossing of the Delaware, and no United States. He was the spark that lit the fire. And sparks, once they\'ve done their work, are too easily forgotten.',
      },
    ],
  },
]

export default function FoundingFathersAtWarPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Founding Fathers at War' }]} dark />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold mt-6 mb-4">
            The Founding Fathers at War
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto mb-8">
            Six extraordinary men who won American independence — with a sword, a pen, a diplomatic pouch, a legal brief, a bayonet, and a pamphlet.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {founders.map(f => (
              <a key={f.name} href={`#${f.name.toLowerCase().replace(/\s/g, '-')}`} className="bg-stone-800 hover:bg-stone-700 px-4 py-2 rounded-lg text-sm transition-colors">
                {f.portrait} {f.name.split(' ')[1]}
              </a>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {founders.map((f, i) => (
          <article key={i} id={f.name.toLowerCase().replace(/\s/g, '-')} className="scroll-mt-8">
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
              <div className="bg-stone-900 text-white p-8">
                <div className="text-4xl mb-3">{f.portrait}</div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold">{f.name}</h2>
                <p className="text-red-400 text-lg font-medium mt-1">{f.title}</p>
                <p className="text-stone-400 text-sm mt-1">{f.years} · {f.warRole}</p>
              </div>
              <div className="p-8 space-y-8">
                {f.sections.map((s, j) => (
                  <div key={j}>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">{s.heading}</h3>
                    {s.text.split('\n\n').map((p, k) => (
                      <p key={k} className="text-stone-700 mb-3 leading-relaxed">{p}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}

        {/* Closing */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-900">Together, They Changed the World</h2>
          <div className="space-y-3 text-stone-800">
            <p>Washington held the army together through eight impossible years. Jefferson gave the cause its words. Franklin won the alliance that made victory possible. Adams argued independence into existence and secured the peace. Hamilton charged the redoubt and then built the economy. Paine lit the fire that made all of it possible.</p>
            <p>No single one of them could have won independence alone. Together, they created a nation — and proved that free people, governing themselves, could challenge the most powerful empire on Earth and win.</p>
            <p className="font-bold text-red-800 text-lg">They pledged their lives, their fortunes, and their sacred honor. They lost much of the first two. They kept every ounce of the third.</p>
          </div>
        </section>

        <div className="flex gap-4 flex-wrap">
          <Link href="/american-revolutionary-war" className="text-red-600 hover:underline">← Revolutionary War Overview</Link>
          <Link href="/american-revolutionary-war/founding-fathers" className="text-red-600 hover:underline">All 12 Founder Profiles →</Link>
          <Link href="/analysis/price-of-liberty" className="text-red-600 hover:underline">The Price of Liberty →</Link>
        </div>

        <ShareButtons title="The Founding Fathers at War" />
      </main>
    </>
  )
}
