"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavLink = { href: string; label: string };

export function MobileMenu({
  links,
  className,
}: {
  links: readonly NavLink[];
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <div className={cn("md:hidden", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        className={cn(
          "inline-flex items-center justify-center",
          "rounded-sm text-law-gold",
          "h-9 w-9 transition-colors hover:bg-white/5"
        )}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open ? (
        <div
          className={cn(
            "fixed inset-0 z-60 bg-[#12161E]/85 backdrop-blur-sm",
            "pt-[calc(env(safe-area-inset-top)+1rem)]"
          )}
        >
          <div className="mx-auto flex h-full max-w-7xl flex-col px-6 pb-10">
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className={cn(
                  "inline-flex items-center justify-center",
                  "rounded-sm text-law-gold",
                  "h-9 w-9 transition-colors hover:bg-white/5"
                )}
              >
                <X className="size-5" />
              </button>
            </div>

            <nav
              aria-label="Mobile primary"
              className="flex flex-1 flex-col items-center justify-center gap-7 text-center"
            >
              {links.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-base font-semibold tracking-[0.14em] uppercase text-[#FFFEFC]",
                    "transition-colors hover:text-law-gold"
                  )}
                >
                  {label}
                </Link>
              ))}

              <Link
                href="#"
                onClick={() => setOpen(false)}
                className={cn(
                  "mt-3 inline-flex items-center justify-center",
                  "border border-law-gold bg-transparent px-6 py-3",
                  "text-sm font-semibold uppercase tracking-wide text-law-gold",
                  "transition-colors hover:bg-law-gold hover:text-white"
                )}
              >
                Schedule a consultation
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
