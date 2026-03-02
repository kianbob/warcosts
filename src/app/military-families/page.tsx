'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'

const deploymentData = [
  { era: 'WWII', avgMonths: 33, deployments: 1 },
  { era: 'Korea', avgMonths: 13, deployments: 1 },
  { era: 'Vietnam', avgMonths: 12, deployments: 1.2 },
  { era: 'Gulf War', avgMonths: 6, deployments: 1 },
  { era: 'Iraq/Afghan (avg)', avgMonths: 12, deployments: 3.5 },
  { era: 'Post-2014', avgMonths: 9, deployments: 2.8 },
]

const divorceData = [
  { group: 'General US', rate: 14.9 },
  { group: 'Military (overall)', rate: 3.1 },
  { group: 'Enlisted Women', rate: 4.7 },
  { group: 'After 3+ deploy.', rate: 12.0 },
  { group: 'Special Ops', rate: 90.0 },
]

const childImpactData = [
  { issue: 'Anxiety/Depression', pctMilKids: 32, pctGenPop: 15 },
  { issue: 'Behavioral Problems', pctMilKids: 25, pctGenPop: 12 },
  { issue: 'Academic Decline', pctMilKids: 23, pctGenPop: 10 },
  { issue: 'Sleep Disorders', pctMilKids: 30, pctGenPop: 14 },
]

const familyStats = [
  { label: 'Active duty service members', value: '1.3M' },
  { label: 'Military spouses', value: '684K' },
  { label: 'Military children', value: '1.7M' },
  { label: 'Avg moves per military child (K-12)', value: '6–9' },
  { label: 'Military spouse unemployment rate', value: '22%' },
  { label: 'Families using food assistance (SNAP)', value: '24%' },
  { label: 'Gold Star families since 9/11', value: '~7,100' },
  { label: 'Children who lost a parent (post-9/11)', value: '~7,500' },
]

const housingIssues = [
  { issue: 'Mold/Environmental', pct: 55 },
  { issue: 'Pest Infestation', pct: 38 },
  { issue: 'Lead Paint Risk', pct: 22 },
  { issue: 'Maintenance Delays (30+ days)', pct: 47 },
  { issue: 'Unsafe Electrical', pct: 18 },
]

const COLORS = ['#991b1b', '#b91c1c', '#dc2626', '#ef4444', '#f87171']

const sections = ['overview', 'deployments', 'families', 'children', 'housing', 'gold-star'] as const
type Section = typeof sections[number]

export default function MilitaryFamiliesPage() {
  const [activeSection, setActiveSection] = useState<Section>('overview')

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Military Families' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-2">
        The Hidden Cost: Military Families
      </h1>
      <p className="text-stone-400 mb-6 max-w-3xl">
        Behind every service member is a family bearing invisible wounds. Deployments, relocations, housing crises, and the lasting impact on children — the costs that never appear in the defense budget.
      </p>
      <ShareButtons title="The hidden cost of war: military families bear the burden. Explore the data at WarCosts.org" />

      {/* Nav */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-stone-800 pb-4">
        {[
          { id: 'overview' as Section, label: 'Overview' },
          { id: 'deployments' as Section, label: 'Deployments' },
          { id: 'families' as Section, label: 'Spouse & Family' },
          { id: 'children' as Section, label: 'Children' },
          { id: 'housing' as Section, label: 'Base Housing' },
          { id: 'gold-star' as Section, label: 'Gold Star' },
        ].map(s => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeSection === s.id ? 'bg-red-900 text-white' : 'bg-stone-800 text-stone-400 hover:text-white'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Overview */}
      {activeSection === 'overview' && (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {familyStats.map(s => (
              <div key={s.label} className="bg-stone-900 rounded-xl p-4">
                <div className="text-xl font-bold text-red-400">{s.value}</div>
                <div className="text-stone-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-stone-900 rounded-xl p-6 mb-6">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">By the Numbers</h2>
            <div className="space-y-3 text-stone-300 text-sm">
              <p>• <strong>22% unemployment</strong> — Military spouses face chronic unemployment due to constant relocations. The average military family moves every 2-3 years.</p>
              <p>• <strong>24% on food assistance</strong> — Nearly 1 in 4 military families qualify for SNAP benefits despite serving their country.</p>
              <p>• <strong>3.5 deployments</strong> — Post-9/11 service members average 3.5 combat deployments, compared to 1 in previous eras.</p>
              <p>• <strong>6-9 school changes</strong> — Military children change schools 6-9 times during K-12, three times the national average.</p>
              <p>• <strong>$886B defense budget</strong> — Yet military family support programs receive less than 1% of the defense budget.</p>
            </div>
          </div>
        </div>
      )}

      {/* Deployments */}
      {activeSection === 'deployments' && (
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Deployment Cycles Through History</h2>
          <p className="text-stone-400 text-sm mb-6">
            The post-9/11 era introduced something unprecedented: repeated combat deployments. Previous generations deployed once. Today&apos;s soldiers may deploy 3-5 times.
          </p>

          <div className="bg-stone-900 rounded-xl p-4 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={deploymentData}>
                <XAxis dataKey="era" tick={{ fill: '#a8a29e', fontSize: 11 }} />
                <YAxis tick={{ fill: '#a8a29e', fontSize: 11 }} />
                <Tooltip contentStyle={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: 8 }} />
                <Bar dataKey="avgMonths" name="Avg Months Deployed" fill="#991b1b" radius={[4, 4, 0, 0]} />
                <Bar dataKey="deployments" name="Avg # Deployments" fill="#b91c1c" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-stone-800 rounded-xl p-5 text-sm text-stone-300 space-y-2">
            <p>• The &quot;operational tempo&quot; of post-9/11 wars is historically unprecedented — troops rotating in and out of combat zones for two decades.</p>
            <p>• Each deployment increases PTSD risk by 12-15%. By the 3rd deployment, the cumulative risk exceeds 40%.</p>
            <p>• &quot;Dwell time&quot; (time home between deployments) has shrunk from the DoD target of 2:1 to often less than 1:1.</p>
            <p>• National Guard and Reserve units, originally designed for domestic emergencies, have been deployed at rates approaching active duty forces.</p>
          </div>
        </div>
      )}

      {/* Families / Divorce */}
      {activeSection === 'families' && (
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Marriage & Military Life</h2>
          <p className="text-stone-400 text-sm mb-6">
            The military divorce rate appears lower than the national average — but the data hides the real story. Special operations forces, who deploy the most, have estimated divorce rates near 90%.
          </p>

          <div className="bg-stone-900 rounded-xl p-4 mb-6">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={divorceData} layout="vertical">
                <XAxis type="number" tick={{ fill: '#a8a29e', fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
                <YAxis type="category" dataKey="group" tick={{ fill: '#a8a29e', fontSize: 11 }} width={120} />
                <Tooltip formatter={(v) => `${v}%`} contentStyle={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: 8 }} />
                <Bar dataKey="rate" fill="#991b1b" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-stone-500 text-xs mt-2">*Special Ops figure is estimated lifetime rate from multiple sources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-stone-900 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">Spouse Employment Crisis</h3>
              <ul className="text-stone-400 text-sm space-y-1">
                <li>• 22% unemployment rate (vs 3.7% national)</li>
                <li>• Spouses earn 26% less than civilian peers</li>
                <li>• Professional licenses rarely transfer between states</li>
                <li>• Average income loss per PCS move: $14,000</li>
                <li>• Many employers won&apos;t hire knowing relocation is coming</li>
              </ul>
            </div>
            <div className="bg-stone-900 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">Financial Strain</h3>
              <ul className="text-stone-400 text-sm space-y-1">
                <li>• 24% of junior enlisted qualify for food stamps</li>
                <li>• Predatory lenders cluster near military bases</li>
                <li>• Average military family debt: $32,000 (non-mortgage)</li>
                <li>• PCS moves cost families $5,000-$12,000 out of pocket</li>
                <li>• &quot;Geographic bachelors&quot; maintain two households</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Children */}
      {activeSection === 'children' && (
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Impact on Military Children</h2>
          <p className="text-stone-400 text-sm mb-6">
            1.7 million children have a parent in the military. They face higher rates of anxiety, depression, and behavioral issues — especially during and after deployments.
          </p>

          <div className="bg-stone-900 rounded-xl p-4 mb-6">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={childImpactData}>
                <XAxis dataKey="issue" tick={{ fill: '#a8a29e', fontSize: 10 }} />
                <YAxis tick={{ fill: '#a8a29e', fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
                <Tooltip formatter={(v) => `${v}%`} contentStyle={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: 8 }} />
                <Bar dataKey="pctMilKids" name="Military Children" fill="#991b1b" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pctGenPop" name="General Population" fill="#57534e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-stone-800 rounded-xl p-5 text-sm text-stone-300 space-y-3">
            <p><strong>The &quot;Dandelion Children&quot; Myth:</strong> The military often celebrates children&apos;s &quot;resilience,&quot; but research shows many carry invisible wounds. 32% of children with a deployed parent exhibit clinical-level anxiety — more than twice the national average.</p>
            <p><strong>School Disruption:</strong> Military children change schools 6-9 times during K-12. Each move results in an average 4-6 month academic setback. Gifted programs, IEPs, and special services must be re-established at each new school.</p>
            <p><strong>During Deployment:</strong> The at-home parent becomes a single parent overnight. Children may regress developmentally, act out, or withdraw. Younger children often cannot understand why a parent has disappeared.</p>
            <p><strong>After Deployment:</strong> Reintegration can be harder than separation. A parent returning with PTSD, TBI, or moral injury fundamentally changes family dynamics. Children report not recognizing the parent who came home.</p>
          </div>
        </div>
      )}

      {/* Housing */}
      {activeSection === 'housing' && (
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Base Housing Crisis</h2>
          <p className="text-stone-400 text-sm mb-6">
            In 1996, the DoD privatized military housing. The result: corporate landlords profiting while families live with mold, lead paint, and pest infestations. A 2019 congressional investigation called conditions &quot;unconscionable.&quot;
          </p>

          <div className="bg-stone-900 rounded-xl p-4 mb-6">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={housingIssues} layout="vertical">
                <XAxis type="number" tick={{ fill: '#a8a29e', fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
                <YAxis type="category" dataKey="issue" tick={{ fill: '#a8a29e', fontSize: 11 }} width={160} />
                <Tooltip formatter={(v) => `${v}% of families report`} contentStyle={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: 8 }} />
                <Bar dataKey="pct" fill="#991b1b" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-stone-900 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">Privatization Failures</h3>
              <ul className="text-stone-400 text-sm space-y-1">
                <li>• Companies like Balfour Beatty and Lendlease profit billions</li>
                <li>• BAH (housing allowance) goes directly to corporations</li>
                <li>• Families have no legal recourse — can&apos;t sue under most state laws</li>
                <li>• Work orders ignored for months while rent is auto-deducted</li>
                <li>• Children hospitalized from black mold exposure</li>
              </ul>
            </div>
            <div className="bg-stone-900 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">Health Consequences</h3>
              <ul className="text-stone-400 text-sm space-y-1">
                <li>• Chronic respiratory illness from mold</li>
                <li>• Lead exposure affecting children&apos;s development</li>
                <li>• Rodent and cockroach infestations causing asthma</li>
                <li>• Contaminated water on multiple bases (PFAS chemicals)</li>
                <li>• Service members fear retaliation for complaints</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Gold Star */}
      {activeSection === 'gold-star' && (
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Gold Star & Blue Star Families</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-stone-900 border border-yellow-900/50 rounded-xl p-6">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-yellow-400 mb-2">Gold Star Families</h3>
              <p className="text-stone-400 text-sm mb-3">Families who have lost a loved one in military service.</p>
              <ul className="text-stone-300 text-sm space-y-2">
                <li>• ~7,100 families since 9/11</li>
                <li>• SGLI death benefit: $400,000 (a life&apos;s value to the DoD)</li>
                <li>• Surviving spouses lose healthcare at remarriage</li>
                <li>• The &quot;widow tax&quot; clawed back survivor benefits until 2023</li>
                <li>• Children lose Tricare at age 23, regardless of college status</li>
                <li>• Grief counseling: avg 8 sessions covered</li>
              </ul>
            </div>

            <div className="bg-stone-900 border border-blue-900/50 rounded-xl p-6">
              <div className="text-4xl mb-3">🔵</div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-blue-400 mb-2">Blue Star Families</h3>
              <p className="text-stone-400 text-sm mb-3">Families with a member currently serving.</p>
              <ul className="text-stone-300 text-sm space-y-2">
                <li>• 2.6 million family members of active duty</li>
                <li>• 55% report military service strained their marriage</li>
                <li>• 68% say civilian friends don&apos;t understand their life</li>
                <li>• Average time apart from spouse: 18 months over career</li>
                <li>• Children attend 6-9 different schools</li>
                <li>• Only 1% of Americans serve — isolation is growing</li>
              </ul>
            </div>
          </div>

          <div className="bg-stone-800 rounded-xl p-5 text-sm text-stone-300">
            <p className="mb-2"><strong>The Civilian-Military Divide:</strong> With less than 1% of Americans serving, most civilians have no connection to military life. This disconnect makes it easier to send other people&apos;s children to war. 80% of post-9/11 service members come from military families — a self-perpetuating warrior class increasingly disconnected from the society it serves.</p>
            <p><strong>The Cost We Don&apos;t Count:</strong> No budget line item captures a child growing up without a parent. No metric tracks the marriages that survive deployment but never recover. The human toll of war extends far beyond the battlefield, and the families who bear it are largely invisible to the public that sends them.</p>
          </div>
        </div>
      )}

      <BackToTop />
    </div>
  )
}
