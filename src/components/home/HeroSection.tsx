'use client';

import Link from 'next/link';
import { ArrowRight, ChevronDown, CheckCircle } from 'lucide-react';
import { heroBullets } from '@/data/content';

const dataNodes = [
  { cx: 20, cy: 25, r: 2.8, delay: '0s' },
  { cx: 55, cy: 15, r: 2, delay: '0.4s' },
  { cx: 80, cy: 30, r: 3.2, delay: '0.8s' },
  { cx: 70, cy: 62, r: 2.4, delay: '0.2s' },
  { cx: 30, cy: 68, r: 2.8, delay: '0.6s' },
  { cx: 90, cy: 52, r: 2, delay: '1s' },
  { cx: 10, cy: 52, r: 2.4, delay: '0.3s' },
  { cx: 60, cy: 82, r: 2, delay: '0.7s' },
];

const dataLines = [
  [20, 25, 55, 15], [55, 15, 80, 30], [80, 30, 70, 62],
  [70, 62, 50, 46], [50, 46, 30, 68], [30, 68, 10, 52],
  [10, 52, 20, 25], [50, 46, 55, 15], [50, 46, 80, 30],
  [50, 46, 90, 52], [60, 82, 70, 62], [60, 82, 30, 68],
];

const floatingCards = [
  { label: 'Анализ рынков', value: '300+', sub: 'кейсов', top: '6%', left: '-4%', delay: '0s' },
  { label: 'Источников данных', value: '100K+', sub: 'глобально', top: '40%', left: '65%', delay: '1.3s' },
  { label: 'Лет на рынке', value: '10+', sub: 'с 2016 года', top: '72%', left: '2%', delay: '2.6s' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial glows */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[700px] rounded-full bg-indigo-600/8 blur-[140px]" />
      </div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/6 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0 lg:min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Экспертиза в стратегии и системном анализе
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-tight">
              Tess Technology
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light mb-8 leading-snug">
              Анализ рынков, социальное и{' '}
              <span className="gradient-text font-medium">экономическое моделирование</span>
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {heroBullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2.5 text-gray-400 text-base">
                  <CheckCircle size={17} className="text-indigo-400 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
              <Link
                href="/contacts"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/25"
              >
                Связаться с нами
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 px-8 py-4 rounded-xl border border-[#2A2A3E] hover:border-indigo-500/50 text-gray-300 hover:text-white font-semibold text-base transition-all duration-200 hover:bg-white/5"
              >
                Наши продукты
              </Link>
            </div>

            {/* Stats bar */}
            <div className="flex flex-wrap items-center gap-8">
              {[
                { value: '300+', label: 'кейсов' },
                { value: '10+', label: 'лет опыта' },
                { value: '20+', label: 'экспертов' },
                { value: '100K+', label: 'источников данных' },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-8 bg-[#2A2A3E]" />}
                  <div>
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: animated network visualization */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[460px] aspect-square">
              {/* Rotating rings */}
              <div className="absolute inset-6 rounded-full border border-indigo-500/10 animate-[spin_35s_linear_infinite]" />
              <div className="absolute inset-16 rounded-full border border-indigo-500/8 animate-[spin_22s_linear_infinite_reverse]" />

              {/* Network SVG */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
                {dataLines.map(([x1, y1, x2, y2], i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="rgba(99,102,241,0.2)" strokeWidth="0.35" />
                ))}
                {dataNodes.map((n, i) => (
                  <circle key={i} cx={n.cx} cy={n.cy} r={n.r}
                    fill="rgba(99,102,241,0.75)"
                    style={{ animation: `pulse 2.8s ease-in-out infinite`, animationDelay: n.delay }} />
                ))}
                {/* Central node */}
                <circle cx="50" cy="46" r="5.5" fill="rgba(99,102,241,1)" />
                <circle cx="50" cy="46" r="9" fill="rgba(99,102,241,0.12)" />
                <circle cx="50" cy="46" r="13" fill="rgba(99,102,241,0.05)" />
              </svg>

              {/* Floating metric cards */}
              {floatingCards.map((card) => (
                <div
                  key={card.label}
                  className="absolute bg-[#0F0F1A]/90 backdrop-blur-sm border border-[#2A2A3E] rounded-xl px-4 py-3 shadow-lg min-w-[130px]"
                  style={{
                    top: card.top,
                    left: card.left,
                    animation: `float 4.5s ease-in-out infinite`,
                    animationDelay: card.delay,
                  }}
                >
                  <div className="text-[11px] text-gray-500 mb-0.5">{card.label}</div>
                  <div className="text-lg font-bold gradient-text">{card.value}</div>
                  <div className="text-[11px] text-gray-600">{card.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors"
        aria-label="Прокрутить вниз"
      >
        <span className="text-xs">Подробнее</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
