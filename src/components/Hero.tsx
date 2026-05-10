import { useState } from 'react'

const AVATARS = [
  'https://i.pravatar.cc/64?img=1',
  'https://i.pravatar.cc/64?img=2',
  'https://i.pravatar.cc/64?img=3',
  'https://i.pravatar.cc/64?img=4',
  'https://i.pravatar.cc/64?img=5',
  'https://i.pravatar.cc/64?img=6',
]

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background grid */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'var(--background-hero-grid)' }}
      />

      {/* Subtle floating orbs */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-30 bg-[var(--color-brand-glow)] blur-3xl" />
      <div className="absolute top-32 right-0 w-64 h-64 rounded-full opacity-20 bg-blue-400 blur-3xl" />
      <div className="absolute top-48 left-0 w-56 h-56 rounded-full opacity-15 bg-purple-400 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Avatars */}
          <div className="flex -space-x-3 mb-8 animate-fade-up">
            {AVATARS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`User ${i + 1}`}
                className={`w-8 h-8 rounded-full border-2 border-white object-cover`}
              />
            ))}
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] animate-slide-up">
            The website builder you're{' '}
            <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              looking for
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-lg text-gray-500 animate-slide-up delay-200">
            Simple is a modern website builder powered by AI that changes how companies create user interfaces together.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-slide-up delay-300">
            <a
              href="#0"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full px-6 py-3 transition-all hover:-translate-y-0.5 shadow-lg shadow-gray-900/20"
            >
              Start Free Trial
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-300">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#0"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Learn More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Terminal mockup */}
          <div className="w-full max-w-2xl mt-16 animate-fade-up delay-600">
            <TerminalMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function TerminalMockup() {
  const [lines, _] = useState([
    { id: 1, color: 'text-white',    text: 'npm login' },
    { id: 2, color: 'text-blue-400',  text: '  --registry=https://npm.pkg.github.com' },
    { id: 3, color: 'text-white',    text: '  --scope=@phanatic ' },
    { id: 4, color: 'text-green-400', text: 'Successfully logged-in.' },
    { id: 5, color: 'text-gray-600',   text: '' },
    { id: 6, color: 'text-white',    text: 'npm publish' },
    { id: 7, color: 'text-green-400', text: 'Package published.' },
  ])

  return (
    <div className="relative rounded-2xl overflow-hidden bg-gray-900 terminal-glow ring-1 ring-gray-800">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-800/80 border-b border-gray-700/50">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="ml-3 flex items-center gap-1 px-2 py-1 rounded bg-gray-700/50 text-[11px] text-gray-300 font-mono">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-gray-400">
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>cruip.com</span>
        </div>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-sm leading-relaxed">
        {lines.map((line) => (
          <div key={line.id} className="whitespace-pre-wrap">
            <span className={line.color}>{line.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
