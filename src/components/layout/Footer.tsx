import Link from 'next/link';
import { company, footerNav } from '@/data/content';
import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2A2A3E] bg-[#07070C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-4" aria-label="Tess Technology — главная">
              <Logo size="sm" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              {company.tagline}. Более 10 лет помогаем компаниям принимать обоснованные стратегические решения.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${company.phone.replace(/[\s()]/g, '')}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Phone size={14} />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Mail size={14} />
                {company.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={14} />
                {company.address}
              </div>
            </div>
          </div>

          {/* Компания */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Компания
            </h3>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Продукты */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Продукты
            </h3>
            <ul className="space-y-3">
              {footerNav.products.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Проекты */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Проекты
            </h3>
            <ul className="space-y-3">
              {footerNav.projects.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2A2A3E] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            {company.legalName} ИНН {company.inn}
          </p>
          <p className="text-xs text-gray-600">
            © {company.foundedYear} – {year} Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
