export function SectionLabel({ children }) {
  return (
    <p className="mb-[var(--space-sm)] font-body text-[0.7rem] font-medium uppercase tracking-[0.14em] text-teal">
      {children}
    </p>
  );
}

export function SectionHeading({ id, children, className = "" }) {
  return (
    <h2
      id={id}
      className={`font-display mb-[var(--space-lg)] text-[clamp(2rem,4.5vw,3.75rem)] font-normal italic leading-[1.1] tracking-[-0.02em] text-flow-text [&_em]:not-italic [&_em]:text-accent ${className}`}
    >
      {children}
    </h2>
  );
}
