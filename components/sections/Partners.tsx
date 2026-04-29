import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import amandaImage from "@/public/amanda.jpg";
import deerDesignerImage from "@/public/deer-designer.jpg";
import autumnImage from "@/public/autumn.jpg";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const partners = [
  {
    name: "DEER DESIGNER",
    role: "Managing Partner",
    image: deerDesignerImage,
  },
  {
    name: "AMANDA C. KNIGHT",
    role: "Partner",
    image: amandaImage,
  },
  {
    name: "AUTUMN D. OSBOURNE",
    role: "Partner",
    image: autumnImage,
  },
] as const;

export default function Partners() {
  return (
    <section className="bg-[#F4EFEC] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <header className="text-center">
          <h2
            className={`${cormorantGaramond.className} text-4xl italic text-[#272421] sm:text-5xl`}
          >
            Meet Our Partners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#523F3F] sm:text-base">
            Get to know the experienced leaders guiding our firm with
            <span className="hidden sm:inline"> strength, strategy,</span> and a
            commitment to exceptional client service.
          </p>
        </header>

        <div className="mt-14 flex flex-col justify-center items-center gap-8 sm:flex-row sm:gap-6">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="relative h-[370.61px] w-[278.89px] overflow-hidden rounded-[10.7px] shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                priority={false}
              />

              <div
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(22,25,31,0.88)_0%,rgba(22,25,31,0.40)_38%,rgba(22,25,31,0.18)_66%,rgba(22,25,31,0.06)_100%)]"
                aria-hidden
              />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-sm font-medium tracking-[0.25em] uppercase text-[#FFFEFC]">
                  {partner.name}
                </p>
                <p className="mt-2 text-sm italic text-law-gold">
                  {partner.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-law-gold text-[#16191F] uppercase tracking-[0.2em] rounded-none hover:opacity-90"
          >
            <Link href="#" className="flex items-center gap-3 px-10">
              Meet all attorneys <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
