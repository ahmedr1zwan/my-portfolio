// Original vector ornaments inspired by Pakistani floral and textile traditions.
// Reference images are inspiration only; no stock artwork is embedded.
export function FloralMedallion({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 240 240" fill="none" aria-hidden="true" focusable="false">
      {Array.from({ length: 12 }, (_, i) => (
        <g key={i} transform={`rotate(${i * 30} 120 120)`}>
          <path d="M120 119C94 90 92 54 120 24C148 54 146 90 120 119Z" fill={i % 2 ? '#DCA94F' : '#EDC888'} stroke="#F7EFDF" strokeWidth="2" />
          <path d="M120 97C110 74 110 58 120 45C130 58 130 74 120 97Z" fill="#17665F" />
          <path d="M120 14V5M115 10H125" stroke="#DCA94F" strokeWidth="2" />
        </g>
      ))}
      <circle cx="120" cy="120" r="47" fill="#17665F" stroke="#F7EFDF" strokeWidth="3" />
      {Array.from({ length: 8 }, (_, i) => (
        <ellipse key={i} cx="120" cy="98" rx="10" ry="18" fill="#DA7857" stroke="#F7EFDF" strokeWidth="1.5" transform={`rotate(${i * 45} 120 120)`} />
      ))}
      <circle cx="120" cy="120" r="12" fill="#EAC275" stroke="#702F3B" strokeWidth="4" />
    </svg>
  );
}

export function Paisley({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 150 240" fill="none" aria-hidden="true" focusable="false">
      <path d="M20 220C15 179 27 145 60 114C96 80 117 55 98 14C151 57 157 114 125 165C101 203 57 217 20 220Z" fill="#DA7857" stroke="#F1CD86" strokeWidth="3" />
      <path d="M32 204C34 170 57 145 81 121C106 97 117 77 113 57C144 116 114 184 32 204Z" fill="#17665F" stroke="#F7EFDF" strokeWidth="2" />
      <path d="M44 190Q103 163 115 102" stroke="#F1CD86" strokeWidth="3" />
      <path d="M71 174Q41 156 61 148Q80 148 71 174M89 153Q116 153 112 135Q94 130 89 153" fill="#DCA94F" />
      <g transform="translate(85 119)">
        {[0, 60, 120, 180, 240, 300].map(angle => <ellipse key={angle} cx="0" cy="-10" rx="6" ry="10" fill="#F7EFDF" transform={`rotate(${angle})`} />)}
        <circle r="6" fill="#DA7857" />
      </g>
    </svg>
  );
}

export function WovenBorder() {
  return <div className="woven-border" aria-hidden="true" />;
}
