import { useEffect, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export default function CollapsibleSection({ id, title, children }) {
  const sectionRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    let frame;
    const openFromHash = () => {
      if (window.location.hash !== `#${id}`) return;
      detailsRef.current.open = true;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => sectionRef.current.scrollIntoView());
    };
    // Open before the browser follows a link, including repeated same-hash clicks.
    const openFromLink = (event) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('a');
      if (link?.getAttribute('href') === `#${id}`) detailsRef.current.open = true;
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    document.addEventListener('click', openFromLink);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('hashchange', openFromHash);
      document.removeEventListener('click', openFromLink);
    };
  }, [id]);

  return (
    <section ref={sectionRef} id={id} className="collapsible-section" aria-labelledby={`${id}-title`}>
      <details ref={detailsRef} className="section-disclosure">
        <summary className="section-toggle">
          <h2 id={`${id}-title`}>{title}</h2>
          <FiChevronDown className="section-chevron" aria-hidden="true" />
        </summary>
        <div className="section-content">{children}</div>
      </details>
    </section>
  );
}
