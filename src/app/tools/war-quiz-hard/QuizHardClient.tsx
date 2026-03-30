'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

interface Question {
  question: string
  options: string[]
  correct: number
  context: string
  type: string
}

const QUESTIONS: Question[] = [
  { type: 'cost', question: 'Which war cost $8 trillion (including long-term costs)?', options: ['Vietnam War', 'War on Terror', 'World War II', 'Korean War'], correct: 1, context: 'The War on Terror has cost an estimated $8 trillion since 2001, with trillions more in future veteran care.' },
  { type: 'deaths', question: 'How many Iraqi civilians died as a result of the 2003 Iraq invasion?', options: ['50,000', '100,000', '200,000–300,000', '500,000+'], correct: 2, context: 'Conservative estimates place Iraqi civilian deaths at 200,000–300,000, with some studies suggesting over 500,000 excess deaths.' },
  { type: 'bases', question: 'Which country hosts the most US military bases?', options: ['Germany', 'Japan', 'South Korea', 'Italy'], correct: 1, context: 'Japan hosts approximately 120 US military installations — more than any other country — a legacy of WWII occupation.' },
  { type: 'president', question: 'Which president authorized the most drone strikes?', options: ['George W. Bush', 'Barack Obama', 'Donald Trump', 'Joe Biden'], correct: 1, context: 'Obama authorized 563 drone strikes, ~10× more than Bush. Trump later relaxed reporting requirements, making his numbers less transparent.' },
  { type: 'truefalse', question: 'True or False: The US has been at war for over 225 of its 250 years of existence.', options: ['True', 'False — it\'s about 150 years', 'False — it\'s about 175 years', 'False — it\'s about 200 years'], correct: 0, context: 'The US has been at war or in major military conflict for approximately 228 of its 250 years — over 91% of its existence.' },
  { type: 'cost', question: 'How much does one B-2 Spirit stealth bomber cost?', options: ['$500 million', '$1.2 billion', '$2.1 billion', '$3.5 billion'], correct: 2, context: 'Each B-2 bomber costs $2.1 billion — making it literally worth more than its weight in gold. Only 21 were ever built.' },
  { type: 'deaths', question: 'How many US veterans have died by suicide since 9/11?', options: ['30,000', '65,000', '114,000+', '200,000'], correct: 2, context: 'Over 114,000 veterans have died by suicide since 9/11 — more than 4× the number killed in combat during the same period.' },
  { type: 'bases', question: 'How many countries have US military bases on their soil?', options: ['35', '55', '80', '120'], correct: 2, context: 'The US maintains military bases in approximately 80 countries. No other nation has more than a handful of foreign bases.' },
  { type: 'cost', question: 'What is the Pentagon\'s annual budget per second?', options: ['$5,000', '$12,000', '$28,095', '$50,000'], correct: 2, context: '$886 billion per year works out to $28,095 every single second — $2.4 billion per day, $100 million per hour.' },
  { type: 'president', question: 'Which president warned about the "military-industrial complex"?', options: ['Harry Truman', 'Dwight Eisenhower', 'John F. Kennedy', 'Richard Nixon'], correct: 1, context: 'Eisenhower — a 5-star general and WWII Supreme Commander — warned in his 1961 farewell address about the undue influence of the military-industrial complex.' },
  { type: 'truefalse', question: 'True or False: The Pentagon has successfully passed a financial audit.', options: ['True — it passed in 2022', 'True — it passed in 2018', 'False — it has never passed', 'False — it hasn\'t been audited'], correct: 2, context: 'The Pentagon has failed every single audit since they began in 2018. It cannot account for trillions of dollars in assets and transactions.' },
  { type: 'cost', question: 'How much did the US spend per Taliban fighter killed in Afghanistan?', options: ['$500,000', '$2 million', '$10 million', '$50 million+'], correct: 3, context: 'With ~$2.3T spent and estimates of 50,000–70,000 Taliban killed, the cost per fighter killed was roughly $30–50 million each.' },
  { type: 'deaths', question: 'How many people worldwide were displaced by US post-9/11 wars?', options: ['5 million', '15 million', '38 million', '60 million'], correct: 2, context: '38 million people displaced — more than any conflict since WWII. Many remain refugees today.' },
  { type: 'bases', question: 'How many aircraft carriers does the US operate vs. the rest of the world combined?', options: ['11 US vs. 9 others', '11 US vs. 13 others', '15 US vs. 5 others', '8 US vs. 15 others'], correct: 0, context: 'The US has 11 nuclear-powered supercarriers. The rest of the world has about 9 total, mostly smaller conventional carriers.' },
  { type: 'cost', question: 'What is the lifetime cost of the F-35 fighter jet program?', options: ['$400 billion', '$800 billion', '$1.2 trillion', '$1.7 trillion'], correct: 3, context: 'The F-35 program will cost $1.7T over its lifetime — the most expensive weapons system in history. That\'s $5,100 per American.' },
  { type: 'president', question: 'Which president launched the invasion of Iraq in 2003?', options: ['Bill Clinton', 'George W. Bush', 'Barack Obama', 'Donald Trump'], correct: 1, context: 'Bush launched the Iraq invasion based on claims of WMDs that were never found. The war cost $1.9T and killed over 4,400 US troops.' },
  { type: 'truefalse', question: 'True or False: The US spends more on its military than the next 10 countries combined.', options: ['True', 'False — next 5 combined', 'False — next 3 combined', 'False — China alone spends more'], correct: 0, context: 'The US spent $886B in FY2024 — more than China, Russia, India, Saudi Arabia, UK, Germany, France, Japan, South Korea, and Australia combined.' },
  { type: 'deaths', question: 'How many civilians were killed by US drone strikes in Pakistan, Yemen, and Somalia?', options: ['300–500', '900–2,200', '4,000–6,000', '10,000+'], correct: 1, context: 'Estimates range from 900–2,200 civilians killed in drone strikes in these three countries, though true numbers are likely higher due to underreporting.' },
  { type: 'cost', question: 'How much interest has the US paid on War on Terror debt?', options: ['$100 billion', '$500 billion', '$1 trillion', '$2.2 trillion'], correct: 2, context: 'Over $1 trillion in interest has been paid on money borrowed to fund post-9/11 wars. By 2050, interest alone could exceed the original war costs.' },
  { type: 'truefalse', question: 'True or False: More US veterans have died by suicide than in combat since 9/11.', options: ['True — roughly 4× more', 'True — roughly 2× more', 'False — combat deaths are higher', 'False — they\'re about equal'], correct: 0, context: '~114,000 veteran suicides vs. ~7,000 combat deaths since 9/11. Veterans are 1.5× more likely to die by suicide than non-veterans.' },
]

const TIME_PER_QUESTION = 15 // seconds

function getRanking(score: number, total: number): { pct: number; label: string; emoji: string; msg: string } {
  const ratio = score / total
  if (ratio >= 0.9) return { pct: 99, label: 'War Scholar', emoji: '🎓', msg: 'You know more about US wars than most members of Congress.' }
  if (ratio >= 0.75) return { pct: 90, label: 'Expert', emoji: '🏆', msg: 'Deeply informed. You see through the propaganda.' }
  if (ratio >= 0.6) return { pct: 75, label: 'Well Informed', emoji: '📚', msg: 'You know the basics and then some.' }
  if (ratio >= 0.4) return { pct: 50, label: 'Getting There', emoji: '🔍', msg: 'More than average, but the truth runs deeper.' }
  if (ratio >= 0.2) return { pct: 25, label: 'Eye-Opening', emoji: '👀', msg: 'Don\'t feel bad — this info is deliberately hidden from public view.' }
  return { pct: 10, label: 'Just Starting', emoji: '💡', msg: 'Welcome to the rabbit hole. Everything you assumed is probably wrong.' }
}

export default function QuizHardClient() {
  const [state, setState] = useState<'intro' | 'playing' | 'result'>('intro')
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showContext, setShowContext] = useState(false)
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const q = QUESTIONS[current]

  const stopTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const handleSelect = useCallback((idx: number) => {
    if (selected !== null) return
    stopTimer()
    setSelected(idx)
    setShowContext(true)
    setAnswers(prev => [...prev, idx])
    if (idx === q.correct) setScore(s => s + 1)
  }, [selected, stopTimer, q.correct])

  const handleTimeout = useCallback(() => {
    stopTimer()
    setSelected(-1) // timed out
    setShowContext(true)
    setAnswers(prev => [...prev, null])
  }, [stopTimer])

  // Timer
  useEffect(() => {
    if (state !== 'playing' || showContext) return
    setTimeLeft(TIME_PER_QUESTION)
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { handleTimeout(); return 0 }
        return prev - 1
      })
    }, 1000)
    return () => stopTimer()
  }, [state, current, showContext, handleTimeout, stopTimer])

  const handleNext = () => {
    if (current + 1 >= QUESTIONS.length) {
      setState('result')
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setShowContext(false)
    }
  }

  const startQuiz = () => {
    setCurrent(0)
    setScore(0)
    setSelected(null)
    setShowContext(false)
    setAnswers([])
    setState('playing')
  }

  if (state === 'intro') {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-6">🎯</div>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">Can You Guess?</h2>
        <p className="text-stone-500 text-lg mb-2 max-w-md mx-auto">
          20 questions. 15 seconds each. Multiple choice. Harder than you think.
        </p>
        <ul className="text-stone-500 text-sm mb-8 space-y-1">
          <li>• Which war cost how much?</li>
          <li>• How many died in each conflict?</li>
          <li>• Which president started what?</li>
          <li>• True or false: the uncomfortable facts</li>
        </ul>
        <button onClick={startQuiz} className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition">
          Start Quiz →
        </button>
      </div>
    )
  }

  if (state === 'result') {
    const ranking = getRanking(score, QUESTIONS.length)
    const shareText = `I scored ${score}/${QUESTIONS.length} on the WarCosts Advanced Quiz (top ${ranking.pct}%). Can you beat me?`
    return (
      <div className="py-8">
        <div className="bg-stone-900 rounded-2xl p-8 text-center max-w-lg mx-auto">
          <div className="text-6xl mb-4">{ranking.emoji}</div>
          <p className="text-5xl font-bold text-white mb-2">{score} / {QUESTIONS.length}</p>
          <p className="text-xl text-red-400 font-semibold mb-1">{ranking.label}</p>
          <p className="text-stone-400 mb-2">{ranking.msg}</p>
          <p className="text-stone-500 text-sm mb-6">You scored better than <strong className="text-white">{ranking.pct}%</strong> of players</p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent('https://warcosts.org/tools/war-quiz-hard')}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition"
            >Share on 𝕏</a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://warcosts.org/tools/war-quiz-hard')}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition"
            >Share on Facebook</a>
            <button
              onClick={() => navigator.clipboard?.writeText(shareText + ' https://warcosts.org/tools/war-quiz-hard')}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition"
            >📋 Copy</button>
          </div>

          <div className="flex gap-3 justify-center">
            <button onClick={startQuiz} className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Try Again
            </button>
          </div>
        </div>

        {/* Answer review */}
        <div className="mt-10 space-y-3 max-w-lg mx-auto">
          <h3 className="font-bold text-stone-700 text-sm uppercase tracking-wide">Your Answers</h3>
          {QUESTIONS.map((q, i) => {
            const ans = answers[i]
            const correct = ans === q.correct
            return (
              <div key={i} className={`rounded-lg border p-3 text-sm ${correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <p className="font-medium text-stone-900">{correct ? '✅' : '❌'} {q.question}</p>
                <p className="text-stone-500 text-xs mt-1">
                  {ans === null ? 'Timed out' : `You answered: ${q.options[ans]}`}
                  {!correct && ` · Correct: ${q.options[q.correct]}`}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Playing state
  const timerPct = (timeLeft / TIME_PER_QUESTION) * 100
  const timerColor = timeLeft <= 5 ? 'bg-red-500' : timeLeft <= 10 ? 'bg-amber-500' : 'bg-emerald-500'

  return (
    <div className="max-w-lg mx-auto">
      {/* Progress & timer */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 bg-stone-200 rounded-full h-2">
          <div className="bg-red-700 h-2 rounded-full transition-all" style={{ width: `${((current + 1) / QUESTIONS.length) * 100}%` }} />
        </div>
        <span className="text-stone-500 text-sm font-mono">{current + 1}/{QUESTIONS.length}</span>
        <span className="text-stone-500 text-sm">⭐ {score}</span>
      </div>

      {/* Timer bar */}
      {!showContext && (
        <div className="bg-stone-200 rounded-full h-2 mb-6 overflow-hidden">
          <div className={`${timerColor} h-2 rounded-full transition-all duration-1000`} style={{ width: `${timerPct}%` }} />
        </div>
      )}

      {/* Timer number */}
      {!showContext && (
        <div className="text-center mb-4">
          <span className={`text-3xl font-bold font-mono ${timeLeft <= 5 ? 'text-red-600 animate-pulse' : 'text-stone-400'}`}>
            {timeLeft}s
          </span>
        </div>
      )}

      {/* Type badge */}
      <div className="mb-2">
        <span className="text-xs uppercase tracking-wide text-stone-400 bg-stone-100 px-2 py-1 rounded">
          {q.type === 'truefalse' ? 'True or False' : q.type}
        </span>
      </div>

      {/* Question */}
      <h2 className="text-xl font-bold text-stone-900 mb-6">{q.question}</h2>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {q.options.map((opt, i) => {
          let cls = 'border rounded-lg p-4 text-left w-full transition cursor-pointer text-sm font-medium '
          if (!showContext) {
            cls += 'border-stone-200 hover:border-red-500 hover:bg-red-50 text-stone-700'
          } else if (i === q.correct) {
            cls += 'border-green-500 bg-green-50 text-green-800'
          } else if (i === selected) {
            cls += 'border-red-500 bg-red-50 text-red-700'
          } else {
            cls += 'border-stone-200 text-stone-400'
          }
          return (
            <button key={i} onClick={() => handleSelect(i)} className={cls} disabled={showContext}>
              <span className="font-mono text-xs mr-3 text-stone-400">{String.fromCharCode(65 + i)}</span>
              {opt}
            </button>
          )
        })}
      </div>

      {/* Context */}
      {showContext && (
        <>
          <div className="bg-stone-100 border border-stone-200 rounded-lg p-4 mb-4">
            <p className="text-sm font-semibold mb-1">
              {selected === q.correct ? '✅ Correct!' : selected === -1 ? '⏱️ Time\'s up!' : '❌ Incorrect'}
            </p>
            <p className="text-stone-600 text-sm">{q.context}</p>
          </div>
          <button onClick={handleNext} className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition w-full">
            {current + 1 >= QUESTIONS.length ? 'See Results' : 'Next Question →'}
          </button>
        </>
      )}
    </div>
  )
}
