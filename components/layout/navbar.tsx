import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/public/deerdesigner.png";
import Image from "next/image";
import { MobileMenu } from "./mobile-menu";

const PHONE_DISPLAY = "919-626-9148";
const PHONE_HREF = "tel:+19196269148";

const SOCIAL = [
  {
    href: "#",
    label: "Facebook",
    Icon: FaFacebookF,
  },
  {
    href: "#",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: "#",
    label: "YouTube",
    Icon: FaYoutube,
  },
] as const;

const NAV_LINKS = [
  { href: "#", label: "About" },
  { href: "#", label: "Family Law" },
  { href: "#", label: "Estate Planning" },
  { href: "#", label: "Testimonials" },
  { href: "#", label: "Resources" },
  { href: "#", label: "Contact" },
] as const;

function TopBar() {
  return (
    <div className="border-b border-b-[#C49E7833] bg-[#12161E]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {SOCIAL.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex size-6 items-center justify-center rounded-full border border-law-gold/45 text-law-gold transition-colors",
                "hover:border-law-gold hover:bg-white/5"
              )}
              aria-label={label}
            >
              <Icon className="size-3.5" aria-hidden />
            </a>
          ))}
        </div>
        <a
          href={PHONE_HREF}
          className="text-sm tracking-wide text-law-gold transition-colors hover:text-law-gold/90"
        >
          CALL
          <span className="text-[#FFF7F099] pl-2">{PHONE_DISPLAY}</span>
        </a>
      </div>
    </div>
  );
}

const ctaClassName =
  "border-law-gold text-law-gold bg-transparent uppercase tracking-wide rounded-none hover:bg-law-gold hover:text-white";

function MainNav() {
  return (
    <div className="border-b border-b-[#C49E7833] bg-[#16191F]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/">
          <Image src={logo} alt="deerdesigner" width={177} height={35} />
        </Link>

        <nav
          className="hidden flex-1 justify-center px-2 md:flex"
          aria-label="Primary"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 lg:gap-x-8">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[0.875rem] font-medium tracking-wide text-[#FFFEFC] uppercase transition-colors hover:text-law-gold lg:text-[0.8rem]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 md:block">
          <Button variant="outline" size="sm" asChild className={ctaClassName}>
            <Link href="#">Schedule a consultation</Link>
          </Button>
        </div>

        <MobileMenu links={NAV_LINKS} className="shrink-0" />
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 shadow-md shadow-black/20">
      <TopBar />
      <MainNav />
    </header>
  );
}
