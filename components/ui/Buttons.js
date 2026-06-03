"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV_H = 64;

function getOffsetTop(el) {
  let top = 0;
  while (el) {
    top += el.offsetTop;
    el = el.offsetParent;
  }
  return top;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  requestAnimationFrame(() => {
    window.scrollTo({ top: getOffsetTop(el) - NAV_H, behavior: "smooth" });
  });
}

export function BtnPrimary({ href, children, className = "", ariaLabel, external = true }) {
  const classes = `inline-flex items-center gap-2 rounded-[var(--radius)] bg-blue px-10 py-[0.9rem] font-body text-[0.9375rem] font-medium text-white transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-blue ${className}`;

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
  const pathname = usePathname();
  const router = useRouter();
  const isHash = href.includes("#");

  const handleClick = (e) => {
    e.preventDefault();
    const id = href.split("#")[1];

    if (pathname === "/") {
      scrollToSection(id);
      window.history.replaceState(null, "", "/#" + id);
    } else {
      sessionStorage.setItem("navScrollTo", id);
      router.push("/");
    }
  };

  const classes = `mt-[7%] inline-flex items-center gap-1.5 border-b border-border-dark pb-px font-body text-[1.1rem] font-normal text-flow-muted transition-colors hover:border-flow-text hover:text-flow-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent max-md:mt-[var(--space-xs)] max-md:text-[0.78rem] ${className}`;

  if (isHash) {
    return (
      <a href={href} onClick={handleClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
