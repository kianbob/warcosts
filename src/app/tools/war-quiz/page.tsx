'use client'

import { useState } from 'react'
import Link from 'next/link'
import ShareButtons from '@/components/ShareButtons'

interface Question {
  question: string
  options: string[]
  correct: number
  context: string
}

const questions: Question[] = [
  {
    question: 'How much does the US spend on its military per second?',
    options: ['$5,000', '$12,000', '$28,095', '$50,000'],
    correct: 2,
    context: 'The US military budget of $886 billion works out to $28,095 every single second — $2.4 billion per day.',
  },
  {
    question: 'How many US soldiers died in the Civil War?',
    options: ['58,000', '116,000', '250,000', '364,511'],
    correct: 3,
    context: 'The Civil War killed 364,511 US troops — more than any other American conflict. More Americans died fighting each other than in both World Wars combined.',
  },
  {
    question: 'How many overseas military bases does the US maintain?',
    options: ['150', '400', '750', '1,200'],
    correct: 2,
    context: 'The US operates roughly 750 bases in 80 countries. No other nation comes close — the UK, France, and Russia combined have about 30 foreign bases.',
  },
  {
    question: 'What is the estimated total cost of the War on Terror?',
    options: ['$2 trillion', '$5 trillion', '$8 trillion', '$12 trillion'],
    correct: 2,
    context: 'The War on Terror has cost an estimated $8 trillion since 2001, with $2.5 trillion more expected in future veteran care costs.',
  },
  {
    question: 'How many veterans die by suicide every day in the US?',
    options: ['5', '11', '17', '25'],
    correct: 2,
    context: 'An average of 17 veterans die by suicide every day — over 6,000 per year. That\'s more than died in 20 years of combat in Iraq and Afghanistan combined.',
  },
  {
    question: 'What percentage of US wars since WWII were formally declared by Congress?',
    options: ['0%', '15%', '50%', '75%'],
    correct: 0,
    context: 'Zero. The US has not formally declared war since WWII, despite fighting 26 conflicts. Presidents have used "authorizations" and executive power to bypass Congress.',
  },
  {
    question: 'How many people were displaced by the War on Terror?',
    options: ['5 million', '15 million', '38 million', '60 million'],
    correct: 2,
    context: '38 million people have been displaced by US post-9/11 wars — more than any conflict since WWII except World War II itself.',
  },
  {
    question: 'How much did the Vietnam War cost in today\'s dollars?',
    options: ['$200 billion', '$500 billion', '$1 trillion', '$2 trillion'],
    correct: 2,
    context: 'The Vietnam War cost approximately $1 trillion in inflation-adjusted dollars, lasted 20 years, and killed 58,220 American troops and an estimated 2 million Vietnamese civilians.',
  },
  {
    question: 'What is the lifetime cost of the F-35 fighter jet program?',
    options: ['$400 billion', '$800 billion', '$1.2 trillion', '$1.7 trillion'],
    correct: 3,
    context: 'The F-35 program will cost $1.7 trillion over its lifetime — the most expensive weapons program in human history. That\'s enough to make public college free for 50 years.',
  },
  {
    question: 'How many US troops died in World War II?',
    options: ['116,516', '250,000', '405,399', '500,000'],
    correct: 2,
    context: 'WWII killed 405,399 American troops. Globally, an estimated 70-85 million people died — about 3% of the entire world population at the time.',
  },
  {
    question: 'How many jobs does $1 million in military spending create vs education?',
    options: ['5 military vs 8 education', '5 military vs 13 education', '10 military vs 13 education', '5 military vs 5 education'],
    correct: 1,
    context: '$1 million in military spending creates just 5 jobs. The same amount in education creates 13 — nearly 3x more. Healthcare creates 9, clean energy 8.',
  },
  {
    question: 'How many drone strikes did the Obama administration carry out?',
    options: ['57', '150', '350', '563'],
    correct: 3,
    context: 'Obama authorized 563 drone strikes — nearly 10x the 57 under Bush. An estimated 1,700 civilians were killed by drone strikes across both administrations.',
  },
  {
    question: 'How much does the Pentagon spend on contractors over 5 years (2020-2024)?',
    options: ['$500 billion', '$1 trillion', '$2.4 trillion', '$4 trillion'],
    correct: 2,
    context: 'Defense contractors received $2.4 trillion from 2020-2024. About 500 former Pentagon officials have moved to defense contractor positions through the "revolving door."',
  },
  {
    question: 'What was the PTSD rate among Iraq/Afghanistan veterans?',
    options: ['10%', '18%', '29%', '45%'],
    correct: 2,
    context: '29% of Iraq and Afghanistan veterans have been diagnosed with PTSD — nearly 3x the 10% rate among Vietnam veterans. The true number may be higher due to underreporting.',
  },
  {
    question: 'How long did the US war in Afghanistan last?',
    options: ['10 years', '15 years', '20 years', '25 years'],
    correct: 2,
    context: 'Afghanistan lasted 20 years (2001-2021), making it America\'s longest war. It cost $2.3 trillion and ended with the Taliban retaking power within weeks of US withdrawal.',
  },
  {
    question: 'How many countries does the US conduct counterterrorism operations in?',
    options: ['12', '35', '54', '78'],
    correct: 3,
    context: 'The US conducts counterterrorism operations in 78 countries — about 40% of all nations on Earth. Most Americans are unaware of the vast majority of these operations.',
  },
  {
    question: 'What would the Pentagon rank as a country by CO2 emissions?',
    options: ['55th', '100th', '150th', 'Too small to rank'],
    correct: 0,
    context: 'If the Pentagon were a country, it would be the 55th largest emitter of CO2 in the world — larger than most nations. It\'s the world\'s single largest institutional consumer of fossil fuels.',
  },
  {
    question: 'How many US troops died in the Korean War?',
    options: ['8,000', '18,000', '36,574', '55,000'],
    correct: 2,
    context: 'The Korean War killed 36,574 Americans in just 3 years. It\'s called "The Forgotten War" despite being the 4th deadliest conflict in US history.',
  },
  {
    question: 'How many US soldiers died in the Gulf War (1990-1991)?',
    options: ['383', '2,500', '10,000', '25,000'],
    correct: 0,
    context: 'Just 383 Americans died in the Gulf War, but it cost $136 billion. That\'s $355 million per American death — one of the highest cost-per-casualty ratios in history.',
  },
  {
    question: 'What fraction of the world\'s total military spending does the US account for?',
    options: ['15%', '25%', '39%', '50%'],
    correct: 2,
    context: 'The US spends about 39% of all military spending on Earth — more than the next 10 countries combined, including China, Russia, India, and all of NATO.',
  },
]

export default function WarQuizPage() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [finished, setFinished] = useState(false)

  const q = questions[current]

  function handleSelect(idx: number) {
    if (selected !== null) return
    setSelected(idx)
    if (idx === q.correct) setScore(s => s + 1)
    setShowResult(true)
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
      setFinished(true)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setShowResult(false)
    }
  }

  function restart() {
    setCurrent(0)
    setScore(0)
    setSelected(null)
    setShowResult(false)
    setFinished(false)
  }

  function getGrade(s: number) {
    if (s >= 18) return { label: 'War Scholar', emoji: '🎓', msg: 'Incredible! You know more than most members of Congress.' }
    if (s >= 14) return { label: 'Well Informed', emoji: '📚', msg: 'Impressive knowledge. You\'re paying attention.' }
    if (s >= 10) return { label: 'Getting There', emoji: '🔍', msg: 'You know more than average, but the details will shock you.' }
    if (s >= 6) return { label: 'Eye-Opening', emoji: '👀', msg: 'Most people score here. The truth about war costs is hidden by design.' }
    return { label: 'Just the Beginning', emoji: '💡', msg: 'Don\'t feel bad — this information is deliberately kept from public view.' }
  }

  if (finished) {
    const grade = getGrade(score)
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-stone-900 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">{grade.emoji}</div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2 text-white">
            {score} / {questions.length}
          </h1>
          <p className="text-xl text-red-700 font-semibold mb-2">{grade.label}</p>
          <p className="text-stone-600 mb-6">{grade.msg}</p>

          <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 mb-6">
            <p className="text-stone-500 text-sm">Share your result</p>
            <p className="text-white font-semibold">
              I scored {score}/{questions.length} on the WarCosts War Quiz — How Much Do You Know About America&apos;s Wars?
            </p>
            <ShareButtons title={`I scored ${score}/${questions.length} on the WarCosts War Quiz! How much do YOU know about America's wars? Take the quiz:`} />
          </div>

          <div className="flex gap-4 justify-center">
            <button onClick={restart} className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              Try Again
            </button>
            <Link href="/tools" className="bg-stone-700 hover:bg-stone-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              More Tools
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/tools" className="text-stone-500 hover:text-white text-sm">← Back to Tools</Link>
      </div>

      <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-2">
        How Much Do You Know About America&apos;s Wars?
      </h1>

      {/* Progress */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex-1 bg-stone-800 rounded-full h-2">
          <div
            className="bg-red-700 h-2 rounded-full transition-all"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>
        <span className="text-stone-500 text-sm font-mono">{current + 1}/{questions.length}</span>
        <span className="text-stone-500 text-sm">Score: {score}</span>
      </div>

      {/* Question */}
      <div className="bg-stone-900 rounded-xl p-6 mb-4">
        <h2 className="text-lg font-semibold text-white mb-6">{q.question}</h2>

        <div className="space-y-3">
          {q.options.map((opt, i) => {
            let cls = 'border border-stone-200 rounded-lg p-4 text-left w-full transition cursor-pointer '
            if (selected === null) {
              cls += 'hover:border-red-600 hover:bg-stone-800 text-stone-200'
            } else if (i === q.correct) {
              cls += 'border-green-500 bg-green-900/30 text-green-300'
            } else if (i === selected) {
              cls += 'border-red-500 bg-red-900/30 text-red-600'
            } else {
              cls += 'border-stone-800 text-stone-500'
            }

            return (
              <button key={i} onClick={() => handleSelect(i)} className={cls} disabled={selected !== null}>
                <span className="font-mono text-sm mr-3 text-stone-500">{String.fromCharCode(65 + i)}</span>
                {opt}
              </button>
            )
          })}
        </div>
      </div>

      {/* Context after answer */}
      {showResult && (
        <div className="bg-stone-800 border border-stone-200 rounded-xl p-5 mb-4">
          <p className="text-sm font-semibold mb-1 text-stone-600">
            {selected === q.correct ? '✅ Correct!' : '❌ Incorrect'}
          </p>
          <p className="text-stone-500 text-sm">{q.context}</p>
        </div>
      )}

      {showResult && (
        <button onClick={handleNext} className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition w-full">
          {current + 1 >= questions.length ? 'See Results' : 'Next Question →'}
        </button>
      )}
    </div>
  )
}
