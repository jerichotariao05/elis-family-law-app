import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { ArrowRightIcon } from "lucide-react";
import familyImage from "@/public/family.jpg";
import rightVector from "@/public/Vector_1.svg";
import leftVector from "@/public/Vector.svg";
import { Button } from "../ui/button";
import Link from "next/link";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <Image
        src={familyImage}
        alt="Family outdoors together"
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-linear-to-b from-[#16191F]/90 via-[#16191F]/60 to-[#16191F]/90"
        aria-hidden
      />
      <Image
        src={leftVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 z-1 hidden -translate-y-1/2 lg:block scale-105"
      />
      <Image
        src={rightVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 z-1 hidden -translate-y-1/2 lg:block scale-105"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-8 rounded-lg border border-[#FFFFFF1A] bg-[#FFFFFF12] p-10 text-center">
          <h1
            className={`${cormorantGaramond.className} text-3xl md:text-4xl lg:text-[4.5rem] text-[#FFFEFC] italic text-center`}
          >
            Your Future
            <span
              className={`${cormorantGaramond.className} text-[#C49E78] pl-2 text-3xl md:text-4xl lg:text-[4.5rem]`}
            >
              Starts Here
            </span>
          </h1>
          <p
            className={`${cormorantGaramond.className} text-[1.25rem] text-center text-[#FFFEFC] px-10`}
          >
            Divorce & Family Law Attorneys Serving Durham, Raleigh, Cary, the
            Triangle, and Throughout North Carolina.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-[1.25rem] text-center text-law-gold">
              ★ Led By Board Certified Specialists In Family Law ★
            </p>
            <div className="flex w-full flex-col justify-center gap-4 px-10 md:flex-row">
              <Button
                asChild
                size="lg"
                className="h-13.5 w-full bg-law-gold text-[#16191F] uppercase tracking-wide rounded-none md:flex-1"
              >
                <Link
                  href="#"
                  className="inline-flex w-full items-center justify-center gap-2"
                >
                  Call now <ArrowRightIcon />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="h-13.5 w-full border border-[#FFFEFC] bg-transparent text-[#FFFEFC] uppercase tracking-wide rounded-none md:flex-1"
              >
                <Link
                  href="#"
                  className="inline-flex w-full items-center justify-center"
                >
                  Schedule a consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
