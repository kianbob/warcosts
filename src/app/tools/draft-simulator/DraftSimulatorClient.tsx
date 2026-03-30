'use client'

import { useState } from 'react'

interface DraftResult {
  vietnamChance: number
  modernChance: number
  escalationChance: number
  defermentNote: string
  classNote: string
  historicalContext: string
}

const states = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia',
  'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland',
  'Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
  'New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
  'South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
]

const highMilitaryStates = ['Alabama','Alaska','Georgia','Hawaii','Kentucky','Mississippi','Montana','North Carolina','Oklahoma','South Carolina','Tennessee','Texas','Virginia','West Virginia','Wyoming']

function calculateDraft(
  age: number,
  gender: string,
  state: string,
  income: string,
  education: string,
  dependents: number
): DraftResult {
  // Vietnam-era calculation
  let vietnamBase = 0
  if (gender === 'male' && age >= 18 && age <= 26) {
    vietnamBase = 45 // base chance for eligible males
    // Age sweet spot 19-22
    if (age >= 19 && age <= 22) vietnamBase += 15
    else if (age >= 23 && age <= 26) vietnamBase -= 10
  } else if (gender === 'male' && age > 26 && age <= 35) {
    vietnamBase = 8
  }

  // College deferment (massive reduction)
  let defermentNote = ''
  if (education === 'college' || education === 'graduate') {
    vietnamBase *= 0.25
    defermentNote = 'College deferments (II-S) reduced draft probability by ~75%. This disproportionately protected upper-middle-class men.'
  } else if (education === 'high-school') {
    vietnamBase *= 1.2
    defermentNote = 'Without college deferment, high school graduates were the most heavily drafted group in Vietnam.'
  } else {
    vietnamBase *= 1.1
    defermentNote = 'Those without a high school diploma were often drafted first in their local boards.'
  }

  // Income adjustment — working class served at 3x rate
  if (income === 'low') {
    vietnamBase *= 1.5
  } else if (income === 'lower-middle') {
    vietnamBase *= 1.3
  } else if (income === 'upper-middle') {
    vietnamBase *= 0.6
  } else if (income === 'high') {
    vietnamBase *= 0.3
  }

  // Dependents
  if (dependents >= 1) {
    vietnamBase *= 0.6
    if (!defermentNote.includes('deferment')) {
      defermentNote += ' Married men with dependents received III-A deferments during most of the Vietnam War.'
    }
  }
  if (dependents >= 3) vietnamBase *= 0.5

  // Gender
  if (gender === 'female') {
    vietnamBase = 0
    defermentNote = 'Women were not subject to the draft. However, many served voluntarily — over 11,000 women served in Vietnam, mostly as nurses.'
  }

  vietnamBase = Math.min(Math.max(Math.round(vietnamBase), 0), 95)

  // Modern Selective Service
  let modernChance = 0
  if (gender === 'male' && age >= 18 && age <= 25) {
    modernChance = 100 // required to register
  } else if (gender === 'female') {
    modernChance = 0 // not currently required (though debated)
  }

  // Escalation scenario — Iran ground invasion
  let escalationBase = 0
  if (gender === 'male' && age >= 18 && age <= 35) {
    escalationBase = 30
    if (age >= 18 && age <= 25) escalationBase = 55
    else if (age >= 26 && age <= 30) escalationBase = 35
    else escalationBase = 15
  } else if (gender === 'female' && age >= 18 && age <= 30) {
    escalationBase = 12 // modern draft proposals include women
  }

  // Same class adjustments for escalation
  if (income === 'low' || income === 'lower-middle') escalationBase *= 1.3
  if (income === 'high') escalationBase *= 0.5
  if (education === 'college' || education === 'graduate') escalationBase *= 0.7
  if (dependents >= 2) escalationBase *= 0.5
  if (highMilitaryStates.includes(state)) escalationBase *= 1.15

  escalationBase = Math.min(Math.max(Math.round(escalationBase), 0), 90)

  // Class note
  let classNote = ''
  if (income === 'low' || income === 'lower-middle') {
    classNote = 'Americans from lower-income households have historically served — and died — at disproportionately higher rates. During Vietnam, working-class Americans served at 3× the rate of upper-class Americans.'
  } else if (income === 'upper-middle' || income === 'high') {
    classNote = 'Wealthier Americans have historically been insulated from military service through college deferments, connections, and economic alternatives. During Vietnam, only 2% of Harvard\'s class of 1970 served.'
  } else {
    classNote = 'Middle-class Americans have historically been the swing group — not wealthy enough to easily avoid service, but with more options than the working class.'
  }

  // Historical context
  let historicalContext = ''
  if (vietnamBase > 40) {
    historicalContext = 'In Vietnam, someone with your profile would have been very likely to be drafted. Over 2.2 million Americans were drafted during Vietnam, with the heaviest burden falling on working-class men aged 19-22 without college deferments.'
  } else if (vietnamBase > 20) {
    historicalContext = 'In Vietnam, someone with your profile had a moderate chance of being drafted. The lottery system introduced in 1969 made the process more random, but class-based deferments still heavily influenced who actually served.'
  } else if (vietnamBase > 0) {
    historicalContext = 'In Vietnam, someone with your profile would have had a relatively low chance of being drafted, likely due to deferments or demographic factors. This is exactly the inequality that critics of the draft system highlighted.'
  } else {
    historicalContext = 'You would not have been subject to the Vietnam-era draft based on your profile.'
  }

  return {
    vietnamChance: vietnamBase,
    modernChance,
    escalationChance: escalationBase,
    defermentNote,
    classNote,
    historicalContext,
  }
}

export default function DraftSimulatorClient() {
  const [age, setAge] = useState(22)
  const [gender, setGender] = useState('male')
  const [state, setState] = useState('California')
  const [income, setIncome] = useState('middle')
  const [education, setEducation] = useState('college')
  const [dependents, setDependents] = useState(0)
  const [result, setResult] = useState<DraftResult | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setResult(calculateDraft(age, gender, state, income, education, dependents))
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Input Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 md:p-8 mb-12">
        <h2 className="font-playfair text-2xl font-bold text-stone-900 mb-6">Enter Your Profile</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Age</label>
            <input
              type="number"
              min={18}
              max={65}
              value={age}
              onChange={e => setAge(Number(e.target.value))}
              className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Gender</label>
            <select
              value={gender}
              onChange={e => setGender(e.target.value)}
              className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">State</label>
            <select
              value={state}
              onChange={e => setState(e.target.value)}
              className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
            >
              {states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {/* Income */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Household Income Bracket</label>
            <select
              value={income}
              onChange={e => setIncome(e.target.value)}
              className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
            >
              <option value="low">Under $30K</option>
              <option value="lower-middle">$30K – $60K</option>
              <option value="middle">$60K – $100K</option>
              <option value="upper-middle">$100K – $200K</option>
              <option value="high">$200K+</option>
            </select>
          </div>

          {/* Education */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Education Level</label>
            <select
              value={education}
              onChange={e => setEducation(e.target.value)}
              className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
            >
              <option value="no-diploma">No High School Diploma</option>
              <option value="high-school">High School Diploma/GED</option>
              <option value="some-college">Some College</option>
              <option value="college">Bachelor&apos;s Degree</option>
              <option value="graduate">Graduate/Professional Degree</option>
            </select>
          </div>

          {/* Dependents */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Number of Dependents</label>
            <input
              type="number"
              min={0}
              max={10}
              value={dependents}
              onChange={e => setDependents(Number(e.target.value))}
              className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full md:w-auto px-8 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg font-medium text-lg transition"
        >
          Calculate My Draft Probability
        </button>
      </form>

      {/* Results */}
      {result && (
        <div className="space-y-8 animate-in fade-in duration-500">
          {/* Main Results Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Vietnam */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 text-center">
              <p className="text-sm font-medium text-stone-500 mb-2">Vietnam Era (1964–1973)</p>
              <p className={`text-5xl font-bold mb-2 ${result.vietnamChance > 50 ? 'text-red-600' : result.vietnamChance > 20 ? 'text-amber-600' : 'text-green-600'}`}>
                {result.vietnamChance}%
              </p>
              <p className="text-stone-600 text-sm">chance of being drafted</p>
              <div className="mt-4 h-3 bg-stone-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${result.vietnamChance > 50 ? 'bg-red-500' : result.vietnamChance > 20 ? 'bg-amber-500' : 'bg-green-500'}`}
                  style={{ width: `${result.vietnamChance}%` }}
                />
              </div>
            </div>

            {/* Selective Service */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 text-center">
              <p className="text-sm font-medium text-stone-500 mb-2">Selective Service (Today)</p>
              <p className={`text-5xl font-bold mb-2 ${result.modernChance > 0 ? 'text-amber-600' : 'text-green-600'}`}>
                {result.modernChance > 0 ? 'Required' : 'N/A'}
              </p>
              <p className="text-stone-600 text-sm">
                {result.modernChance > 0 ? 'You must be registered' : 'Not required to register'}
              </p>
              <div className="mt-4 h-3 bg-stone-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${result.modernChance > 0 ? 'bg-amber-500' : 'bg-stone-200'}`}
                  style={{ width: `${result.modernChance}%` }}
                />
              </div>
            </div>

            {/* Escalation */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 text-center">
              <p className="text-sm font-medium text-stone-500 mb-2">Iran Escalation (500K+ troops)</p>
              <p className={`text-5xl font-bold mb-2 ${result.escalationChance > 50 ? 'text-red-600' : result.escalationChance > 20 ? 'text-amber-600' : 'text-green-600'}`}>
                {result.escalationChance}%
              </p>
              <p className="text-stone-600 text-sm">estimated draft probability</p>
              <div className="mt-4 h-3 bg-stone-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${result.escalationChance > 50 ? 'bg-red-500' : result.escalationChance > 20 ? 'bg-amber-500' : 'bg-green-500'}`}
                  style={{ width: `${result.escalationChance}%` }}
                />
              </div>
            </div>
          </div>

          {/* Context Cards */}
          <div className="space-y-4">
            {result.defermentNote && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="font-playfair text-lg font-bold text-amber-900 mb-2">Deferment Status</h3>
                <p className="text-amber-800">{result.defermentNote}</p>
              </div>
            )}

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-playfair text-lg font-bold text-red-900 mb-2">Class & Income Factor</h3>
              <p className="text-red-800">{result.classNote}</p>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-6">
              <h3 className="font-playfair text-lg font-bold text-stone-900 mb-2">Historical Context</h3>
              <p className="text-stone-700">{result.historicalContext}</p>
            </div>

            {result.escalationChance > 30 && (
              <div className="bg-red-900 text-white rounded-xl p-6">
                <h3 className="font-playfair text-lg font-bold mb-2">⚠️ Escalation Warning</h3>
                <p className="text-red-100">
                  If the Iran conflict escalates to a full ground invasion, military planners estimate needing 
                  500,000+ additional troops — far beyond current volunteer capacity. A draft would become 
                  increasingly likely. Based on your profile, you would be among those most likely to be called. 
                  In every American war, the burden has fallen disproportionately on working-class and rural communities.
                </p>
              </div>
            )}
          </div>

          {/* Methodology Note */}
          <div className="text-center text-stone-400 text-xs mt-8 max-w-2xl mx-auto">
            <p>
              This simulator uses historical draft data, demographic patterns, and published research on military 
              service inequality. It is an educational tool, not a prediction. Sources include Christian Appy&apos;s 
              <em> Working-Class War</em>, Selective Service System records, and Pew Research Center military demographics data.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
