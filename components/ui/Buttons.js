import Link from "next/link";

export function BtnPrimary({ href, children, className = "", ariaLabel, external = true }) {
  const classes = `inline-flex items-center gap-2 rounded-[var(--radius)] bg-flow-text px-10 py-[0.9rem] font-body text-[0.9375rem] font-medium text-bg transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

export function BtnGhost({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`mt-[7%] inline-flex items-center gap-1.5 border-b border-border-dark pb-px font-body text-[1.1rem] font-normal text-flow-muted transition-colors hover:border-flow-text hover:text-flow-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent max-md:mt-[var(--space-xs)] max-md:text-[0.78rem] ${className}`}
    >
      {children}
    </Link>
  );
}
