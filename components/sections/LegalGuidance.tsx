import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";
import type { ReactNode } from "react";
import separationIcon from "@/public/separation.svg";
import highAssetIcon from "@/public/high-asset.svg";
import childCustodyIcon from "@/public/child-custody.svg";
import childSupportIcon from "@/public/child-support.svg";
import propertyIcon from "@/public/property.svg";
import prenuptalIcon from "@/public/prenuptal.svg";
import estateIcon from "@/public/estate.svg";
import domesticIcon from "@/public/domestic.svg";
import { FaRegHeart } from "react-icons/fa";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const guidanceCards: Array<{
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}> = [
  {
    title: "Divorce & Separation",
    description:
      "Steady, strategic guidance through divorce, with a focus on protecting your future at every stage.",
    href: "#",
    icon: (
      <Image
        src={separationIcon}
        alt="Divorce and separation icon"
        className="h-8 w-8"
      />
    ),
  },
  {
    title: "High-Asset Divorce",
    description:
      "Sophisticated representation for divorces involving substantial assets, complex finances, and long-term financial interests.",
    href: "#",
    icon: (
      <Image
        src={highAssetIcon}
        alt="High-asset divorce icon"
        className="h-8 w-8"
      />
    ),
  },
  {
    title: "Child Custody",
    description:
      "Thoughtful advocacy for parenting arrangements that protect your children and preserve what matters most.",
    href: "#",
    icon: (
      <Image
        src={childCustodyIcon}
        alt="Child custody icon"
        className="h-8 w-8"
      />
    ),
  },
  {
    title: "Child Support",
    description:
      "Clear, informed guidance on establishing, modifying, and enforcing child support with care and precision.",
    href: "#",
    icon: (
      <Image
        src={childSupportIcon}
        alt="Child support icon"
        className="h-8 w-8"
      />
    ),
  },
  {
    title: "Property Division",
    description:
      "Strategic counsel for dividing assets and debits in a way that safeguards your financial future.",
    href: "#",
    icon: (
      <Image
        src={propertyIcon}
        alt="Property division icon"
        className="h-8 w-8"
      />
    ),
  },
  {
    title: "Spousal Support",
    description:
      "Experienced representation in alimony matters involving lifestyle, earning capacity, and long-term stability.",
    href: "#",
    icon: <FaRegHeart className="h-8 w-8 text-[#C49E78]" aria-hidden />,
  },
  {
    title: "Prenuptial Agreements",
    description:
      "Carefully crafted agreements designed to protect assets, set clear expectations, and support peace of mind.",
    href: "#",
    icon: (
      <Image
        src={prenuptalIcon}
        alt="Prenuptial agreements icon"
        className="h-8 w-8"
      />
    ),
  },
  {
    title: "Estate Planning",
    description:
      "Personalized estate planning services to help you protect your wishes, your assets, and the people you love.",
    href: "#",
    icon: (
      <Image src={estateIcon} alt="Estate planning icon" className="h-8 w-8" />
    ),
  },
  {
    title: "Domestic Violence",
    description:
      "Compassionate, decisive legal support when your safety, stability, and next steps cannot wait.",
    href: "#",
    icon: (
      <Image
        src={domesticIcon}
        alt="Domestic violence icon"
        className="h-8 w-8"
      />
    ),
  },
];

export default function LegalGuidance() {
  return (
    <section className="bg-[#16191F] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-center text-xs tracking-[0.2em] uppercase text-[#73695F]">
          Deer Designer Family Practice Areas
        </p>
        <h2
          className={`${cormorantGaramond.className} mt-1 text-center text-4xl text-[#FFFEFC] italic sm:text-5xl`}
        >
          Legal Guidance For Every Step Forward
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {guidanceCards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[320px] flex-col rounded-xl border border-[#FFFFFF1F] bg-linear-to-br from-[#FFFFFF12] to-[#FFFFFF05] p-6 shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
            >
              {card.icon}
              <h3 className="mt-4 text-xl text-[#DCC8B0] uppercase">
                {card.title}
              </h3>
              <p
                className={`${cormorantGaramond.className} mt-3 flex-1 text-xl leading-relaxed text-[#C8C4C0]`}
              >
                {card.description}
              </p>
              <Link
                href={card.href}
                className="mt-auto inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-[#B59A80] transition-colors hover:text-[#D2B496]"
              >
                Learn More <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
