import { processSteps } from '@/data/content';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-indigo-600/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/8 text-indigo-400 text-xs font-medium mb-4">
            Как мы работаем
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Процесс сотрудничества
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Шесть шагов от первого контакта до старта проекта — прозрачно и без лишних этапов
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="relative group bg-[#0F0F1A] border border-[#2A2A3E] rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Connector line (desktop, not last in row) */}
              {index % 3 !== 2 && index !== processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-9 left-full w-6 h-px bg-gradient-to-r from-indigo-500/30 to-transparent z-10" />
              )}

              <div className="flex items-start gap-4">
                {/* Step number */}
                <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <span className="text-sm font-bold gradient-text">{step.step}</span>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contacts"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Начать сотрудничество
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
