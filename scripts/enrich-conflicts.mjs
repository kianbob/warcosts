// Script to enrich all 36 conflicts with narrative fields
import { readFileSync, writeFileSync } from 'fs';

const data = JSON.parse(readFileSync('./public/data/conflicts.json', 'utf8'));

const enrichments = {
  "revolutionary-war": {
    narrative: "The American Revolutionary War began not as a quest for independence but as a dispute over taxation and representation. After decades of salutary neglect, Britain's attempts to recoup the costs of the Seven Years' War through the Stamp Act, Townshend Acts, and Tea Act ignited colonial resistance. The \"shot heard round the world\" at Lexington and Concord on April 19, 1775, transformed political protest into armed rebellion.\n\nWhat followed was eight years of grinding warfare against the world's most powerful empire. The Continental Army, chronically underfunded and poorly supplied, survived through Washington's dogged persistence rather than battlefield brilliance. Valley Forge's brutal winter of 1777-78 became the crucible of American military identity — 2,000 soldiers died of disease and exposure while Congress debated funding.\n\nThe war's true turning point was the 1778 French alliance, which transformed a colonial rebellion into a global conflict. French naval power proved decisive at Yorktown in 1781, where Cornwallis's surrender effectively ended major combat operations. The Treaty of Paris (1783) recognized American independence.\n\nFrom a libertarian perspective, the Revolution embodies the core principle that people have the right to resist tyrannical government. Yet the Founders themselves immediately grappled with the tension between liberty and order — Shays' Rebellion (1786-87) and the Whiskey Rebellion (1794) showed that the new government could be just as willing to use force against its own citizens as the Crown had been. The Revolution's legacy is paradoxical: it created the world's first constitutional republic dedicated to individual rights, while simultaneously building the framework for an increasingly powerful federal government.",
    didYouKnow: [
      "Only about 3% of colonists actively fought in the Revolution — roughly 80,000 out of 2.5 million. About 20% were active Loyalists who supported Britain.",
      "More American soldiers died of disease (17,000) than in combat (6,800). Smallpox was so devastating that Washington ordered mandatory inoculation — one of the first mass vaccination campaigns in history.",
      "The Continental Congress printed $241 million in paper currency, causing inflation so severe that the phrase 'not worth a Continental' entered the language. A pair of shoes cost $5,000 in Continental dollars by war's end.",
      "An estimated 100,000 Loyalists fled the new nation, losing their property. Many went to Canada, fundamentally shaping Canadian identity as a counter-revolutionary society.",
      "France's financial support for the American Revolution ($13 billion in today's dollars) helped bankrupt the French monarchy, directly contributing to the French Revolution of 1789.",
      "African Americans fought on both sides — about 5,000 served in the Continental Army, while tens of thousands accepted British offers of freedom, forming units like the Ethiopian Regiment."
    ],
    keyQuote: {
      text: "The tree of liberty must be refreshed from time to time with the blood of patriots and tyrants.",
      attribution: "Thomas Jefferson, letter to William Stephens Smith (1787)"
    },
    costBreakdown: "Of $2.4 billion (inflation-adjusted): The Continental Congress spent roughly $1.8 billion, financed primarily through printed currency (causing ruinous inflation), French and Dutch loans, and state contributions. France provided an estimated $13 billion equivalent in military aid, troops, and naval support. Soldiers were often paid in worthless paper or not at all — many veterans received land bounties they were forced to sell at a fraction of their value to speculators.",
    legacyImpact: "Created the world's first modern constitutional republic based on Enlightenment principles of individual rights and limited government. Established the precedent that people can legitimately overthrow tyrannical governments. Inspired the French Revolution, Latin American independence movements, and democratic movements worldwide. However, the Constitution's compromises on slavery planted the seeds of the Civil War, and the expansion of federal power the Founders feared began almost immediately.",
    controversies: [
      "The Revolution's promise of liberty explicitly excluded enslaved people, women, and Native Americans. Many Founders owned slaves while writing 'all men are created equal,' a hypocrisy that would haunt the nation for centuries.",
      "The treatment of Loyalists amounted to political persecution — property confiscation, tar-and-feathering, imprisonment, and forced exile of 100,000 people whose only crime was disagreeing with the Revolution.",
      "The Continental Congress's monetary policy was catastrophic. Printing $241 million in unbacked currency destroyed soldiers' pay and impoverished many who had sacrificed for independence.",
      "Native Americans, who largely sided with Britain (which had limited westward expansion), faced devastating consequences — the new nation immediately began aggressive expansion into their territories.",
      "Washington's suppression of the Newburgh Conspiracy (1783) and later the Whiskey Rebellion (1794) showed the new republic's willingness to use military force against its own citizens."
    ],
    keyFigures: [
      { name: "George Washington", role: "Commander-in-Chief, Continental Army", note: "Won independence through perseverance more than military genius. Lost more battles than he won but kept the army together through eight brutal years." },
      { name: "Benjamin Franklin", role: "Ambassador to France", note: "Secured the French alliance that proved decisive. His diplomacy may have been more important than any battlefield victory." },
      { name: "Marquis de Lafayette", role: "French General in Continental Army", note: "Volunteered at age 19, served without pay, and became Washington's trusted aide. Embodied Franco-American cooperation." },
      { name: "Thomas Paine", role: "Pamphleteer and Revolutionary", note: "Author of 'Common Sense' (1776), which sold 500,000 copies and turned colonial grievances into revolutionary ideology." },
      { name: "Benedict Arnold", role: "Continental General turned Traitor", note: "America's most talented battlefield commander who defected to Britain after being passed over for promotion and mired in debt." },
      { name: "King George III", role: "British Monarch", note: "Insisted on crushing the rebellion despite warnings from Parliament. His intransigence united moderate colonists behind independence." }
    ]
  },

  "quasi-war": {
    narrative: "The Quasi-War (1798-1800) was America's first undeclared war — a naval conflict with France that established the dangerous precedent of presidents waging war without formal congressional declarations. After the French Revolution, the new French Republic began seizing American merchant ships, outraged that the U.S. had signed the Jay Treaty with Britain.\n\nThe XYZ Affair (1797) — in which French diplomats demanded bribes from American envoys — inflamed American public opinion. Congress authorized naval action without a formal declaration of war, creating the pattern that would define most future American conflicts. Over two years, the fledgling U.S. Navy captured 85 French vessels while losing only one warship.\n\nPresident Adams resolved the crisis through diplomacy despite enormous political pressure from his own Federalist Party (led by Alexander Hamilton) to escalate into full war. The Convention of 1800 ended hostilities but cost Adams his presidency — the Federalist war hawks never forgave his restraint.\n\nThe Quasi-War also produced the Alien and Sedition Acts, some of the most repressive legislation in American history, criminalizing criticism of the government. The libertarian lesson is stark: even a minor, limited conflict became the pretext for dramatic expansions of government power and suppression of civil liberties.",
    didYouKnow: [
      "The U.S. Navy barely existed before the Quasi-War — Congress had to authorize construction of six frigates (including the USS Constitution) specifically for this conflict.",
      "France had seized over 300 American merchant ships by 1798, causing estimated losses of $20 million ($500 million today).",
      "The Alien and Sedition Acts, passed during the war hysteria, made it a crime to criticize the president or Congress — newspaper editors were jailed for writing unfavorable articles.",
      "The XYZ Affair got its name because American diplomats refused to name the French agents who demanded $250,000 in bribes, referring to them only as X, Y, and Z.",
      "Toussaint Louverture's Haitian revolutionaries secretly cooperated with the U.S. Navy against France, in one of history's more unlikely alliances."
    ],
    keyQuote: {
      text: "Millions for defense, but not one cent for tribute!",
      attribution: "Robert Goodloe Harper, Federalist congressman (1798), responding to French bribery demands"
    },
    costBreakdown: "Of $160 million (inflation-adjusted): Most costs went to rapidly building up the U.S. Navy from virtually nothing — construction of warships, outfitting of merchant vessels as privateers, and maintaining crews. The naval expansion laid the groundwork for American sea power but also created a permanent military establishment the Founders had feared.",
    legacyImpact: "Established the precedent of undeclared presidential warfare that would become the norm for American conflicts. Created the Department of the Navy (1798) as a permanent institution. Produced the Alien and Sedition Acts — a template for wartime civil liberties abuses repeated in every subsequent conflict. Adams' diplomatic resolution, while politically costly, demonstrated that restraint in foreign affairs could prevent unnecessary escalation.",
    controversies: [
      "The Alien and Sedition Acts criminalized political dissent, with multiple newspaper editors imprisoned. Jefferson and Madison secretly authored the Kentucky and Virginia Resolutions in response, arguing states could nullify unconstitutional federal laws.",
      "Hamilton and the Federalist war hawks wanted full-scale war with France and even proposed invading Louisiana and Latin America — a dramatic expansion Adams wisely rejected.",
      "Congress authorized naval action without a formal declaration of war, establishing the precedent that presidents could wage undeclared wars — a loophole exploited by every subsequent administration."
    ],
    keyFigures: [
      { name: "John Adams", role: "President of the United States", note: "Chose diplomacy over war despite massive political pressure, costing him reelection but preventing a disastrous full-scale conflict." },
      { name: "Alexander Hamilton", role: "Inspector General of the Army", note: "Pushed aggressively for war with France and raised a 10,000-man army, raising fears of military dictatorship." },
      { name: "Thomas Truxtun", role: "Captain, U.S. Navy", note: "Won the war's most significant naval engagements, capturing the French frigate L'Insurgente and defeating La Vengeance." },
      { name: "Talleyrand", role: "French Foreign Minister", note: "Orchestrated the XYZ bribery demands, then later negotiated the peace treaty when France realized the conflict was counterproductive." }
    ]
  },

  "barbary-wars": {
    narrative: "The First Barbary War (1801-1805) saw the young American republic project military force across an ocean for the first time. For years, the United States had paid tribute to the Barbary States of North Africa — Morocco, Algiers, Tunis, and Tripoli — to protect American merchant ships from piracy. By 1800, these payments consumed 20% of the federal budget.\n\nWhen Tripoli's Pasha Yusuf Karamanli demanded increased tribute and declared war by cutting down the flagpole at the American consulate, President Jefferson — despite his small-government philosophy — sent the Navy to fight. The four-year campaign featured dramatic episodes: the capture and imprisonment of the USS Philadelphia's crew, Lieutenant Stephen Decatur's daring raid to burn the captured ship (which Lord Nelson called 'the most bold and daring act of the age'), and an overland march across the Libyan desert led by Marine Lieutenant Presley O'Bannon.\n\nThe war ended with a treaty that reduced but did not eliminate tribute payments — the U.S. continued paying Algiers until the Second Barbary War in 1815. The conflict established America's first overseas military intervention and created the Marine Corps legend ('to the shores of Tripoli').\n\nThe libertarian irony is rich: Jefferson, the apostle of limited government, launched America's first overseas military expedition. The precedent of using military force to protect commercial interests abroad would be invoked by every interventionist president that followed.",
    didYouKnow: [
      "The U.S. was paying 20% of its annual federal budget in tribute to the Barbary States before the war — roughly $1 million per year when total federal revenue was about $5 million.",
      "The phrase 'to the shores of Tripoli' in the Marines' Hymn comes from this war — specifically from the 1805 Battle of Derna, the first time the American flag was raised over a foreign battlefield.",
      "William Eaton led a ragtag army of 8 Marines and 500 Arab and Greek mercenaries on a 500-mile march across the Libyan desert to attack Tripoli from the landward side.",
      "Stephen Decatur's raid to burn the captured USS Philadelphia was accomplished by disguising his crew as Maltese sailors and sneaking into Tripoli harbor at night.",
      "The treaty ending the war still required a $60,000 ransom payment for the Philadelphia's captured crew — effectively paying tribute while claiming victory."
    ],
    keyQuote: {
      text: "The most bold and daring act of the age.",
      attribution: "Lord Horatio Nelson, British Admiral, describing Decatur's burning of the USS Philadelphia (1804)"
    },
    costBreakdown: "Of $80 million (inflation-adjusted): The majority funded naval operations including maintaining a Mediterranean squadron of frigates and smaller vessels, plus the unorthodox overland expedition. Before the war, the U.S. had spent an estimated $1.25 million annually in tribute payments — roughly $40 million today — making the war arguably cost-effective in the long run.",
    legacyImpact: "Established the precedent of American military intervention overseas to protect commercial interests. Created the Marine Corps mythos and warrior culture that persists today. Demonstrated that the U.S. would use force rather than pay extortion — though tribute payments to other Barbary States continued until 1815. Set the template for every future 'protecting American interests abroad' justification for intervention.",
    controversies: [
      "Jefferson launched the war without congressional authorization, relying on his executive power as commander-in-chief — contradicting his own strict-constructionist philosophy about limited federal power.",
      "The treaty ending the war included a $60,000 ransom payment, meaning the U.S. effectively paid tribute while claiming military victory.",
      "William Eaton's plan to overthrow the Pasha and install his brother was abandoned mid-execution when diplomats negotiated a separate peace — the first of many times the U.S. would use and then abandon foreign allies."
    ],
    keyFigures: [
      { name: "Thomas Jefferson", role: "President of the United States", note: "Small-government advocate who launched America's first overseas military expedition, establishing precedents he would have criticized in others." },
      { name: "Stephen Decatur", role: "U.S. Navy Lieutenant (later Commodore)", note: "Led the daring raid to burn the USS Philadelphia and became America's first military celebrity." },
      { name: "William Eaton", role: "U.S. Diplomatic Agent / Military Commander", note: "Led the extraordinary overland march across Libya with a force of Marines and mercenaries to attack Derna." },
      { name: "Presley O'Bannon", role: "U.S. Marine Lieutenant", note: "Led the Marines at the Battle of Derna and raised the American flag on foreign soil for the first time." }
    ]
  },

  "war-of-1812": {
    narrative: "The War of 1812 is America's most forgotten major war — and perhaps its most unnecessary. Ostensibly fought over British impressment of American sailors and interference with trade, the real driving forces were War Hawks in Congress who coveted British Canada and sought to crush Native American resistance on the frontier.\n\nThe war was a military disaster for the United States. The invasion of Canada failed spectacularly — American forces were repelled at nearly every turn, and the British burned Washington, D.C. in August 1814, torching the White House and Capitol. Only the defense of Baltimore (inspiring Francis Scott Key's 'Star-Spangled Banner') and Andrew Jackson's victory at New Orleans salvaged American pride — though the New Orleans battle was fought two weeks after the peace treaty was signed, because news traveled slowly.\n\nThe Treaty of Ghent (1814) resolved essentially nothing — impressment wasn't even mentioned, and borders returned to pre-war lines. Yet Americans convinced themselves they had won a 'Second War of Independence.'\n\nThe war's greatest victims were Native Americans. Tecumseh's confederation, which had allied with Britain, was destroyed. Without British support, Native nations east of the Mississippi were left defenseless against American expansion. The War of 1812 didn't win American freedom — it enabled the ethnic cleansing of the continent.\n\nFor libertarians, the war illustrates how government propaganda can transform a pointless conflict into a patriotic myth. The U.S. fought a war of choice, achieved none of its stated objectives, saw its capital burned, and somehow declared victory.",
    didYouKnow: [
      "The British burned the White House and Capitol building in August 1814 — the only time a foreign power has captured and burned the American capital.",
      "The Battle of New Orleans, Andrew Jackson's greatest victory, was fought on January 8, 1815 — two weeks after the peace treaty was signed on December 24, 1814.",
      "An estimated 15,000 Americans died, but only about 2,260 were killed in battle — the rest died of disease, making it another war where germs killed more than guns.",
      "The war effectively ended Tecumseh's Native American confederation, removing the last organized indigenous resistance to American westward expansion east of the Mississippi.",
      "The Treaty of Ghent didn't address any of the war's stated causes — impressment, trade interference, or territorial claims. Both sides simply agreed to stop fighting.",
      "The Hartford Convention of 1814-15 saw New England Federalists seriously discuss seceding from the Union over the war — foreshadowing the secession crisis 50 years later."
    ],
    keyQuote: {
      text: "I acknowledge that the war has been productive of evil and of good, but I think the good preponderates.",
      attribution: "Albert Gallatin, Secretary of the Treasury, struggling to find positives after a war that achieved none of its objectives"
    },
    costBreakdown: "Of $1.8 billion (inflation-adjusted): Naval construction and operations consumed the largest share, including building the Great Lakes fleet from scratch. Army operations on the Canadian border were chronically underfunded — militia units often refused to cross into Canada, claiming their enlistment only covered defensive operations. The burning of Washington caused significant property damage, and wartime inflation and trade disruption devastated the American economy.",
    legacyImpact: "Destroyed Tecumseh's Native American confederation, enabling unrestricted American expansion westward — the war's most consequential outcome. Created the 'Star-Spangled Banner' and Andrew Jackson's political career (leading to the presidency). Ended the Federalist Party, whose opposition to the war was branded treasonous. Established the myth of American military invincibility despite the war's actual mixed results. Ironically improved U.S.-British relations in the long run by resolving lingering Revolutionary War tensions.",
    controversies: [
      "The war was driven by 'War Hawks' who wanted to conquer Canada and destroy Native American nations, not by legitimate self-defense — making it one of America's earliest wars of aggression.",
      "The burning of Washington exposed the federal government's complete inability to defend its own capital, with militia units fleeing at the first shot in the Battle of Bladensburg.",
      "Andrew Jackson's post-war invasion of Spanish Florida and execution of British subjects showed how the war unleashed unchecked military adventurism.",
      "The Hartford Convention exposed deep regional divisions — New England states undermined the war effort, smuggled goods to the British, and nearly seceded."
    ],
    keyFigures: [
      { name: "James Madison", role: "President of the United States", note: "Led the nation into a war it was unprepared to fight, then fled Washington as the British burned it." },
      { name: "Andrew Jackson", role: "Major General, U.S. Army", note: "Won the Battle of New Orleans after the peace treaty, becoming a national hero and future president through a technically meaningless victory." },
      { name: "Tecumseh", role: "Shawnee Chief and Military Leader", note: "Built a pan-Indian confederation to resist American expansion. Killed at the Battle of the Thames (1813), ending organized Native resistance." },
      { name: "Henry Clay", role: "Speaker of the House (War Hawk)", note: "Led congressional pressure for war, driven by ambitions of conquering Canada and expanding American territory." },
      { name: "Francis Scott Key", role: "Lawyer and Poet", note: "Witnessed the bombardment of Fort McHenry and wrote 'The Star-Spangled Banner,' giving the inconclusive war its most enduring legacy." }
    ]
  },

  "mexican-american-war": {
    narrative: "The Mexican-American War (1846-1848) was America's first war of naked territorial aggression — and many knew it at the time. President James K. Polk deliberately provoked the conflict by ordering U.S. troops into disputed territory between the Nueces River and Rio Grande, then told Congress that Mexico had 'shed American blood upon American soil.' It was a lie, and everyone from Abraham Lincoln to Ulysses S. Grant knew it.\n\nGrant, who fought in the war as a young lieutenant, later called it 'one of the most unjust ever waged by a stronger against a weaker nation.' Lincoln, then a freshman congressman, introduced his famous 'Spot Resolutions' demanding Polk identify the exact spot where American blood had been shed — embarrassing the administration but failing to stop the war.\n\nMilitarily, the war was a lopsided American victory. General Winfield Scott's march from Veracruz to Mexico City was a masterpiece of offensive warfare, and Zachary Taylor's victories in northern Mexico made him a national hero (and future president). Mexico lost half its territory — what is now California, Nevada, Utah, Arizona, New Mexico, Colorado, and parts of Wyoming, Kansas, and Oklahoma.\n\nThe war's consequences were catastrophic. The newly acquired territory reignited the slavery debate with explosive force. The Wilmot Proviso, the Compromise of 1850, Bleeding Kansas, and ultimately the Civil War were all direct consequences of the Mexican-American War's territorial gains. Polk got his empire but planted the seeds of the nation's near-destruction.\n\nFor libertarians, this war is a textbook case of executive manipulation — a president manufacturing a crisis to justify a war of conquest, exactly the kind of executive overreach the Founders feared.",
    didYouKnow: [
      "Mexico lost 55% of its territory — 525,000 square miles including California, which had gold worth billions discovered just nine days before the peace treaty was signed.",
      "Ulysses S. Grant, who fought in the war, later wrote: 'I do not think there was ever a more wicked war than that waged by the United States on Mexico. I thought so at the time... only I had not moral courage enough to resign.'",
      "The 'All of Mexico' movement in Congress wanted to annex the entire country — it was opposed mainly by racist senators who didn't want to incorporate Mexico's non-white population.",
      "Henry David Thoreau went to jail for refusing to pay taxes in protest of the war, writing his famous essay 'Civil Disobedience' — which later influenced Gandhi and Martin Luther King Jr.",
      "About 9,000 of the 13,283 American deaths were from disease, not combat — dysentery, yellow fever, and other illnesses killed seven times more soldiers than Mexican bullets.",
      "The San Patricio Battalion — Irish Catholic immigrants who deserted to fight for Mexico — were among the most controversial figures of the war. Fifty were court-martialed and hanged."
    ],
    keyQuote: {
      text: "I do not think there was ever a more wicked war than that waged by the United States on Mexico.",
      attribution: "Ulysses S. Grant, Personal Memoirs (1885)"
    },
    costBreakdown: "Of $2.5 billion (inflation-adjusted): Military operations including the naval blockade, Scott's amphibious landing at Veracruz, and Taylor's northern campaign consumed the bulk. The Treaty of Guadalupe Hidalgo required the U.S. to pay Mexico $15 million ($500 million today) for the seized territory — a fig leaf of legitimacy for what was essentially conquest. The Gadsden Purchase (1853) added another $10 million for additional land.",
    legacyImpact: "Added 525,000 square miles to the United States, including California's gold fields — transforming the U.S. into a continental power. But the new territory reignited the slavery debate with catastrophic force, directly causing the Compromise of 1850, Bleeding Kansas, and ultimately the Civil War. Established the template of presidential war-making through manufactured provocations. Created lasting Mexican resentment — the loss of half their territory remains a defining national trauma. Thoreau's anti-war 'Civil Disobedience' essay influenced global nonviolent resistance movements.",
    controversies: [
      "Polk manufactured the casus belli by ordering troops into disputed territory, then lied to Congress about Mexico attacking 'American soil' — Lincoln's Spot Resolutions challenged this deception.",
      "The 'All of Mexico' movement revealed naked imperialism, while its opponents' reasoning was openly racist — they opposed annexation because they didn't want to incorporate non-white Mexicans.",
      "The San Patricio Battalion desertions exposed anti-Catholic discrimination in the U.S. Army — Irish immigrants who switched sides were hanged as traitors rather than recognized as conscientious objectors.",
      "The war directly caused the Civil War by reopening the slavery question in new territories — a consequence Polk either didn't foresee or didn't care about."
    ],
    keyFigures: [
      { name: "James K. Polk", role: "President of the United States", note: "Manufactured the war to fulfill Manifest Destiny, acquiring half of Mexico's territory but setting the stage for the Civil War." },
      { name: "Winfield Scott", role: "Commanding General, U.S. Army", note: "Led the brilliant Veracruz-to-Mexico City campaign — the most successful American military operation before the Civil War." },
      { name: "Zachary Taylor", role: "Major General, U.S. Army", note: "Won victories at Palo Alto and Buena Vista, parlaying military fame into the presidency despite having no political experience." },
      { name: "Abraham Lincoln", role: "Freshman Congressman from Illinois", note: "Challenged Polk's war justification with the Spot Resolutions, foreshadowing his later skepticism of executive overreach." },
      { name: "Henry David Thoreau", role: "Writer and Activist", note: "Went to jail rather than pay taxes supporting the war, writing 'Civil Disobedience' — one of history's most influential political essays." }
    ]
  },

  "spanish-american-war": {
    narrative: "The Spanish-American War of 1898 was America's coming-out party as an imperial power — a 'splendid little war' (in John Hay's phrase) that lasted just ten weeks but transformed the United States from a continental republic into a global empire with colonies stretching from the Caribbean to the Pacific.\n\nThe war's origins lie in yellow journalism and imperial ambition. William Randolph Hearst and Joseph Pulitzer's newspapers whipped up public fury over Spanish atrocities in Cuba, and the mysterious explosion of the USS Maine in Havana harbor (almost certainly an accident) provided the perfect casus belli. 'Remember the Maine, to hell with Spain!' became the rallying cry.\n\nThe actual fighting was brief and one-sided. Teddy Roosevelt's Rough Riders charged up San Juan Hill (actually Kettle Hill), Admiral Dewey destroyed the Spanish fleet at Manila Bay in hours, and Spain sued for peace after just 109 days. American combat deaths were minimal — 385 killed in action — but disease killed 2,061 more, a grim preview of the tropical warfare to come in the Philippines.\n\nThe Treaty of Paris gave the United States Cuba (as a protectorate), Puerto Rico, Guam, and the Philippines. For $20 million, America bought itself an empire — and the brutal Philippine-American War that followed. The Anti-Imperialist League, including Mark Twain, Andrew Carnegie, and Samuel Gompers, warned that imperialism would corrupt the republic. They were right.\n\nThe libertarian lesson: the Spanish-American War demonstrates how media manipulation, false-flag incidents, and humanitarian pretexts can be used to justify wars of imperial expansion. Every intervention since has followed a similar playbook.",
    didYouKnow: [
      "The USS Maine explosion that triggered the war was almost certainly an internal accident (a coal bunker fire igniting the ammunition magazine), not a Spanish mine — but 'Remember the Maine!' drove the nation to war anyway.",
      "More Americans died of disease (2,061) than combat (385) — tropical diseases like typhoid, malaria, and yellow fever were far deadlier than Spanish bullets.",
      "The war lasted only 109 days — from April 25 to August 12, 1898 — making it one of the shortest wars in American history.",
      "Theodore Roosevelt resigned as Assistant Secretary of the Navy to form the Rough Riders, a volunteer cavalry unit that included Ivy League athletes, cowboys, and Native Americans.",
      "The Philippines cost the U.S. $20 million in the Treaty of Paris — about $700 million today — but the subsequent Philippine-American War cost $14 billion (adjusted) and killed over 4,000 Americans.",
      "The Anti-Imperialist League included Mark Twain, Andrew Carnegie, Samuel Gompers, and former President Grover Cleveland — a remarkable coalition warning against imperial overreach."
    ],
    keyQuote: {
      text: "You furnish the pictures and I'll furnish the war.",
      attribution: "William Randolph Hearst (attributed), to artist Frederic Remington in Cuba (1897) — disputed but emblematic of media's role in starting wars"
    },
    costBreakdown: "Of $9.6 billion (inflation-adjusted): Naval operations consumed the largest share — maintaining the Atlantic and Pacific fleets, the blockade of Cuba, and the Battle of Manila Bay. Army mobilization was chaotic; the War Department was unprepared for tropical warfare, and soldiers received winter-weight wool uniforms for Caribbean combat. The $20 million payment to Spain for the Philippines proved to be just the down payment on a far more expensive colonial war.",
    legacyImpact: "Transformed the United States from a continental republic into a global empire with overseas colonies. Established the template for humanitarian-intervention-as-pretext that would be used in every subsequent American war. Created the 'Rough Rider' mythology that propelled Theodore Roosevelt to the presidency. Produced the Philippine-American War — a brutal three-year counterinsurgency that killed 200,000+ Filipino civilians. Inaugurated American dominance in the Caribbean that continues to this day.",
    controversies: [
      "The USS Maine explosion was blamed on Spain without evidence, driving the country to war through manufactured outrage — later investigations strongly suggest it was an internal accident.",
      "Yellow journalism by Hearst and Pulitzer deliberately inflated Spanish atrocities and fabricated stories to sell newspapers and push for war — the original 'fake news' driving military action.",
      "The annexation of the Philippines betrayed the war's stated purpose of liberating oppressed peoples — Filipinos who had been fighting for independence from Spain now had to fight for independence from America.",
      "The Teller Amendment promised Cuban independence, but the Platt Amendment that followed made Cuba a de facto American protectorate until 1934, with the U.S. retaining Guantanamo Bay indefinitely."
    ],
    keyFigures: [
      { name: "William McKinley", role: "President of the United States", note: "Reluctantly led the nation to war after the Maine explosion, then enthusiastically embraced empire — acquiring the Philippines 'to Christianize' an already Christian nation." },
      { name: "Theodore Roosevelt", role: "Assistant Secretary of the Navy / Rough Riders Commander", note: "Helped orchestrate the war from his Navy desk, then resigned to lead the Rough Riders, parlaying his fame into the vice presidency and then the presidency." },
      { name: "George Dewey", role: "Commodore, U.S. Navy", note: "Destroyed the Spanish fleet at Manila Bay in a single morning, becoming an instant national hero." },
      { name: "William Randolph Hearst", role: "Newspaper Publisher", note: "His yellow journalism campaign was instrumental in pushing the public and Congress toward war — demonstrating media's power to manufacture consent." },
      { name: "Mark Twain", role: "Author and Anti-Imperialist", note: "Became the most prominent voice against American imperialism, writing savage satires of the Philippine conquest." }
    ]
  },

  "philippine-american-war": {
    narrative: "The Philippine-American War (1899-1902, with guerrilla fighting continuing until 1913) is America's forgotten colonial war — a brutal counterinsurgency that killed over 200,000 Filipino civilians and foreshadowed every failed 'nation-building' project from Vietnam to Afghanistan.\n\nFilipinos had been fighting for independence from Spain and believed the United States would support their republic. Instead, the Treaty of Paris transferred the Philippines to American control for $20 million. When Filipino leader Emilio Aguinaldo realized the U.S. intended colonial rule, he launched a guerrilla war.\n\nThe American response was savage. General Jacob Smith ordered his troops to turn the island of Samar into a 'howling wilderness,' telling them to kill everyone over the age of ten. Water torture (the 'water cure'), concentration camps (called 'reconcentration zones'), and the burning of entire villages became standard tactics. An estimated 200,000-1,000,000 Filipino civilians died from violence, disease, and famine.\n\nThe parallels to later American wars are haunting: a foreign people who didn't want to be 'liberated,' guerrilla resistance that conventional military superiority couldn't defeat, atrocities committed by frustrated soldiers, a domestic anti-war movement branded as unpatriotic, and eventual 'victory' that required decades of military occupation.\n\nMark Twain, who became the war's most prominent critic, suggested redesigning the American flag with 'the white stripes painted black and the stars replaced by the skull and cross-bones.' The Anti-Imperialist League fought the war politically but lost — America had chosen empire.",
    didYouKnow: [
      "General Jacob Smith ordered his troops to kill everyone on Samar over the age of 10, saying 'I want no prisoners. I wish you to kill and burn; the more you kill and burn, the better it will please me.'",
      "American soldiers routinely used the 'water cure' — a torture technique identical to modern waterboarding — on Filipino prisoners. It was openly discussed in newspapers at the time.",
      "An estimated 200,000 to 1,000,000 Filipino civilians died during the war, mostly from disease and famine caused by American 'reconcentration' policies — the same tactics Spain had been condemned for using in Cuba.",
      "The war officially ended in 1902 but Moro resistance in the southern Philippines continued until 1913, and the U.S. didn't grant Philippine independence until 1946.",
      "The war cost 4,196 American lives and $14 billion (adjusted) — making it far more expensive in blood and treasure than the 'splendid little war' against Spain that preceded it.",
      "Mark Twain's anti-war essay 'To the Person Sitting in Darkness' (1901) was one of the most devastating critiques of American imperialism ever written."
    ],
    keyQuote: {
      text: "We have pacified some thousands of the islanders and buried them; destroyed their fields; burned their villages, and turned their widows and orphans out-of-doors... And so, by these Providences of God — and the phrase is the government's, not mine — we are a World Power.",
      attribution: "Mark Twain, 'To the Person Sitting in Darkness' (1901)"
    },
    costBreakdown: "Of $14 billion (inflation-adjusted): The war required maintaining a large expeditionary force of 126,000 troops across a 7,000-island archipelago for years. Naval operations, garrison costs, and counterinsurgency operations consumed the bulk. The U.S. also spent heavily on colonial infrastructure — roads, schools, and public health — as part of 'benevolent assimilation,' attempting to justify occupation through development.",
    legacyImpact: "Established the template for every subsequent American counterinsurgency: initial conventional victory followed by brutal guerrilla war, atrocities, domestic opposition, and eventual exhaustion. The Philippines remained an American colony until 1946. The war's tactics — water torture, reconcentration camps, free-fire zones — reappeared in Vietnam, Iraq, and Afghanistan. Demonstrated that military conquest cannot create stable democratic governance in unwilling populations.",
    controversies: [
      "The war's atrocities were extensively documented at the time — the Senate held hearings on the use of torture, concentration camps, and indiscriminate killing — but no senior officers were meaningfully punished.",
      "President McKinley claimed divine inspiration for annexation, saying he prayed and 'it came to me that there was nothing left for us to do but take them all, and to educate the Filipinos, and uplift and civilize and Christianize them' — ignoring that they were already Christian.",
      "The 'water cure' torture was openly debated in Congress and newspapers, with defenders arguing it was necessary for intelligence gathering — identical arguments to the post-9/11 waterboarding debate.",
      "America used the same 'reconcentration' tactics against Filipino civilians that it had condemned Spain for using in Cuba — the hypocrisy was not lost on critics."
    ],
    keyFigures: [
      { name: "Emilio Aguinaldo", role: "President of the First Philippine Republic", note: "Led Filipino independence fighters against Spain and then against America. Captured in 1901, ending organized resistance." },
      { name: "Jacob Smith", role: "U.S. Army Brigadier General", note: "Ordered the killing of everyone over age 10 on Samar. Court-martialed but only admonished — retired with full pension." },
      { name: "William Howard Taft", role: "Civil Governor of the Philippines", note: "Administered the colony with 'benevolent assimilation' policies — building infrastructure while suppressing independence movements." },
      { name: "Mark Twain", role: "Author and Vice President of the Anti-Imperialist League", note: "Became the war's most prominent literary critic, writing devastating satires of American imperialism." },
      { name: "Arthur MacArthur Jr.", role: "Military Governor of the Philippines", note: "Father of Douglas MacArthur. Implemented harsh counterinsurgency tactics including reconcentration camps." }
    ]
  },

  "iran-1953": {
    narrative: "Operation Ajax (1953) was the CIA's first successful regime change — and one of the most consequential covert operations in history. When Iran's democratically elected Prime Minister Mohammad Mosaddegh nationalized the Anglo-Iranian Oil Company (now BP) to keep Iranian oil profits in Iran, Britain and America responded by destroying Iranian democracy.\n\nThe operation was remarkably simple: CIA agent Kermit Roosevelt Jr. (grandson of Theodore) spent about $1 million bribing Iranian military officers, religious leaders, and street thugs to create chaos. Staged protests, planted newspaper stories, and paid mobs created the appearance of a popular uprising against Mosaddegh. On August 19, 1953, the military arrested Mosaddegh and restored the authoritarian Shah Mohammad Reza Pahlavi to full power.\n\nThe Shah ruled as a brutal dictator for 26 years, with his SAVAK secret police (trained by the CIA and Mossad) torturing and killing thousands of dissidents. When Iranians finally overthrew the Shah in 1979, they directed their fury at the country that had imposed him — taking 52 American hostages for 444 days and establishing an Islamic Republic that remains America's primary adversary in the Middle East.\n\nThe $11 million spent on Operation Ajax may be the most destructive investment in American history. The 1979 hostage crisis destroyed Jimmy Carter's presidency, led to U.S. support for Saddam Hussein's Iraq in the Iran-Iraq War, contributed to the rise of Islamic fundamentalism, and created the adversarial U.S.-Iran relationship that continues to produce crises today — including the 2026 strikes.\n\nThe libertarian lesson is devastating: a covert operation to protect corporate oil profits destroyed a democracy, installed a dictator, produced blowback that has cost trillions of dollars and thousands of lives, and the consequences are still unfolding seven decades later.",
    didYouKnow: [
      "The entire operation cost roughly $1 million ($11 million adjusted) — making it perhaps the highest 'return on investment' for destruction in U.S. intelligence history.",
      "Mosaddegh was TIME Magazine's Man of the Year in 1951 — a democratically elected leader who was overthrown because he tried to keep Iran's oil profits in Iran.",
      "The CIA didn't acknowledge its role in the coup until 2013, when it released classified documents — 60 years after the fact.",
      "Kermit Roosevelt Jr., the operation's leader, was the grandson of President Theodore Roosevelt. After the coup, he left the CIA and became an oil company consultant.",
      "The Shah's SAVAK secret police, trained by the CIA and Israeli Mossad, tortured an estimated 3,000-5,000 political prisoners — creating the conditions for the 1979 Islamic Revolution.",
      "President Eisenhower initially opposed the coup but was convinced by the British (who were furious about oil nationalization) and by Cold War fears that Mosaddegh might align with the Soviets."
    ],
    keyQuote: {
      text: "If you sit in a country long enough, you get used to it. The people who overthrew Mosaddegh were the people who had always run things.",
      attribution: "Kermit Roosevelt Jr., CIA officer who led Operation Ajax, minimizing the coup's significance"
    },
    costBreakdown: "Of $11 million (inflation-adjusted): The operation was remarkably cheap — roughly $1 million in 1953 dollars spent on bribing military officers, religious leaders, newspaper editors, and paid street demonstrators. The long-term costs, however, are incalculable: the 1979 revolution, the hostage crisis, U.S. support for Saddam's Iraq ($40+ billion), and seven decades of adversarial relations with Iran have cost hundreds of billions.",
    legacyImpact: "Destroyed Iranian democracy and installed a brutal dictatorship that lasted 26 years. Created the conditions for the 1979 Islamic Revolution, the hostage crisis, and the adversarial U.S.-Iran relationship that persists today. Demonstrated that covert regime change produces catastrophic long-term blowback. Established the CIA's regime-change playbook that would be used in Guatemala (1954), Congo (1961), Chile (1973), and beyond. Iran's democratic traditions were set back by decades.",
    controversies: [
      "The coup overthrew a democratically elected government to protect British oil profits, dressed up in Cold War anti-communist rhetoric — Mosaddegh was not a communist.",
      "The CIA didn't acknowledge its role until 2013, maintaining six decades of lies about American involvement in destroying Iranian democracy.",
      "The operation's 'success' created a template for CIA regime change that was repeated globally, producing disasters in Guatemala, Congo, Chile, and elsewhere.",
      "The Shah's subsequent 26-year dictatorship, enabled by U.S. support and CIA training of his secret police, created the conditions for anti-American Islamic fundamentalism."
    ],
    keyFigures: [
      { name: "Mohammad Mosaddegh", role: "Prime Minister of Iran (democratically elected)", note: "Nationalized Iranian oil to benefit his people. Overthrown by CIA coup and spent the rest of his life under house arrest until his death in 1967." },
      { name: "Kermit Roosevelt Jr.", role: "CIA Officer, Operation Ajax Leader", note: "Grandson of Theodore Roosevelt. Orchestrated the coup from the U.S. embassy in Tehran with a budget of about $1 million." },
      { name: "Mohammad Reza Shah Pahlavi", role: "Shah of Iran", note: "Restored to full power by the coup. Ruled as an authoritarian for 26 years before being overthrown in the 1979 Islamic Revolution." },
      { name: "Allen Dulles", role: "CIA Director", note: "Authorized Operation Ajax, establishing the CIA's regime-change mission that would define the agency for decades." },
      { name: "Dwight Eisenhower", role: "President of the United States", note: "Approved the coup despite initial reservations, establishing the precedent of presidential authorization for covert regime change." }
    ]
  },

  "guatemala-1954": {
    narrative: "Operation PBSUCCESS (1954) — the CIA-orchestrated overthrow of Guatemala's democratically elected President Jacobo Árbenz — is one of the most devastating examples of American intervention in Latin America. Árbenz's crime was land reform: redistributing unused United Fruit Company land to 100,000 landless peasant families, with compensation based on the company's own (fraudulently low) tax valuations.\n\nThe United Fruit Company had deep ties to the Eisenhower administration — Secretary of State John Foster Dulles and CIA Director Allen Dulles had both worked for the firm's law firm, and numerous other officials held stock. When Árbenz's moderate social democratic reforms threatened corporate profits, the CIA launched a propaganda campaign labeling him a communist.\n\nThe actual 'invasion' was almost farcical — a force of 480 CIA-trained exiles crossed from Honduras, supported by CIA pilots flying P-47 Thunderbolts. The Guatemalan military, intimidated by the show of force and bribed by the CIA, refused to defend the government. Árbenz resigned on June 27, 1954.\n\nWhat followed was catastrophic: a succession of military dictatorships, culminating in the Guatemalan Civil War (1960-1996) that killed an estimated 200,000 people, with the Guatemalan military committing genocide against Mayan indigenous communities. CIA-trained security forces used torture, disappearances, and massacres as standard tactics. A 1999 UN truth commission found that the U.S. bore significant responsibility for the violence.\n\nThe libertarian analysis is damning: a private corporation used its connections to the U.S. government to overthrow a democracy that threatened its profits, triggering 42 years of civil war and genocide. This is what happens when corporate power merges with state power.",
    didYouKnow: [
      "Secretary of State John Foster Dulles and CIA Director Allen Dulles both had financial ties to United Fruit Company through their former law firm, Sullivan & Cromwell.",
      "Árbenz offered to compensate United Fruit for the expropriated land at the value the company had declared for tax purposes — the company had been deliberately undervaluing its land to avoid taxes, then demanded full market value when expropriated.",
      "The 'invasion force' was only 480 men — the coup succeeded mainly through CIA psychological warfare, including a fake radio station broadcasting fictional rebel victories.",
      "The subsequent Guatemalan Civil War (1960-1996) killed an estimated 200,000 people, with 83% of identified victims being indigenous Maya.",
      "A 1999 UN Commission concluded that 'acts of genocide' were committed against the Mayan population by U.S.-backed Guatemalan military forces.",
      "The CIA considered the operation such a success that it used PBSUCCESS as the template for the Bay of Pigs invasion — which failed catastrophically."
    ],
    keyQuote: {
      text: "The United States could not permit a 'deck stacked' so as to leave the U.S. 'no alternative but to accept a Communist-dominated Guatemala.'",
      attribution: "CIA internal assessment justifying the coup, despite no evidence Árbenz was communist"
    },
    costBreakdown: "Of $33 million (inflation-adjusted): The CIA spent approximately $2.7 million on the operation itself — training and equipping the exile force, running the propaganda campaign, and bribing Guatemalan military officers. The true cost was borne by Guatemalans: 42 years of civil war, 200,000 dead, and an economy stunted by decades of military dictatorship and violence.",
    legacyImpact: "Triggered the Guatemalan Civil War (1960-1996) that killed 200,000 people, including acts of genocide against the Mayan population. Established the CIA's Latin America playbook of supporting right-wing military dictatorships against democratic reformers. Radicalized a generation of Latin American leftists, including Che Guevara, who was in Guatemala City during the coup. The operation's perceived 'success' emboldened the CIA to attempt similar operations worldwide, with increasingly disastrous results.",
    controversies: [
      "The coup was directly driven by United Fruit Company lobbying, representing one of the clearest cases of corporate interests dictating U.S. foreign policy — the Dulles brothers' conflict of interest was flagrant.",
      "The CIA's labeling of Árbenz as 'communist' was propaganda — he was a moderate social democrat whose land reform program was modeled on the U.S. Homestead Act.",
      "U.S.-backed Guatemalan military forces committed genocide against Mayan communities, with a 1999 UN truth commission documenting systematic massacres, disappearances, and torture.",
      "The operation's perceived success led directly to the Bay of Pigs fiasco — the CIA used PBSUCCESS as its template for invading Cuba, with catastrophic results."
    ],
    keyFigures: [
      { name: "Jacobo Árbenz", role: "President of Guatemala (democratically elected)", note: "Overthrown for implementing land reform that threatened United Fruit Company profits. Died in exile in 1971." },
      { name: "Allen Dulles", role: "CIA Director", note: "Authorized the coup while having financial ties to United Fruit through his former law firm." },
      { name: "John Foster Dulles", role: "Secretary of State", note: "Pushed for the coup while also having United Fruit connections — the embodiment of corporate-government collusion." },
      { name: "Carlos Castillo Armas", role: "CIA-installed President of Guatemala", note: "Led the CIA-backed exile force. Ruled as a dictator, reversing Árbenz's reforms and disenfranchising indigenous people." },
      { name: "Che Guevara", role: "Argentine doctor in Guatemala City during the coup", note: "Witnessing the overthrow of a democratic government by the CIA radicalized him, leading directly to his role in the Cuban Revolution." }
    ]
  },

  "bay-of-pigs": {
    narrative: "The Bay of Pigs invasion (April 17-19, 1961) was one of the most humiliating military failures in American history — a CIA-organized attempt to overthrow Fidel Castro that collapsed within 72 hours and cemented Castro's power for half a century.\n\nThe CIA recruited and trained 1,400 Cuban exiles (Brigade 2506) in Guatemala, planning an amphibious landing at the Bay of Pigs that would supposedly trigger a popular uprising against Castro. The plan was delusional from the start: the landing zone was surrounded by impassable swamps, the 'secret' operation was reported in the New York Times before it launched, and the CIA's assumption that Cubans would spontaneously revolt had no basis in reality.\n\nPresident Kennedy, who inherited the plan from Eisenhower, approved it but canceled the planned air support at the last minute, leaving the invasion force stranded on the beach without air cover. Cuban forces, fully alerted to the invasion, destroyed the exile brigade in three days. Of 1,400 invaders, 114 were killed and 1,189 captured. The U.S. eventually paid $53 million in food and medicine to ransom the prisoners.\n\nThe fiasco had enormous consequences: it humiliated Kennedy, emboldened Castro, pushed Cuba firmly into the Soviet orbit, and directly led to the Cuban Missile Crisis of 1962 — which brought the world to the brink of nuclear annihilation. Castro used the invasion to justify decades of authoritarian rule, pointing to American aggression as proof that revolutionary vigilance was necessary.\n\nThe libertarian lesson: government agencies operating in secrecy, without democratic accountability, produce catastrophic failures that elected officials are then pressured to support.",
    didYouKnow: [
      "The New York Times reported on the CIA training camps in Guatemala before the invasion — the 'secret' operation was one of the worst-kept secrets in intelligence history.",
      "Kennedy canceled the planned air strikes at the last minute, but the CIA had designed the entire operation around air superiority — without it, the plan was doomed from the start.",
      "The U.S. paid $53 million in baby food and medicine to Cuba to ransom the 1,189 captured invasion force members — after spending $460 million on the failed operation.",
      "The Bay of Pigs directly caused the Cuban Missile Crisis: Khrushchev placed nuclear missiles in Cuba partly to deter another American invasion, bringing the world within hours of nuclear war.",
      "CIA planners assumed Castro was unpopular and that Cubans would rise up — but Castro had just led a popular revolution and had broad public support, especially among the poor."
    ],
    keyQuote: {
      text: "Victory has a hundred fathers, but defeat is an orphan.",
      attribution: "President John F. Kennedy, after the Bay of Pigs disaster (April 1961)"
    },
    costBreakdown: "Of $460 million (inflation-adjusted): Training and equipping Brigade 2506 in Guatemala, purchasing B-26 bombers and transport ships, CIA operational costs, and the eventual $53 million ransom for captured prisoners. The indirect costs — the Cuban Missile Crisis, decades of failed Cuba policy, and the embargo's economic impact — are incalculable.",
    legacyImpact: "Cemented Castro's power for 50 years by validating his warnings about American aggression. Pushed Cuba firmly into the Soviet alliance, leading directly to the Cuban Missile Crisis. Humiliated Kennedy, who then overcompensated with aggressive Cold War posturing. Demonstrated that the CIA's regime-change capabilities were far less impressive than its Guatemala success suggested. The 60+ year U.S. embargo of Cuba, partly a consequence of the Bay of Pigs, has failed to achieve regime change while impoverishing ordinary Cubans.",
    controversies: [
      "Kennedy's cancellation of air support doomed the invasion, but the CIA designed an operation that required presidential commitment it hadn't secured — institutional arrogance at its worst.",
      "The CIA's intelligence assessment that Cubans would revolt against Castro was pure wishful thinking, driven by exile community propaganda rather than actual intelligence.",
      "The operation violated international law — it was an unprovoked attack on a sovereign nation based solely on ideological opposition to its government.",
      "The captured prisoners were used as bargaining chips for 20 months before being ransomed, raising questions about the government's duty to those it sent into harm's way."
    ],
    keyFigures: [
      { name: "John F. Kennedy", role: "President of the United States", note: "Inherited the plan from Eisenhower, approved it against his better judgment, then canceled air support — owning the failure completely." },
      { name: "Allen Dulles", role: "CIA Director", note: "Oversaw the planning and pushed Kennedy to approve, assuring him the operation would succeed. Fired by Kennedy afterward." },
      { name: "Fidel Castro", role: "Prime Minister of Cuba", note: "Personally commanded the defense, crushing the invasion in 72 hours and using it to justify authoritarian rule for decades." },
      { name: "Richard Bissell", role: "CIA Deputy Director for Plans", note: "The operation's chief architect, who designed a plan requiring air superiority without securing firm presidential commitment for air strikes." }
    ]
  },

  "dominican-republic-1965": {
    narrative: "In April 1965, President Lyndon Johnson sent 22,000 U.S. troops to the Dominican Republic to prevent what he claimed was 'another Cuba' — a communist takeover that existed mainly in his imagination. The actual crisis was a civil war between military factions, with constitutionalists trying to restore the democratically elected President Juan Bosch, who had been overthrown by a military coup in 1963.\n\nJohnson's justification shifted daily: first it was to protect American lives, then to prevent communism, then to restore order. The CIA identified exactly 58 'communist' suspects among thousands of constitutionalist fighters — hardly a Bolshevik revolution. Johnson privately admitted he couldn't verify the communist threat but intervened anyway, saying 'I am not going to have another Cuba in the Caribbean.'\n\nThe 22,000-troop deployment — larger than the initial Vietnam escalation happening simultaneously — crushed the constitutionalist movement and installed Joaquín Balaguer, a former associate of the assassinated dictator Rafael Trujillo. Balaguer ruled for 22 of the next 31 years, maintaining power through fraud and repression.\n\nThe intervention killed an estimated 3,000 Dominican civilians and 44 American soldiers. It was the first U.S. military intervention in Latin America since the 'Good Neighbor' policy of the 1930s and signaled that the U.S. would use force to prevent any leftist government in the Western Hemisphere — democratic or not.\n\nThe libertarian parallel to Vietnam is striking: Johnson was simultaneously escalating two interventions based on domino-theory fears, using military force to override the democratic choices of sovereign peoples.",
    didYouKnow: [
      "Johnson deployed 22,000 troops — more than the initial escalation in Vietnam — to a Caribbean island nation of 3.5 million people, an absurdly disproportionate response.",
      "The CIA could only identify 58 suspected communists among the constitutionalist forces — in a country of 3.5 million — yet Johnson claimed a communist takeover was imminent.",
      "The constitutionalists were trying to RESTORE a democratically elected president (Juan Bosch) who had been overthrown by a military coup — the U.S. intervened against democracy.",
      "Joaquín Balaguer, the U.S.-backed strongman, had been a close associate of Rafael Trujillo, one of Latin America's most brutal dictators — whom the CIA had helped assassinate just four years earlier.",
      "The intervention violated the OAS Charter, which prohibits member states from intervening in each other's internal affairs — the U.S. later pressured the OAS to retroactively legitimize the action."
    ],
    keyQuote: {
      text: "We don't propose to sit here in our rocking chair with our hands folded and let the communists set up any government in the Western Hemisphere.",
      attribution: "President Lyndon B. Johnson, justifying the invasion (1965)"
    },
    costBreakdown: "Of $2.8 billion (inflation-adjusted): The rapid deployment of 22,000 troops required massive airlift and sealift operations, establishment of a military occupation government, and extended garrison duty. The operation was conducted simultaneously with the Vietnam escalation, straining military resources and demonstrating the costs of maintaining a global interventionist posture.",
    legacyImpact: "Ended the 'Good Neighbor' era of non-intervention in Latin America, signaling that the U.S. would use force against any leftist government in the hemisphere. Installed an authoritarian who ruled for decades, stunting Dominican democracy. Contributed to anti-American sentiment throughout Latin America. Demonstrated that Cold War fears could justify intervention against democratic movements — a pattern repeated in Chile (1973) and throughout the region.",
    controversies: [
      "The intervention overthrew a movement to restore a democratically elected president, making the U.S. the enemy of democracy rather than its defender.",
      "Johnson's shifting justifications — protecting Americans, then stopping communism, then restoring order — revealed the pretextual nature of the intervention.",
      "The 3,000 civilian deaths from a U.S. military operation against a country that posed no threat to the United States received minimal media attention due to Vietnam dominating the news.",
      "The U.S. pressured the OAS to create an 'Inter-American Peace Force' to legitimize the occupation retroactively — a fig leaf of multilateralism."
    ],
    keyFigures: [
      { name: "Lyndon B. Johnson", role: "President of the United States", note: "Ordered the invasion based on dubious intelligence, simultaneously escalating in Vietnam — demonstrating his willingness to use force first and justify later." },
      { name: "Juan Bosch", role: "Democratically elected President of the Dominican Republic", note: "Overthrown by a military coup in 1963, the constitutionalists fought to restore him — and the U.S. intervened to prevent it." },
      { name: "Joaquín Balaguer", role: "U.S.-backed President of the Dominican Republic", note: "Former Trujillo associate who ruled for 22 of the next 31 years through fraud and repression." },
      { name: "Francisco Caamaño", role: "Constitutionalist Military Leader", note: "Led the pro-democracy forces against the U.S. intervention. Killed in 1973 after returning from exile to lead a guerrilla movement." }
    ]
  },

  "chile-1973": {
    narrative: "The U.S. role in the September 11, 1973 coup against Chile's democratically elected President Salvador Allende is one of the darkest chapters in American foreign policy. When Allende, a democratic socialist, won Chile's 1970 presidential election, President Nixon told CIA Director Richard Helms to 'make the economy scream' to destabilize his government.\n\nThe CIA spent an estimated $8 million (over $50 million today) on covert operations to undermine Allende: funding opposition media, bribing politicians, supporting truckers' strikes, and cultivating military officers willing to overthrow the government. On September 11, 1973, General Augusto Pinochet launched his coup. The military bombed the presidential palace. Allende died inside — officially by suicide, though circumstances remain disputed.\n\nWhat followed was 17 years of military dictatorship. Pinochet's regime killed at least 3,200 people, tortured an estimated 29,000, and drove 200,000 into exile. Operation Condor, a Pinochet-initiated network of South American dictatorships (with CIA knowledge and support), assassinated political opponents across the continent and even in Washington, D.C. — car-bombing former Chilean diplomat Orlando Letelier on Embassy Row in 1976.\n\nThe libertarian analysis cuts both ways: Allende's socialist economic policies were genuinely destructive, causing inflation and shortages. But the response — a CIA-backed military coup that installed a murderous dictator — was infinitely worse than the problem it purported to solve. The Chilean people eventually rejected both Allende's socialism and Pinochet's dictatorship through democratic means, proving that free peoples can solve their own problems without foreign intervention.",
    didYouKnow: [
      "Nixon's direct order to CIA Director Helms was to 'make the economy scream' in Chile — economic warfare against a democratically elected government.",
      "The CIA spent at least $8 million on covert operations to destabilize Allende — funding opposition newspapers, bribing politicians, and supporting economic sabotage.",
      "Pinochet's regime killed 3,200 people, tortured 29,000, and drove 200,000 into exile — with the knowledge and tacit support of the U.S. government.",
      "Operation Condor, initiated by Pinochet with CIA knowledge, assassinated political opponents across South America and even in Washington, D.C. — car-bombing Orlando Letelier six blocks from the White House.",
      "Henry Kissinger said of Allende's election: 'I don't see why we need to stand by and watch a country go communist due to the irresponsibility of its own people.' — openly dismissing democratic self-determination.",
      "Chile's 'Chicago Boys' — economists trained at the University of Chicago under Milton Friedman — implemented free-market reforms under Pinochet that produced economic growth but extreme inequality."
    ],
    keyQuote: {
      text: "I don't see why we need to stand by and watch a country go communist due to the irresponsibility of its own people.",
      attribution: "Henry Kissinger, National Security Advisor, on Chile's democratic election of Allende (1970)"
    },
    costBreakdown: "Of $80 million (inflation-adjusted): The CIA spent approximately $8 million in 1970s dollars on covert operations — funding opposition media (especially El Mercurio newspaper), bribing politicians and military officers, supporting truckers' strikes and economic sabotage, and Track II operations to provoke a military coup. Additional costs included economic warfare through blocking international credit to Chile.",
    legacyImpact: "Installed a 17-year military dictatorship that killed thousands and tortured tens of thousands. Established the model of U.S.-backed 'dirty wars' throughout South America via Operation Condor. Demonstrated that the U.S. would destroy democracy to prevent socialism — undermining American moral authority globally. Chile's eventual transition to democracy in 1990 proved that people can resolve their political conflicts without foreign military intervention. The Pinochet era remains deeply divisive in Chile today.",
    controversies: [
      "Kissinger's dismissal of Chilean democracy — 'the irresponsibility of its own people' — revealed that U.S. policy was fundamentally anti-democratic when democracy produced results Washington disliked.",
      "The assassination of Orlando Letelier in Washington, D.C. by Pinochet's agents (with CIA knowledge of the broader Operation Condor program) was an act of state terrorism on American soil.",
      "The U.S. government's decades-long denial and coverup of its role was finally exposed through declassified documents, but no American officials were ever held accountable.",
      "The 'Chicago Boys' economic experiment under Pinochet remains controversial — defenders credit it with Chile's later prosperity, while critics note it required a military dictatorship to implement and produced extreme inequality."
    ],
    keyFigures: [
      { name: "Salvador Allende", role: "President of Chile (democratically elected)", note: "The world's first democratically elected Marxist head of state. Died during the September 11, 1973 coup — the other 9/11." },
      { name: "Augusto Pinochet", role: "Military Dictator of Chile (1973-1990)", note: "Seized power in the CIA-backed coup and ruled for 17 years, killing 3,200 and torturing 29,000." },
      { name: "Henry Kissinger", role: "National Security Advisor / Secretary of State", note: "Architect of the destabilization campaign, his fingerprints are on the coup, Operation Condor, and thousands of deaths." },
      { name: "Richard Nixon", role: "President of the United States", note: "Ordered the CIA to 'make the economy scream' and authorized covert operations to overthrow Chilean democracy." },
      { name: "Richard Helms", role: "CIA Director", note: "Received Nixon's direct orders to destabilize Chile. Later convicted of lying to Congress about CIA activities in Chile." }
    ]
  },

  "grenada": {
    narrative: "Operation Urgent Fury (October 25-29, 1983) — the U.S. invasion of Grenada — was Ronald Reagan's demonstration that America had overcome its 'Vietnam syndrome.' The invasion of a tiny Caribbean island nation (population 91,000) with 7,600 troops was, in military terms, like using a sledgehammer to crack a walnut.\n\nThe ostensible justification was protecting 600 American medical students after a Marxist coup killed Prime Minister Maurice Bishop. The real motivation was Cold War posturing — Grenada had a Cuban-built airstrip that Reagan claimed (dubiously) was for military use, and the administration wanted to show it would confront Soviet-Cuban influence in the hemisphere.\n\nThe operation was a military embarrassment disguised as a victory. Army and Navy units couldn't communicate because they used different radio frequencies. Navy SEALs drowned during insertion. Rangers parachuted onto an airfield and had to fight off armored vehicles they hadn't been told about. An AC-130 gunship accidentally strafed a mental hospital, killing 18 patients. The 'rescue' of medical students was largely unnecessary — they were in no immediate danger.\n\nDespite the operational chaos, the invasion was completed in four days against minimal opposition (about 800 Cuban construction workers and a small Grenadian army). Reagan's approval ratings soared, and the 'lesson' of Grenada — that quick, decisive military action could erase the memory of Vietnam — would influence American foreign policy for decades.\n\nThe libertarian critique is straightforward: the invasion violated international law, was condemned by the UN General Assembly 108-9, and established the precedent that the U.S. could invade any small country on flimsy pretexts with minimal political consequences.",
    didYouKnow: [
      "Grenada's population was 91,000 — the U.S. invaded with 7,600 troops, nearly 1 soldier for every 12 Grenadian citizens.",
      "Army and Navy units couldn't communicate because they used incompatible radio systems — one officer reportedly used a civilian phone line and his credit card to call in an air strike.",
      "An AC-130 gunship accidentally strafed a Grenadian mental hospital, killing 18 patients — one of the operation's worst incidents.",
      "The UN General Assembly condemned the invasion 108-9, with even close U.S. allies like Britain voting against — Margaret Thatcher was reportedly furious that Reagan invaded a Commonwealth nation without consulting her.",
      "The U.S. military awarded more medals for the Grenada invasion (8,612) than the total number of troops deployed (7,600) — everyone got at least one.",
      "The medical students the invasion supposedly rescued later said they were not in immediate danger and could have been evacuated diplomatically."
    ],
    keyQuote: {
      text: "Our days of weakness are over. Our military forces are back on their feet and standing tall.",
      attribution: "President Ronald Reagan, declaring victory in Grenada (November 1983)"
    },
    costBreakdown: "Of $400 million (inflation-adjusted): The rapid-deployment operation required airlifting thousands of troops from multiple bases, naval operations including an aircraft carrier battle group, and extensive air support. The operation exposed severe interservice communication problems that led to the Goldwater-Nichols Act reforming military command structures — making the invasion's logistics failures its most lasting military legacy.",
    legacyImpact: "Supposedly cured America's 'Vietnam syndrome' and demonstrated that quick military victories were possible — emboldening future interventions in Panama, Iraq, and beyond. Exposed catastrophic military communication failures that led to the Goldwater-Nichols Act (1986), the most significant military reform in decades. Established the precedent that the U.S. could invade small nations with minimal political consequences, even when condemned by the international community.",
    controversies: [
      "The invasion violated international law and was condemned 108-9 by the UN General Assembly — the U.S. vetoed a similar Security Council resolution.",
      "The military banned media from accompanying the invasion force, controlling information for the first time — setting a precedent for media management in future wars.",
      "The 'rescue' justification was largely fabricated — the medical students were not in immediate danger and could have been evacuated diplomatically.",
      "More medals were awarded (8,612) than troops deployed (7,600), creating a culture of participation trophies that critics said cheapened military honors."
    ],
    keyFigures: [
      { name: "Ronald Reagan", role: "President of the United States", note: "Ordered the invasion to demonstrate American military resolve and counter the 'Vietnam syndrome' — using a tiny island as a stage prop for geopolitics." },
      { name: "Maurice Bishop", role: "Prime Minister of Grenada (assassinated)", note: "Popular Marxist leader whose murder in an internal coup provided the pretext for U.S. invasion." },
      { name: "Hudson Austin", role: "Leader of the military coup in Grenada", note: "Overthrew and killed Bishop, then faced the U.S. invasion — arrested and sentenced to death (later commuted)." },
      { name: "Caspar Weinberger", role: "Secretary of Defense", note: "Oversaw the operation despite reservations. The invasion's communication failures led him to support major military reforms." }
    ]
  },

  "panama": {
    narrative: "Operation Just Cause (December 20, 1989 - January 31, 1990) was the U.S. invasion of Panama to arrest one man: General Manuel Noriega, Panama's dictator — and until recently, a CIA asset on the American payroll.\n\nNoriega had been a paid CIA informant since the 1960s and was on the agency's payroll through the 1980s, receiving as much as $200,000 per year while simultaneously running drugs through Panama. The Reagan administration tolerated Noriega's drug trafficking because he was useful for supporting the Contras in Nicaragua and providing intelligence on Cuba. When Noriega's drug connections became too embarrassing and he began defying U.S. demands, the same government that had paid and protected him decided to remove him.\n\nPresident George H.W. Bush ordered 27,684 troops into Panama in the largest U.S. military operation since Vietnam. The assault was overwhelming — Apache helicopters, stealth fighters (used in combat for the first time), and paratroopers descended on a country of 2.5 million people. Noriega was captured after hiding in the Vatican embassy, where U.S. forces blasted rock music (including 'I Fought the Law' and 'You Shook Me All Night Long') until he surrendered.\n\nThe human cost was borne by ordinary Panamanians. The invasion destroyed the El Chorrillo neighborhood, killing an estimated 500 civilians (some estimates run as high as 4,000) and leaving 20,000 homeless. Mass graves were reported but never fully investigated.\n\nThe libertarian lesson is a hall of mirrors: the U.S. government created Noriega, armed him, paid him, protected his drug trafficking, then invaded a sovereign nation and killed hundreds of civilians to arrest him. The War on Drugs was used to justify a war that was really about reasserting U.S. control over the Panama Canal Zone.",
    didYouKnow: [
      "Noriega was on the CIA payroll since the 1960s, earning up to $200,000 per year while simultaneously trafficking cocaine — the U.S. government knew and tolerated it for decades.",
      "The invasion was the first combat use of the F-117 Nighthawk stealth fighter, which dropped two 2,000-pound bombs — both of which missed their targets.",
      "U.S. forces surrounded the Vatican embassy and blasted rock music at deafening volumes for days, including 'I Fought the Law,' 'You Shook Me All Night Long,' and 'Welcome to the Jungle' to force Noriega out.",
      "The El Chorrillo neighborhood, home to some of Panama's poorest residents, was largely destroyed in the invasion, leaving an estimated 20,000 people homeless.",
      "Noriega was convicted of drug trafficking in Miami and sentenced to 40 years in prison — after decades of the U.S. government knowingly protecting his drug operations.",
      "The invasion killed 23 American soldiers and an estimated 500 Panamanian civilians — though some human rights organizations put the civilian toll as high as 4,000."
    ],
    keyQuote: {
      text: "The goals of the United States have been to safeguard the lives of Americans, to defend democracy in Panama, to combat drug trafficking, and to protect the integrity of the Panama Canal Treaty.",
      attribution: "President George H.W. Bush, announcing the invasion (December 20, 1989) — while invading a country whose dictator the CIA had been paying for decades"
    },
    costBreakdown: "Of $400 million (inflation-adjusted): The operation involved deploying 27,684 troops, extensive air operations including stealth fighters and Apache helicopters, and weeks of occupation. Reconstruction costs for the destroyed El Chorrillo neighborhood and other damage were significant. The long-term cost of Noriega's trial, imprisonment, and extradition proceedings added millions more.",
    legacyImpact: "Demonstrated that the U.S. would use massive military force against its own former assets when they became inconvenient. Set the precedent for 'regime change' operations justified by drug trafficking and human rights — templates used in future interventions. The destruction of El Chorrillo and civilian casualties generated lasting anti-American sentiment in Panama. Foreshadowed the pattern of creating, empowering, then destroying foreign leaders that would repeat with Saddam Hussein.",
    controversies: [
      "The U.S. created Noriega — paying, arming, and protecting his drug trafficking for decades — then invaded a sovereign nation to arrest him when he became politically inconvenient.",
      "Civilian casualties in El Chorrillo were severe and poorly documented — human rights organizations accused the U.S. military of covering up the true death toll.",
      "The invasion violated international law and was condemned by the OAS and UN General Assembly, though the U.S. vetoed a Security Council resolution.",
      "Mass graves of Panamanian civilians were reported but never fully investigated, with the U.S. military accused of burying bodies to minimize the official death count."
    ],
    keyFigures: [
      { name: "George H.W. Bush", role: "President of the United States", note: "As former CIA Director, he knew of Noriega's intelligence value — as President, he ordered the invasion to arrest the same man he'd once tacitly protected." },
      { name: "Manuel Noriega", role: "Military Dictator of Panama / CIA Asset", note: "Worked for the CIA since the 1960s while running drugs through Panama. Convicted of drug trafficking after the invasion and imprisoned for 27 years." },
      { name: "Colin Powell", role: "Chairman of the Joint Chiefs of Staff", note: "Oversaw the military planning for Just Cause, his first major operation as the nation's top military officer." },
      { name: "Marc Cisneros", role: "Commander, U.S. Army South", note: "Led ground operations and dealt with the aftermath, including the controversial handling of civilian casualties." }
    ]
  },

  "somalia": {
    narrative: "The Somalia intervention (1992-1994) began as a humanitarian mission and ended as a humiliating withdrawal — the pattern that would define American military adventures for the next three decades.\n\nPresident George H.W. Bush deployed 25,000 troops in December 1992 to protect food aid deliveries during a catastrophic famine. The mission, Operation Restore Hope, was initially successful — food reached starving Somalis, and the famine abated. But the UN mission that followed expanded into 'nation-building,' attempting to disarm warlord factions and create a functioning government.\n\nOn October 3-4, 1993, the Battle of Mogadishu — immortalized in 'Black Hawk Down' — changed everything. A mission to capture warlord Mohamed Farrah Aidid's lieutenants turned into an 18-hour urban battle after two Black Hawk helicopters were shot down. Eighteen Americans were killed, 73 wounded, and the image of a dead American soldier being dragged through the streets of Mogadishu shocked the nation.\n\nPresident Clinton withdrew U.S. forces within months. The retreat had catastrophic consequences: it convinced Osama bin Laden that America was a 'paper tiger' that would flee at the first sign of casualties. Bin Laden later cited Somalia as proof that the U.S. could be defeated through asymmetric warfare — a lesson he applied on September 11, 2001.\n\nSomalia also produced the 'Mogadishu effect' — American reluctance to intervene in humanitarian crises. When the Rwandan genocide erupted in April 1994, the Clinton administration refused to act, partly because of Somalia. An estimated 800,000 Rwandans were murdered in 100 days.\n\nThe libertarian lesson: even well-intentioned interventions create moral hazards and unforeseen consequences. The road from feeding the hungry to urban warfare to the Rwanda genocide is a straight line of interventionist failure.",
    didYouKnow: [
      "The Battle of Mogadishu killed 18 Americans but an estimated 1,000-1,500 Somalis — a lopsided toll that received almost no American media attention.",
      "Osama bin Laden specifically cited the U.S. withdrawal from Somalia as evidence that America was a 'paper tiger' that would flee after taking casualties.",
      "The 'Mogadishu effect' — fear of casualties — directly contributed to U.S. inaction during the 1994 Rwandan genocide, where 800,000 people were murdered in 100 days.",
      "The original humanitarian mission was successful — food deliveries resumed and the famine receded. It was the shift to 'nation-building' that created the disaster.",
      "Mohamed Farrah Aidid, the warlord the U.S. was trying to capture, was never caught. His son, who held U.S. citizenship and served as a U.S. Marine, later became a Somali warlord himself.",
      "The U.S. returned to Somalia in the 2000s with drone strikes and special operations forces — the intervention never truly ended."
    ],
    keyQuote: {
      text: "We tested the Americans in Somalia. When 18 of them were killed, they packed up and left. They are cowards who are afraid of death.",
      attribution: "Osama bin Laden, interview with John Miller (1998), citing Somalia as evidence of American weakness"
    },
    costBreakdown: "Of $3.3 billion (inflation-adjusted): The initial humanitarian deployment was relatively modest, but the expanded nation-building mission required extensive military operations in a failed state — urban patrols, helicopter operations, and the disastrous October 1993 raid. The Black Hawk Down incident alone destroyed two $15 million helicopters and required a massive rescue operation involving Pakistani and Malaysian forces.",
    legacyImpact: "Created the 'Mogadishu effect' that paralyzed American humanitarian intervention for years, directly contributing to inaction during the Rwandan genocide. Convinced Osama bin Laden that America could be defeated through asymmetric warfare, shaping al-Qaeda's strategy leading to 9/11. Demonstrated that 'mission creep' — expanding from humanitarian aid to nation-building — produces catastrophic results. Somalia remains a failed state 30+ years later, with the U.S. still conducting military operations there.",
    controversies: [
      "The expansion from humanitarian aid to hunting warlords was never clearly authorized by Congress or understood by the public — classic mission creep.",
      "The Somali death toll (1,000-1,500 in the Battle of Mogadishu alone) received minimal American attention compared to the 18 American deaths.",
      "The withdrawal emboldened jihadists worldwide and created a direct line from Mogadishu to 9/11 through bin Laden's strategic calculations.",
      "Clinton's refusal to intervene in Rwanda, driven partly by Somalia trauma, resulted in complicity in one of the worst genocides since the Holocaust."
    ],
    keyFigures: [
      { name: "Mohamed Farrah Aidid", role: "Somali Warlord", note: "The primary target of U.S. operations. Never captured. His U.S.-citizen son later returned to Somalia as a warlord himself." },
      { name: "Bill Clinton", role: "President of the United States", note: "Inherited the intervention from Bush, expanded the mission, then withdrew after Black Hawk Down — with catastrophic consequences for Rwanda." },
      { name: "Les Aspin", role: "Secretary of Defense", note: "Denied requests for tanks and AC-130 gunships before the Battle of Mogadishu. Resigned under pressure after the disaster." },
      { name: "Gary Gordon & Randy Shughart", role: "Delta Force Operators", note: "Posthumously awarded the Medal of Honor for defending a downed helicopter crew, killed fighting overwhelming Somali forces." }
    ]
  },

  "bosnia": {
    narrative: "The Bosnia intervention (1995-2004) saw NATO go to war for the first time in its history — not to defend a member state from attack, but to stop a genocide in the former Yugoslavia.\n\nAs Yugoslavia disintegrated in the early 1990s, Bosnian Serb forces backed by Serbia launched an ethnic cleansing campaign against Bosnian Muslims (Bosniaks). The international community watched for three years as concentration camps, mass rapes, and the siege of Sarajevo played out on television. The nadir came in July 1995 at Srebrenica, where Bosnian Serb forces murdered 8,000 Muslim men and boys under the noses of Dutch UN peacekeepers — the worst massacre in Europe since World War II.\n\nSrebrenica finally shamed the West into action. NATO launched Operation Deliberate Force in August 1995, bombing Bosnian Serb military positions. The campaign, combined with a Croatian ground offensive, brought the Serbs to the negotiating table. The Dayton Accords (November 1995) ended the fighting and deployed 60,000 NATO troops (20,000 American) as peacekeepers.\n\nThe intervention 'worked' in the narrow sense of stopping the killing — 12 American soldiers died and the ethnic cleansing ended. But it came three years and 100,000 deaths too late. Bosnia today remains a dysfunctional state divided along ethnic lines, with NATO troops present until 2004 and EU peacekeepers still there.\n\nThe libertarian case is genuinely difficult here: non-intervention meant complicity in genocide, while intervention meant military action without congressional authorization and the expansion of NATO's mission far beyond collective defense. The honest answer is that there are no clean choices when governments commit genocide.",
    didYouKnow: [
      "The Srebrenica massacre — 8,000 Muslim men and boys murdered in July 1995 — occurred while Dutch UN peacekeepers stood by, unable or unwilling to intervene.",
      "Bosnian Serb forces ran concentration camps where prisoners were starved, tortured, and murdered — the first concentration camps in Europe since World War II.",
      "An estimated 20,000-50,000 Bosnian Muslim women were systematically raped as a weapon of war — a campaign so organized it constituted a war crime.",
      "Only 12 American soldiers died in the entire Bosnia deployment — making it one of the most effective military interventions in terms of lives saved per American life lost.",
      "The Dayton Accords created a Frankenstein state with two 'entities' and three presidents — a governance structure so complex that Bosnia remains essentially ungovernable 30 years later.",
      "Richard Holbrooke, the lead American negotiator at Dayton, essentially redrew Bosnia's borders in three weeks of intense negotiations at Wright-Patterson Air Force Base in Ohio."
    ],
    keyQuote: {
      text: "There is no such thing as a clean war, but this war, which went on for over three years, produced the worst atrocities in Europe since World War II, and it happened on our watch.",
      attribution: "Richard Holbrooke, chief U.S. negotiator at Dayton, on the failure to act sooner"
    },
    costBreakdown: "Of $35 billion (inflation-adjusted): NATO bombing operations, deployment and maintenance of 20,000 U.S. troops as part of the 60,000-strong IFOR/SFOR peacekeeping force, logistical infrastructure, and years of peacekeeping operations. The U.S. share of the peacekeeping mission ran approximately $2 billion per year during the peak deployment years.",
    legacyImpact: "Demonstrated that NATO could conduct military operations beyond collective defense — fundamentally transforming the alliance's mission. Stopped the genocide but came three years too late, after 100,000 deaths. Created a dysfunctional Bosnian state that remains divided along ethnic lines. Established 'humanitarian intervention' as a justification for military action without congressional authorization — a precedent with troubling implications. Led directly to the Kosovo intervention in 1999.",
    controversies: [
      "The international community's three-year failure to act while 100,000 people died and genocide was committed at Srebrenica remains one of the great moral failures of the post-Cold War era.",
      "NATO's bombing campaign was conducted without UN Security Council authorization (Russia threatened a veto), setting a precedent for bypassing international law that would be used in Kosovo and Libya.",
      "The U.S. intervention was conducted without formal congressional authorization — Clinton committed 20,000 troops through executive action.",
      "The Dayton Accords froze ethnic divisions in place rather than resolving them, creating a dysfunctional state that 30 years later cannot effectively govern itself."
    ],
    keyFigures: [
      { name: "Richard Holbrooke", role: "Assistant Secretary of State / Lead Negotiator", note: "Bulldozed the Dayton Accords into existence through sheer force of personality, ending the war but creating a problematic peace." },
      { name: "Bill Clinton", role: "President of the United States", note: "Delayed intervention for three years, then committed U.S. forces without congressional authorization after Srebrenica made inaction politically untenable." },
      { name: "Ratko Mladić", role: "Bosnian Serb Military Commander", note: "Directed the Srebrenica massacre and the siege of Sarajevo. Convicted of genocide by the International Criminal Tribunal." },
      { name: "Radovan Karadžić", role: "President of Republika Srpska", note: "Political leader of the Bosnian Serb ethnic cleansing campaign. Convicted of genocide and crimes against humanity." },
      { name: "Slobodan Milošević", role: "President of Serbia", note: "Backed the Bosnian Serb campaign and later launched the Kosovo war. Died during his war crimes trial at The Hague." }
    ]
  },

  "kosovo": {
    narrative: "The Kosovo War (March-June 1999) was a 78-day NATO bombing campaign against Serbia to stop ethnic cleansing in Kosovo — conducted without UN authorization, without congressional approval, and in violation of both international law and the NATO treaty's defensive mandate.\n\nSerbian President Slobodan Milošević launched a campaign of ethnic cleansing against Kosovo's Albanian majority in 1998, displacing hundreds of thousands. After the Rambouillet negotiations failed (critics argue the terms were deliberately unacceptable to Serbia), NATO began bombing on March 24, 1999.\n\nThe campaign was conducted entirely from the air — no ground troops — with NATO aircraft flying above 15,000 feet to avoid Serbian air defenses. This altitude restriction, while protecting pilots, made precision bombing difficult. Targets hit included the Chinese embassy in Belgrade (killing three journalists), Serbian television headquarters (killing 16 civilians), refugee convoys, passenger trains, and a hospital. An estimated 500 civilians were killed by NATO bombs.\n\nThe bombing eventually worked — after 78 days, Milošević withdrew Serbian forces from Kosovo, and a NATO peacekeeping force (KFOR) occupied the province. Kosovo declared independence in 2008, though Serbia (backed by Russia) still doesn't recognize it.\n\nTwo American soldiers died. But the precedent was sweeping: NATO had waged an offensive war without UN authorization, the U.S. had gone to war without congressional approval, and 'humanitarian bombing' had entered the lexicon. The Kosovo model — air power alone, minimal American casualties, regime change by remote control — became the template for Libya in 2011.",
    didYouKnow: [
      "NATO bombed the Chinese embassy in Belgrade, killing three Chinese journalists — the U.S. claimed it was an accident caused by outdated maps, but China (and many others) never fully accepted this explanation.",
      "Not a single American soldier died in combat during the 78-day bombing campaign — two died in a training accident. It was warfare almost without risk to the attacker.",
      "NATO aircraft flew above 15,000 feet to avoid Serbian air defenses, making precision bombing nearly impossible and increasing civilian casualties.",
      "The bombing actually accelerated the ethnic cleansing in the short term — Serbian forces used the chaos of the air campaign to intensify their operations against Kosovar Albanians.",
      "Russia was so angered by the NATO campaign that Russian troops raced to Pristina airport after the war, nearly sparking a confrontation with NATO forces — a British commander refused orders to block them.",
      "Kosovo's independence (2008) is still not recognized by Serbia, Russia, China, or five EU member states — making it one of the world's most contested political entities."
    ],
    keyQuote: {
      text: "We are not waging war against Yugoslavia. We are trying to stop a war that is already ongoing.",
      attribution: "Javier Solana, NATO Secretary General, on why bombing a country wasn't technically 'war' (1999)"
    },
    costBreakdown: "Of $10 billion (inflation-adjusted): The 78-day air campaign consumed enormous quantities of precision munitions — over 23,000 bombs and missiles were dropped. Daily sortie costs, aircraft carrier operations, cruise missile launches (at $1 million each), and the subsequent KFOR peacekeeping deployment all added to the bill. The U.S. bore roughly 80% of the campaign's costs.",
    legacyImpact: "Established the precedent that NATO could wage offensive wars without UN authorization, fundamentally changing the alliance from defensive to interventionist. Created the template of 'risk-free' air-only warfare later used in Libya. Kosovo's disputed independence remains a source of tension between the West and Russia. The intervention deeply damaged U.S.-Russian relations and contributed to Russia's later argument that Western intervention justified its own actions in Georgia (2008) and Ukraine (2014).",
    controversies: [
      "The bombing was conducted without UN Security Council authorization (Russia and China opposed it), violating the UN Charter's prohibition on aggressive war.",
      "Congress never authorized the war — Clinton relied on his commander-in-chief authority, and the House actually voted down authorization after the bombing started.",
      "NATO bombing killed an estimated 500 Serbian and Kosovar civilians, including in the Chinese embassy, a passenger train, refugee convoys, and Serbian television headquarters.",
      "Critics argue the Rambouillet terms were deliberately designed to be unacceptable to Serbia, making war inevitable — a 'diplomacy as cover for a predetermined military solution.'"
    ],
    keyFigures: [
      { name: "Bill Clinton", role: "President of the United States", note: "Launched the air campaign without congressional authorization, relying on NATO alliance and executive war powers." },
      { name: "Slobodan Milošević", role: "President of Serbia", note: "Ordered the ethnic cleansing of Kosovo, was bombed into withdrawal, and later died during his war crimes trial." },
      { name: "Wesley Clark", role: "NATO Supreme Allied Commander", note: "Commanded the air campaign and clashed with political leaders who restricted targeting. Nearly provoked a confrontation with Russia at Pristina airport." },
      { name: "Madeleine Albright", role: "U.S. Secretary of State", note: "Key advocate for the bombing campaign, argued forcefully that humanitarian concerns justified military action without UN authorization." }
    ]
  },

  "post-911-global": {
    narrative: "The 'Global War on Terror' expanded far beyond Afghanistan and Iraq into a shadowy network of military operations spanning dozens of countries across multiple continents. Under the 2001 Authorization for Use of Military Force (AUMF) — a 60-word sentence passed three days after 9/11 — the U.S. has conducted military operations in at least 85 countries.\n\nThese operations include special forces raids in Pakistan, Yemen, Somalia, Libya, Niger, Mali, Burkina Faso, Cameroon, Chad, Tunisia, and the Philippines. They include CIA black sites for 'enhanced interrogation' (torture) in Poland, Romania, Thailand, and Afghanistan. They include surveillance operations, drone strikes, and 'train and equip' programs for foreign militaries across Africa, the Middle East, and Southeast Asia.\n\nThe scope is staggering: as of 2023, the U.S. maintains approximately 750 military bases in 80 countries and has special operations forces deployed in roughly 130 countries. The total cost of post-9/11 military operations exceeds $8 trillion according to Brown University's Costs of War project, with over 900,000 people killed directly and millions more displaced.\n\nThe 2001 AUMF, which authorized force against those responsible for 9/11, has been stretched to justify operations against groups that didn't exist on September 11, 2001 — ISIS, al-Shabaab, and various affiliates that are often local insurgencies with no connection to al-Qaeda.\n\nThe libertarian critique is fundamental: a 60-word authorization passed in the shock of 9/11 has been used to justify a permanent global war lasting over two decades, costing trillions, killing hundreds of thousands, and operating with virtually no democratic oversight. This is exactly the kind of open-ended military commitment the Founders warned against.",
    didYouKnow: [
      "The 2001 AUMF is 60 words long and has been used to justify military operations in at least 22 countries — against groups that didn't exist when it was passed.",
      "The U.S. maintains approximately 750 military bases in 80 countries, with special operations forces deployed in roughly 130 countries.",
      "Brown University's Costs of War project estimates the total cost of post-9/11 operations at over $8 trillion, with 900,000+ people killed directly.",
      "CIA 'black sites' for torture were operated in Poland, Romania, Thailand, Lithuania, and Afghanistan — the full list remains classified.",
      "Only one member of Congress — Barbara Lee of California — voted against the 2001 AUMF. She received death threats for her vote and was called a traitor.",
      "The U.S. has conducted military operations in countries most Americans couldn't locate on a map, including Niger, Burkina Faso, Cameroon, and Chad."
    ],
    keyQuote: {
      text: "Let us not become the evil that we deplore.",
      attribution: "Representative Barbara Lee (D-CA), the sole vote against the 2001 AUMF (September 14, 2001)"
    },
    costBreakdown: "Of $60 billion (inflation-adjusted) for the non-Afghanistan, non-Iraq operations: Special operations deployments across Africa, Southeast Asia, and the Arabian Peninsula; CIA black site operations and 'extraordinary rendition' flights; training and equipping foreign military forces; signals intelligence and surveillance infrastructure. The true cost is far higher when combined with the broader War on Terror spending.",
    legacyImpact: "Created a permanent state of global war operating with minimal congressional oversight. Expanded executive war powers to their greatest extent in history, with a 60-word authorization justifying operations across dozens of countries for over two decades. Normalized extrajudicial killing (drone strikes), torture ('enhanced interrogation'), and warrantless surveillance. Demonstrated that democratic accountability is nearly impossible when military operations are classified and dispersed across the globe.",
    controversies: [
      "The 2001 AUMF has been stretched far beyond its original purpose to justify operations against groups that had no connection to 9/11.",
      "CIA 'enhanced interrogation techniques' at black sites — waterboarding, stress positions, sleep deprivation, rectal feeding — constituted torture under international law.",
      "The massive expansion of surveillance under programs like PRISM (exposed by Edward Snowden) fundamentally undermined Fourth Amendment protections for all Americans.",
      "Military operations in Africa and elsewhere have often empowered authoritarian governments and exacerbated local conflicts rather than reducing terrorism."
    ],
    keyFigures: [
      { name: "Barbara Lee", role: "U.S. Representative (D-CA)", note: "The sole vote against the 2001 AUMF. Her warning that it was a 'blank check' for endless war proved prophetic." },
      { name: "George W. Bush", role: "President of the United States", note: "Launched the GWOT and established the legal framework (AUMF, military commissions, enhanced interrogation) that subsequent presidents expanded." },
      { name: "Dick Cheney", role: "Vice President of the United States", note: "The driving force behind the expansion of executive war powers, torture programs, and warrantless surveillance." },
      { name: "Edward Snowden", role: "NSA Contractor / Whistleblower", note: "Revealed the massive global surveillance apparatus built under the War on Terror, exposing programs that spied on millions of Americans." }
    ]
  },

  "somalia-ongoing": {
    narrative: "The U.S. never really left Somalia. After the humiliating 1994 withdrawal, American forces quietly returned in the 2000s under the banner of the War on Terror. Today, approximately 900 U.S. troops operate in Somalia under AFRICOM, conducting drone strikes, special operations raids, and training missions against al-Shabaab, an al-Qaeda affiliate.\n\nThe legal justification stretches the 2001 AUMF to the breaking point — al-Shabaab didn't exist on September 11, 2001, and is primarily a Somali insurgency with limited global reach. Yet the U.S. has conducted hundreds of airstrikes in Somalia since 2007, killing an unknown number of militants and civilians. The Bureau of Investigative Journalism documented at least 259 U.S. strikes between 2007 and 2023.\n\nThe Trump administration dramatically escalated strikes in 2017-2020, conducting more strikes in Somalia than in the entire Obama era. Biden initially withdrew most troops, then redeployed them in 2022. The cycle of escalation and drawn-down continues with no strategic endgame.\n\nSomalia remains one of the world's most fragile states — over 30 years of intervention (both the 1992 humanitarian mission and the current counterterrorism campaign) have failed to produce stability. Al-Shabaab controls significant territory and still conducts devastating attacks, including the 2017 Mogadishu bombing that killed 587 people.\n\nThe libertarian case is clear: perpetual military intervention in a country that poses no existential threat to the United States, conducted under a two-decade-old authorization, with no congressional debate, no exit strategy, and no measurable progress.",
    didYouKnow: [
      "The U.S. has conducted at least 259 airstrikes in Somalia since 2007 — most Americans have no idea their country is at war there.",
      "Trump conducted more drone strikes in Somalia in his first two years than Obama did in eight — then Biden withdrew troops and redeployed them.",
      "Al-Shabaab, the target of U.S. operations, didn't exist on September 11, 2001 — yet the 2001 AUMF is the legal justification for strikes against them.",
      "The 2017 Mogadishu truck bombing by al-Shabaab killed 587 people — one of the deadliest terrorist attacks in history, yet it received minimal Western media attention.",
      "Somalia has not had a fully functioning central government since 1991 — over 30 years of international intervention have failed to produce stability."
    ],
    keyQuote: {
      text: "We have been at war in Somalia for so long that most people don't even know we're at war in Somalia.",
      attribution: "Senator Chris Murphy (D-CT), arguing for repeal of the 2001 AUMF"
    },
    costBreakdown: "Of $4.5 billion (inflation-adjusted): AFRICOM operations including drone strikes, special operations raids, training of Somali and African Union forces, base construction and maintenance, intelligence operations, and logistics support. Individual drone strikes cost $3-6 million each, and the U.S. has conducted hundreds.",
    legacyImpact: "Demonstrates the self-perpetuating nature of the War on Terror — intervention creates instability, which creates extremism, which justifies more intervention. More than 30 years after the first U.S. deployment, Somalia remains a failed state and al-Shabaab remains a potent force. The campaign operates with virtually no public awareness or congressional oversight, exemplifying the 'forever war' model.",
    controversies: [
      "Civilian casualties from drone strikes are poorly documented and likely significantly underreported — independent monitors consistently report higher civilian death tolls than the U.S. military.",
      "The legal authority for operations (2001 AUMF) was written for al-Qaeda and the Taliban, not for a Somali insurgency that formed years later.",
      "Multiple presidential administrations have alternately escalated and drawn down forces with no coherent strategy.",
      "AFRICOM's presence in Somalia has been criticized for propping up a weak, corrupt government rather than addressing root causes of instability."
    ],
    keyFigures: [
      { name: "Ahmed Abdi Godane", role: "Leader of al-Shabaab (killed 2014)", note: "Built al-Shabaab into a formidable insurgency. Killed by a U.S. drone strike, but his death did not weaken the group significantly." },
      { name: "Thomas Waldhauser", role: "First AFRICOM Commander to oversee escalation", note: "Oversaw the Trump-era escalation of strikes in Somalia." },
      { name: "Hassan Sheikh Mohamud", role: "President of Somalia", note: "Has repeatedly requested continued U.S. military support, tying Somali sovereignty to American military presence." }
    ]
  },

  "niger-sahel": {
    narrative: "Most Americans learned the U.S. had troops in Niger on October 4, 2017, when four Army Special Forces soldiers were killed in an ambush near the village of Tongo Tongo. The incident exposed a secret military presence that Congress itself barely knew about — Senator Lindsey Graham admitted he 'didn't know there was 1,000 troops in Niger.'\n\nThe U.S. had approximately 1,100 troops deployed across the Sahel region of Africa, operating from a $110 million drone base (Air Base 201) near Agadez, Niger. Their mission: training local forces and conducting surveillance and strike operations against ISIS and al-Qaeda affiliates spreading across West Africa.\n\nThe Tongo Tongo ambush revealed the rot at the heart of America's shadow wars. The patrol was inadequately equipped (no armored vehicles, no air support immediately available), poorly planned, and operating under confusing rules of engagement. An investigation found systemic failures in training, planning, and leadership. Staff Sergeant La David Johnson's body wasn't recovered for 48 hours.\n\nIn July 2023, a military coup in Niger overthrew the U.S.-aligned government, and the new junta ordered American forces out. The $110 million drone base was handed over — to Russian Wagner Group mercenaries. America's years of military investment in Niger were wiped out overnight.\n\nThe libertarian lesson writes itself: secret military deployments in countries Americans can't find on a map, authorized by a 20-year-old law, get soldiers killed and produce nothing — not even a reliable ally.",
    didYouKnow: [
      "Senator Lindsey Graham, a senior member of the Armed Services Committee, said after the Tongo Tongo ambush: 'I didn't know there was 1,000 troops in Niger.'",
      "The U.S. built a $110 million drone base (Air Base 201) in Agadez, Niger — which was handed over to Russian Wagner Group mercenaries after the 2023 coup.",
      "Four American Special Forces soldiers died in the Tongo Tongo ambush: Staff Sgt. Bryan Black, Staff Sgt. Jeremiah Johnson, Sgt. La David Johnson, and Staff Sgt. Dustin Wright.",
      "Staff Sgt. La David Johnson's body wasn't recovered for 48 hours — and the controversy over President Trump's condolence call to his widow became a political firestorm.",
      "The military investigation found the patrol was inadequately equipped, had no evacuation plan, and the team leader had falsified the mission's purpose to get approval."
    ],
    keyQuote: {
      text: "I didn't know there was 1,000 troops in Niger. This is an endless war without boundaries, without limitations.",
      attribution: "Senator Lindsey Graham (R-SC), after the Tongo Tongo ambush (2017)"
    },
    costBreakdown: "Of $600 million (inflation-adjusted): Construction of Air Base 201 ($110 million), deployment and support of 1,100 troops, training programs for Nigerien forces, drone operations, and intelligence infrastructure. The 2023 coup and forced withdrawal meant the entire investment was lost — the base and equipment were essentially gifted to a hostile government aligned with Russia.",
    legacyImpact: "Exposed the vast, little-known network of U.S. military operations across Africa. The 2023 Niger coup and expulsion of U.S. forces demonstrated the fragility of military relationships built on supporting authoritarian partners. The $110 million drone base falling to Russian-aligned forces symbolized the failure of U.S. strategy in the Sahel. Contributed to growing congressional demands for oversight of military operations in Africa.",
    controversies: [
      "The entire Sahel deployment operated in secrecy — Congress members on the Armed Services Committee didn't know how many troops were in Niger.",
      "The Tongo Tongo ambush investigation revealed systemic failures: inadequate equipment, no contingency plans, falsified mission paperwork, and delayed rescue response.",
      "Trump's condolence call to La David Johnson's widow became a political controversy, overshadowing the policy questions about why soldiers were in Niger at all.",
      "The 2023 coup rendered the entire military investment worthless — the $110 million base was handed to Russian mercenaries, demonstrating the futility of propping up unreliable partners."
    ],
    keyFigures: [
      { name: "La David Johnson", role: "U.S. Army Staff Sergeant (killed in action)", note: "His death in the Tongo Tongo ambush and the subsequent controversy over Trump's condolence call brought public attention to the secret Niger deployment." },
      { name: "Thomas Waldhauser", role: "AFRICOM Commander", note: "Oversaw Sahel operations during the ambush and faced scrutiny over inadequate resources and planning for deployed forces." },
      { name: "Abdourahamane Tchiani", role: "Leader of the 2023 Niger coup", note: "Overthrew the U.S.-aligned government and expelled American forces, handing the drone base to Russian-aligned forces." }
    ]
  },

  "isis-iraq-syria": {
    narrative: "The war against ISIS (2014-present) is a direct consequence of the Iraq War's catastrophic failure. When the U.S. disbanded the Iraqi military in 2003, it created hundreds of thousands of armed, unemployed men with military training and a burning grievance. Many became the backbone of the Islamic State.\n\nISIS exploded onto the world stage in June 2014, seizing Mosul — Iraq's second-largest city — with just 1,500 fighters routing 30,000 Iraqi soldiers. The Iraqi army, built at a cost of $25 billion in U.S. training and equipment, dissolved in hours. ISIS declared a 'caliphate' stretching from eastern Syria to western Iraq, imposing a regime of medieval brutality — beheadings, mass executions, sexual slavery, and the destruction of ancient cultural heritage.\n\nThe U.S. response, Operation Inherent Resolve, relied on airpower and local ground forces rather than American troops. Over 34,000 airstrikes were conducted against ISIS targets in Iraq and Syria. The campaign worked militarily — ISIS lost its territory by 2019 — but the cost in civilian lives was horrific. Airwars estimates that Coalition strikes killed between 8,000 and 13,000 civilians, though the U.S. military acknowledged far fewer.\n\nThe battle for Mosul (2016-2017) was particularly devastating: a nine-month siege that destroyed much of the city and killed an estimated 9,000-11,000 civilians. Raqqa, ISIS's de facto capital, was reduced to rubble.\n\nThe libertarian analysis is damning: the U.S. created the conditions for ISIS through the Iraq War, then spent $115 billion fighting the monster it created, killing thousands more civilians in the process — and ISIS still exists as an insurgency. This is the definition of blowback.",
    didYouKnow: [
      "The Iraqi army the U.S. spent $25 billion training collapsed in days when ISIS attacked Mosul — 30,000 soldiers fled from 1,500 ISIS fighters.",
      "Many ISIS military commanders were former Iraqi army officers who were unemployed after Paul Bremer dissolved the Iraqi military in 2003 — the U.S. literally created its own enemy.",
      "Over 34,000 Coalition airstrikes were conducted against ISIS — independent monitors estimate 8,000-13,000 civilians were killed, far more than the U.S. military acknowledged.",
      "The battle for Mosul (2016-2017) lasted nine months and killed an estimated 9,000-11,000 civilians — making it one of the most destructive urban battles since World War II.",
      "Abu Bakr al-Baghdadi, ISIS's leader, was radicalized while imprisoned by U.S. forces at Camp Bucca — the prison was essentially a jihadi networking and recruitment center.",
      "ISIS's sophisticated social media propaganda recruited an estimated 40,000 foreign fighters from 110 countries."
    ],
    keyQuote: {
      text: "If you want to know who created ISIS, take a look at what happened in Iraq after the U.S. invaded.",
      attribution: "Senator Rand Paul (R-KY), connecting the Iraq War to the rise of ISIS"
    },
    costBreakdown: "Of $115 billion (inflation-adjusted): The air campaign consumed the largest share — 34,000+ airstrikes using precision munitions costing $25,000-$1.5 million each. Training and equipping Iraqi and Kurdish ground forces cost billions more. Special operations deployments, intelligence operations, and the ongoing counter-ISIS mission continue to add costs. The underlying Iraq War that created ISIS cost $2 trillion separately.",
    legacyImpact: "ISIS's territorial caliphate was destroyed but the group survives as an insurgency, conducting attacks across Iraq, Syria, and Africa. The campaign demonstrated that airpower can destroy territory but not ideology. The civilian toll — 8,000-13,000+ killed by Coalition strikes — fed anti-American sentiment and future radicalization. The war against ISIS is the ultimate blowback story: the U.S. spent trillions creating the conditions for ISIS, then spent hundreds of billions more fighting it.",
    controversies: [
      "The civilian death toll from Coalition airstrikes was dramatically underreported — the U.S. military acknowledged roughly 1,400 civilian deaths while independent monitors documented 8,000-13,000.",
      "The destruction of Mosul and Raqqa — reduced to rubble to 'liberate' them — raised questions about whether the cure was worse than the disease for the civilians living there.",
      "The U.S. armed and trained Kurdish forces in Syria (YPG/SDF), then allowed Turkey to attack them — betraying allies who bore the heaviest ground combat burden against ISIS.",
      "ISIS was a direct product of U.S. policy in Iraq — specifically Paul Bremer's disbanding of the Iraqi military and de-Baathification, which created a large pool of angry, trained fighters."
    ],
    keyFigures: [
      { name: "Abu Bakr al-Baghdadi", role: "ISIS Leader / Self-proclaimed Caliph", note: "Radicalized at U.S.-run Camp Bucca in Iraq. Built ISIS into a proto-state controlling millions of people. Killed in a U.S. raid in 2019." },
      { name: "Brett McGurk", role: "Special Presidential Envoy for the Anti-ISIS Coalition", note: "Coordinated the Coalition campaign across multiple administrations, managing the complex alliance of often-hostile local forces." },
      { name: "Masoud Barzani", role: "President of Iraqi Kurdistan", note: "Kurdish Peshmerga forces were the most effective ground force against ISIS in Iraq, fighting with limited U.S. support." },
      { name: "Mazloum Abdi", role: "Commander of the Syrian Democratic Forces (SDF)", note: "Led the Kurdish-Arab force that bore the heaviest ground combat against ISIS in Syria, then was abandoned to Turkish attacks." }
    ]
  },

  "yemen": {
    narrative: "The U.S. role in the Yemen war is America's most shameful ongoing military involvement — a conflict that has created what the United Nations calls 'the world's worst humanitarian disaster,' with the U.S. serving as the chief enabler.\n\nSince 2015, Saudi Arabia has led a military coalition bombing Yemen to restore the internationally recognized government after Houthi rebels (backed by Iran) seized the capital, Sana'a. The U.S. has provided the bombs, the planes, the intelligence, the targeting assistance, the mid-air refueling, and the diplomatic cover for a campaign that has killed an estimated 150,000 people and pushed millions to the brink of famine.\n\nAmerican-made bombs have struck hospitals, schools, weddings, funerals, and school buses. In August 2018, a Saudi airstrike hit a school bus in Dahyan, killing 40 children — the bomb was a U.S.-made MK 82 sold to Saudi Arabia through a State Department-approved arms deal. The image of the bomb fragment with American markings became a symbol of U.S. complicity.\n\nThe U.S. has no vital interest in Yemen. The intervention serves Saudi Arabia's regional rivalry with Iran, not American security. Yet multiple administrations have continued arms sales and military support, driven by the $110 billion Saudi arms deal and the broader U.S.-Saudi relationship.\n\nThe humanitarian toll is staggering: 150,000 killed, 85,000 children dead from famine, 4 million displaced, and a cholera epidemic that infected over 2.5 million people — the largest cholera outbreak in recorded history.\n\nThe libertarian case is straightforward: the U.S. is enabling a foreign power's war of choice that has created a humanitarian catastrophe, without congressional authorization, without a vital national interest, and in violation of U.S. laws prohibiting arms sales to countries that target civilians.",
    didYouKnow: [
      "A U.S.-made MK 82 bomb killed 40 children on a school bus in Dahyan, Yemen in August 2018 — the bomb fragment with American markings was photographed and shared worldwide.",
      "Yemen has experienced the largest cholera outbreak in recorded history — over 2.5 million cases since 2016 — largely because Saudi bombing destroyed water and sanitation infrastructure.",
      "An estimated 85,000 Yemeni children under five have died of famine as a result of the Saudi-led blockade supported by the U.S.",
      "The U.S. has provided mid-air refueling for Saudi bombers, shared targeting intelligence, sold billions in bombs and fighter jets, and provided diplomatic cover at the UN — essentially fighting the war by proxy.",
      "Congress passed a bipartisan War Powers Resolution to end U.S. support for the Yemen war in 2019 — Trump vetoed it, and the involvement continued.",
      "Saudi Arabia's crown prince Mohammed bin Salman launched the Yemen war in 2015 when he was 29 years old, projecting it would last a few weeks. It has lasted nearly a decade."
    ],
    keyQuote: {
      text: "The United States is complicit in the worst humanitarian catastrophe on the planet.",
      attribution: "Senator Chris Murphy (D-CT), on U.S. support for the Saudi war in Yemen"
    },
    costBreakdown: "Of $10 billion (inflation-adjusted): Direct U.S. military costs include intelligence sharing, mid-air refueling operations (until 2018), special operations against AQAP, and naval operations. The larger cost is in arms sales — the U.S. has sold over $100 billion in weapons to Saudi Arabia since 2015, with a significant portion used in Yemen. The humanitarian catastrophe has also required billions in U.S. aid spending to address the famine the U.S. helped create.",
    legacyImpact: "Created what the UN calls 'the world's worst humanitarian disaster' — with the U.S. as the primary enabler. Demonstrated that arms sales and the Saudi relationship override human rights concerns in American foreign policy. Energized the antiwar movement in Congress, producing the first-ever invocation of the War Powers Resolution to try to end a conflict (vetoed by Trump). The war has devastated Yemen's infrastructure, economy, and society for a generation.",
    controversies: [
      "U.S.-made weapons have been documented striking hospitals, schools, weddings, funerals, and a school bus full of children — raising questions of complicity in war crimes.",
      "Congress passed a War Powers Resolution to end U.S. involvement — Trump vetoed it, demonstrating that even congressional antiwar majorities cannot override presidential war-making.",
      "The Saudi-led blockade, supported by the U.S. Navy, has prevented food and medical supplies from reaching millions of starving Yemenis.",
      "The U.S. has continued arms sales to Saudi Arabia despite mounting evidence of systematic targeting of civilians, potentially violating the Leahy Law and Arms Export Control Act."
    ],
    keyFigures: [
      { name: "Mohammed bin Salman", role: "Crown Prince of Saudi Arabia", note: "Launched the Yemen war at age 29, projecting a quick victory. Nearly a decade later, the war continues with catastrophic humanitarian consequences." },
      { name: "Chris Murphy", role: "U.S. Senator (D-CT)", note: "Led congressional opposition to U.S. involvement in Yemen, calling it 'complicity in the worst humanitarian catastrophe on the planet.'" },
      { name: "Bernie Sanders", role: "U.S. Senator (I-VT)", note: "Co-sponsored the War Powers Resolution to end U.S. support for the Yemen war — the first-ever congressional use of the War Powers Act." },
      { name: "Abdul-Malik al-Houthi", role: "Leader of the Houthi Movement", note: "Led the Houthi takeover of Sana'a that triggered the Saudi intervention. The Houthis control most of Yemen's population centers." }
    ]
  },

  "ukraine-support": {
    narrative: "U.S. military support for Ukraine following Russia's February 2022 full-scale invasion represents the largest American military aid package since World War II's Lend-Lease — over $66.9 billion in weapons, training, and economic support funneled to a proxy war against a nuclear-armed adversary.\n\nThe Biden administration's strategy has been to arm Ukraine while avoiding direct confrontation with Russia — a calibrated escalation that has progressively provided increasingly advanced weapons: from Javelins and Stingers to HIMARS, Patriot air defense systems, Abrams tanks, F-16 fighters, and ATACMS long-range missiles. Each escalation has crossed a previous red line while establishing a new one.\n\nThe results are mixed. Ukraine has survived as a sovereign state and inflicted enormous casualties on Russia (estimated 300,000+ Russian casualties), but has also suffered devastating losses (estimated 100,000+ Ukrainian casualties) and lost roughly 20% of its territory. The war has become a grinding attritional conflict with no clear path to resolution.\n\nThe costs extend far beyond the $66.9 billion price tag. The war has disrupted global energy and food markets, driven inflation worldwide, pushed Russia closer to China, raised the risk of nuclear escalation, and accelerated the militarization of European politics.\n\nThe libertarian critique spans the political spectrum: non-interventionists argue the U.S. is fighting a proxy war that risks nuclear confrontation and bleeds American resources, while others note that NATO expansion into former Soviet states provoked a predictable (if unjustified) Russian response. Regardless of where one assigns blame, the fact remains that American taxpayers are funding a war without any congressional declaration, formal treaty obligation, or clear strategic endgame.",
    didYouKnow: [
      "The $66.9 billion in U.S. aid to Ukraine exceeds the entire annual military budget of every country except the U.S. and China.",
      "Each HIMARS rocket system costs approximately $5.1 million, and each rocket costs $100,000-$168,000 — the U.S. has provided 40+ HIMARS systems to Ukraine.",
      "The U.S. has provided over 1 million rounds of 155mm artillery shells to Ukraine, straining American stockpiles and production capacity.",
      "Ukraine has received weapons from over 50 countries, but the U.S. provides roughly 50% of all military aid — making it by far the largest contributor.",
      "The war has caused an estimated $138 billion in damage to Ukrainian infrastructure — more than Ukraine's entire pre-war GDP.",
      "Congressional approval for Ukraine aid has become increasingly partisan — the last major package took months of political negotiation to pass."
    ],
    keyQuote: {
      text: "We will support Ukraine for as long as it takes.",
      attribution: "President Joe Biden, repeated statement on Ukraine support (2022-2024) — without defining what 'it' refers to or what victory looks like"
    },
    costBreakdown: "Of $66.9 billion in U.S. aid: approximately $46 billion in military assistance (weapons, ammunition, training), $15 billion in economic support (keeping Ukraine's government functioning), and $6 billion in humanitarian aid. Military aid includes HIMARS, Patriot systems, Abrams tanks, Stinger missiles, Javelin anti-tank weapons, Bradley fighting vehicles, and eventually F-16 fighters and ATACMS missiles. Additional billions in NATO-wide costs are not included in this figure.",
    legacyImpact: "Demonstrated that a Western-armed proxy force can resist a major military power, potentially deterring future aggression — or escalating great power competition. Revitalized NATO but strained U.S. military stockpiles and production capacity. Exposed Europe's military dependence on the U.S. Accelerated the Russia-China partnership. The war's outcome will shape the global security order for decades — either validating or discrediting the model of arming proxies against nuclear-armed adversaries.",
    controversies: [
      "The U.S. is funding a proxy war against a nuclear-armed power with no formal authorization, no treaty obligation, and no defined end state — the risks of escalation to nuclear conflict are non-trivial.",
      "Accountability for $66.9 billion in weapons is limited — concerns about corruption, black market diversion, and weapons ending up with unintended recipients persist.",
      "Critics argue NATO expansion provoked the Russian invasion — while this doesn't justify Russia's aggression, the U.S. bears some responsibility for the security dynamic that produced the war.",
      "The open-ended commitment to support Ukraine 'as long as it takes' without defining victory or an exit strategy mirrors the forever-war dynamics of Afghanistan and Iraq."
    ],
    keyFigures: [
      { name: "Joe Biden", role: "President of the United States", note: "Made Ukraine support a centerpiece of foreign policy, progressively escalating weapons deliveries while trying to avoid direct confrontation with Russia." },
      { name: "Volodymyr Zelenskyy", role: "President of Ukraine", note: "Rallied Ukrainian resistance and became a global symbol of defiance, while pushing for ever-greater Western military support." },
      { name: "Lloyd Austin", role: "U.S. Secretary of Defense", note: "Led the Ukraine Defense Contact Group coordinating weapons deliveries from 50+ nations." },
      { name: "Vladimir Putin", role: "President of Russia", note: "Launched the full-scale invasion expecting a quick victory, instead getting a prolonged war that has devastated Russia's military and economy." }
    ]
  },

  "red-sea-houthis": {
    narrative: "Beginning in late 2023, Yemen's Houthi rebels began attacking commercial shipping in the Red Sea, ostensibly in solidarity with Palestinians during the Israel-Gaza war. The U.S. response — Operation Prosperity Guardian — has become an open-ended naval campaign that demonstrates how quickly 'limited' military actions expand.\n\nThe Houthis, armed with Iranian-supplied anti-ship missiles, drones, and ballistic missiles, have disrupted one of the world's most critical shipping lanes. Approximately 12% of global trade passes through the Red Sea via the Suez Canal; Houthi attacks have forced major shipping companies to reroute around Africa, adding 10-14 days and millions in costs to each voyage.\n\nThe U.S. has responded with naval deployments (including aircraft carriers and destroyers), airstrikes on Houthi positions in Yemen, and ship-to-air missile intercepts that cost the U.S. far more than the drones they destroy. A single SM-2 missile costs $2.1 million; the drones it shoots down cost a few thousand dollars each.\n\nThe asymmetric economics are staggering: the Houthis are spending millions while the U.S. spends billions. Each day of carrier operations costs approximately $7 million. The campaign has expended SM-2 and SM-6 missiles faster than the U.S. can produce them, straining inventories meant for potential conflicts with China.\n\nThe libertarian question is pointed: why is the U.S. Navy serving as a private security force for international shipping companies? The beneficiaries of Red Sea shipping lanes are global corporations; the costs are borne by American taxpayers.",
    didYouKnow: [
      "SM-2 interceptor missiles cost $2.1 million each — the Houthi drones they shoot down cost a few thousand dollars. The U.S. is losing the cost-exchange ratio by orders of magnitude.",
      "Approximately 12% of global trade passes through the Red Sea — Houthi attacks have forced rerouting around Africa, adding $1 million+ in fuel costs per voyage.",
      "The U.S. Navy has fired more ship-based interceptor missiles in the Red Sea campaign than in any conflict since World War II.",
      "The campaign is depleting SM-2 and SM-6 missile stocks that the Navy needs for potential conflicts with China — creating a strategic vulnerability to address a tactical nuisance.",
      "A single aircraft carrier strike group costs approximately $7 million per day to operate — the Houthis are forcing the U.S. to spend billions protecting shipping lanes."
    ],
    keyQuote: {
      text: "These attacks must stop. We will not hesitate to protect lives and the free flow of commerce.",
      attribution: "President Joe Biden, announcing strikes on Houthi positions (January 2024)"
    },
    costBreakdown: "Of $4.6 billion (estimated): Carrier strike group operations ($7 million/day), interceptor missiles ($2.1 million each for SM-2, $4.3 million for SM-6), airstrikes on Houthi positions, intelligence operations, and logistics. The cost-exchange ratio massively favors the Houthis — their $2,000 drones force the U.S. to expend $2 million missiles, creating a financially unsustainable dynamic.",
    legacyImpact: "Demonstrates the vulnerability of global trade to asymmetric threats and the astronomical cost of defending it. Exposes the U.S. Navy's missile inventory limitations and the dangerous depletion of stocks needed for great-power competition. Shows how distant conflicts (Israel-Gaza) can cascade into global economic disruptions. Raises fundamental questions about whether the U.S. military should serve as a private security force for international commerce.",
    controversies: [
      "The campaign is conducted without specific congressional authorization — the administration relies on Article II self-defense powers, despite conducting offensive strikes inside Yemen.",
      "The cost-exchange ratio is wildly unfavorable — the U.S. is spending billions to counter a threat costing the Houthis millions, a financially unsustainable approach.",
      "Strikes on Houthi positions in Yemen risk escal