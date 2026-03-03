interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  /** Показывать только иконку без текста */
  iconOnly?: boolean;
}

const sizes = {
  sm: { icon: 28, text1: 16, text2: 16, gap: 8 },
  md: { icon: 36, text1: 20, text2: 20, gap: 10 },
  lg: { icon: 48, text1: 26, text2: 26, gap: 12 },
};

export default function Logo({ size = 'md', iconOnly = false }: LogoProps) {
  const s = sizes[size];

  return (
    <span className="flex items-center" style={{ gap: s.gap }}>
      {/* Crystal icon */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top face — lightest */}
        <polygon points="22,3 36,14 22,18 8,14" fill="#818CF8" />
        {/* Upper-left face */}
        <polygon points="8,14 22,18 16,30 4,22" fill="#4F46E5" />
        {/* Upper-right face */}
        <polygon points="36,14 22,18 28,30 40,22" fill="#3730A3" />
        {/* Lower-left face */}
        <polygon points="4,22 16,30 22,41" fill="#4338CA" />
        {/* Lower-center face */}
        <polygon points="16,30 22,41 28,30" fill="#4F46E5" />
        {/* Lower-right face */}
        <polygon points="40,22 22,41 28,30" fill="#312E81" />
        {/* Edges */}
        <g stroke="#1E1B4B" strokeWidth="0.6" strokeLinejoin="round">
          <polygon points="22,3 36,14 40,22 28,30 22,41 16,30 4,22 8,14" fill="none" />
          <line x1="22" y1="3" x2="22" y2="18" />
          <line x1="8" y1="14" x2="22" y2="18" />
          <line x1="36" y1="14" x2="22" y2="18" />
          <line x1="22" y1="18" x2="16" y2="30" />
          <line x1="22" y1="18" x2="28" y2="30" />
          <line x1="16" y1="30" x2="28" y2="30" />
        </g>
      </svg>

      {/* Text */}
      {!iconOnly && (
        <span className="flex items-baseline leading-none" style={{ gap: 4 }}>
          <span
            className="font-bold text-white tracking-tight"
            style={{ fontSize: s.text1 }}
          >
            TESS
          </span>
          <span
            className="font-light text-indigo-400 tracking-wide"
            style={{ fontSize: s.text2 * 0.75 }}
          >
            Technology
          </span>
        </span>
      )}
    </span>
  );
}
