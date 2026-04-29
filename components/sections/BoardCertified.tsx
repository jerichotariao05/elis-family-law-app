import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import artboard from "@/public/artboard.png";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function BoardCertified() {
  return (
    <section className="bg-[#F4EFEC] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl lg:grid-cols-2 lg:gap-12">
        <div className="flex items-center justify-center">
          <div className="w-full ">
            <Image
              src={artboard}
              alt="Board certified family law specialists badge"
              className="h-auto w-full hidden lg:block max-w-[410px]"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-4 text-[#272421]">
          <div className="text-center lg:text-left">
            <h2
              className={`${cormorantGaramond.className} text-3xl leading-tight italic sm:text-4xl`}
            >
              Caring Representation Led By
            </h2>

            <h2
              className={`${cormorantGaramond.className} text-3xl text-law-gold leading-tight italic sm:text-4xl`}
            >
              Board-Certified Specialists
            </h2>
          </div>

          <p className="text-base leading-relaxed text-[#272421] sm:text-lg">
            When you are facing a divorce or another family law challenge in the
            Triangle area, it can seem like the world is falling apart around
            you. At Deer Designer Family Law, P.L.L.C., we understand the
            turmoil you are going through, and we are committed to guiding you
            toward the best resolution possible.
          </p>

          <p className="text-base leading-relaxed text-[#272421] sm:text-lg">
            Our team of attorneys is led by Gray Deer Designer and Autumn
            Osbourne, both specialists with a board certification in family law
            from the North Carolina State Board of Legal Specialization, and
            included other board-certified family law specialists as well. You
            can count on our depth of experience and dedication to excellence to
            help you through this difficult time.
          </p>

          <div className="pt-2">
            <Button
              asChild
              size="lg"
              className="h-full w-full bg-law-gold text-[#16191F] uppercase tracking-wide rounded-none md:flex-1 whitespace-normal py-2"
            >
              <Link
                href="#"
                className="flex w-full flex-wrap items-center justify-center gap-2 whitespace-normal text-center"
              >
                What does it mean to be a certified family law specialist?{" "}
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
