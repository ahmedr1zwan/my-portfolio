export default function MarkerLink({ href, children }) {
  return (
    <a className="marker-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <svg className="marker-underline" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M2 6.6C19 4.9 33 6.1 48 4.6S79 2.7 96 3.8L99 5.9C81 5.1 66 6.3 49 7.7S18 7.7 3 9Z" fill="currentColor" opacity=".85" />
        <path d="M5 9.6C30 8 52 9.5 76 6.9L95 6" fill="none" stroke="currentColor" strokeWidth=".7" strokeLinecap="round" opacity=".5" />
      </svg>
    </a>
  );
}
