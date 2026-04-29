import Link from "next/link";
import Image from "next/image";
import deerLogo from "@/public/deer-logo.png";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

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

const QUICK_LINKS = [
  { href: "#", label: "About Us" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Testimonials" },
  { href: "#", label: "Resources" },
  { href: "#", label: "Contact" },
  { href: "#", label: "Schedule a Consultation" },
] as const;

const FAMILY_LAW = [
  { href: "#", label: "Divorce" },
  { href: "#", label: "High-Asset Divorce" },
  { href: "#", label: "Child Custody" },
  { href: "#", label: "Child Support" },
  { href: "#", label: "Property Division" },
  { href: "#", label: "Spousal Support" },
  { href: "#", label: "Prenuptial Agreements" },
  { href: "#", label: "Domestic Violence" },
] as const;

const ESTATE_PLANNING = [
  { href: "#", label: "Will and Trust" },
  { href: "#", label: "Power of Attorney" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-t-[#C49E7833] bg-[#16191F] text-[#FFFEFC]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
            <Image
              src={deerLogo}
              alt="Deer logo"
              width={129}
              height={129}
              loading="lazy"
            />

            <div className="mt-5 flex items-center gap-4">
              {SOCIAL.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full border border-law-gold/45 text-law-gold transition-colors hover:border-law-gold hover:bg-white/5"
                  aria-label={label}
                >
                  <Icon className="size-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-medium tracking-[0.2em] text-law-gold uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href + label}>
                  <Link
                    href={href}
                    className="text-sm tracking-wide text-[#FFF7F099] uppercase transition-colors hover:text-law-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-medium tracking-[0.2em] text-law-gold uppercase">
              Family Law
            </h3>
            <ul className="mt-4 space-y-2">
              {FAMILY_LAW.map(({ href, label }) => (
                <li key={href + label}>
                  <Link
                    href={href}
                    className="text-sm tracking-wide text-[#FFF7F099] uppercase transition-colors hover:text-law-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-medium tracking-[0.2em] text-law-gold uppercase">
              Estate Planning
            </h3>
            <ul className="mt-4 space-y-2">
              {ESTATE_PLANNING.map(({ href, label }) => (
                <li key={href + label}>
                  <Link
                    href={href}
                    className="text-sm tracking-wide text-[#FFF7F099] uppercase transition-colors hover:text-law-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-[#C49E7833]" />
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 justify-center items-center md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#FFF7F099]">
            <Link href="#" className="hover:text-law-gold">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-law-gold">
              Disclaimer
            </Link>
          </div>

          <div className="text-[#FFF7F099]">
            &copy; Deer Designer Family Law, PLLC.
          </div>

          <div className="text-[#FFF7F099]">Designed by Second Click Media</div>
        </div>
      </div>
    </footer>
  );
}
