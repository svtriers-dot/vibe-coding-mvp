import type { Metadata } from 'next';
import ProjectsClient from '@/components/projects/ProjectsClient';

export const metadata: Metadata = {
  title: 'Проекты',
  description: '300+ успешных кейсов Tess Technology — от нанометаллов до рынка GPU для ИИ.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/8 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6">
            Кейсы
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Наши проекты
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            300+ успешных кейсов — от небольших проектов до компаний международного уровня
          </p>
        </div>
      </section>

      <ProjectsClient />
    </div>
  );
}
