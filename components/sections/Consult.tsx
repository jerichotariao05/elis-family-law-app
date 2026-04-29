import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import arrowSvg from "@/public/arrow.svg";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

function Step({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex size-20 items-center justify-center rounded-full bg-[#16191F] border-2 border-law-gold">
        <span
          className={`${cormorantGaramond.className} text-4xl font-medium text-law-gold`}
        >
          {index}
        </span>
      </div>
      <p className="mt-3 tracking-[0.35em] uppercase text-[#272421]">{title}</p>
    </div>
  );
}

export default function Consult() {
  return (
    <section className="bg-[#F4EFEC] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h2
          className={`${cormorantGaramond.className} text-center text-3xl leading-tight italic text-[#272421] sm:text-4xl`}
        >
          Close Attention To What You Need
        </h2>

        <div className="mx-auto mt-12 flex flex-col md:flex-row max-w-3xl items-center justify-center gap-10">
          <Step index="01" title="CONSULT" />
          <div className="relative flex w-16 items-center justify-center">
            <Image
              src={arrowSvg}
              alt=""
              width={60}
              height={16}
              className="absolute right-0 -translate-y-1/2 h-4 w-auto"
            />
          </div>
          <Step index="02" title="MATCH" />
          <div className="relative flex w-16 items-center justify-center">
            <Image
              src={arrowSvg}
              alt=""
              width={60}
              height={16}
              className="absolute right-0 -translate-y-1/2 h-4 w-auto"
            />
          </div>
          <Step index="03" title="ADVOCATE" />
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center text-[#272421]">
          <p className="text-sm leading-relaxed sm:text-base">
            When you have your first consultation with our firm, you will
            personally speak with Deer Designer or another senior level attorney
            to tell your story. From there, you will work with one lawyer for
            the duration of your case. You will not get passed to a junior
            associate or be lost in the shuffle.
          </p>

          <p className="mt-6 text-sm leading-relaxed sm:text-base">
            We take care to match you with the attorney at our firm who can be
            of the most help in your unique situation. We respect that this is
            your life, and what happens now can have cascading effects in the
            future. We aim to ensure that you can face the future from a
            position of strength and hope.
          </p>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-law-gold text-[#16191F] uppercase tracking-wide rounded-none whitespace-normal py-2 px-10"
            >
              <Link href="#" className="flex items-center justify-center gap-3">
                <span>Learn more about us</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
