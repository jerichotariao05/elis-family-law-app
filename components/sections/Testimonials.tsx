"use client";

import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import quoteSvg from "@/public/quote.svg";
import blankProfileSvg from "@/public/blank-image.png";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type TestimonialCategory =
  | "family"
  | "divorce"
  | "child_custody"
  | "domestic_violence";

type Testimonial = {
  quote: string;
  name: string;
  descriptor: string;
};

const categories: Array<{
  value: TestimonialCategory;
  label: string;
}> = [
  { value: "family", label: "FAMILY" },
  { value: "divorce", label: "DIVORCE" },
  { value: "child_custody", label: "CHILD CUSTODY" },
  { value: "domestic_violence", label: "DOMESTIC VIOLENCE" },
];

const testimonialsByCategory: Record<TestimonialCategory, Testimonial[]> = {
  family: [
    {
      quote:
        "Autumn Osbourne offered top-notch counsel and legal support during a difficult, high-conflict divorce. She consistently kept us focused on what mattered most and handled every detail with confidence.",
      name: "Mary",
      descriptor: "Placeholder",
    },
    {
      quote:
        "We highly recommend the legal services of attorney Buckley. Attorney Buckley has represented us in every difficult family issue, and our experience has been nothing short of excellent.",
      name: "David and Pam",
      descriptor: "Placeholder",
    },
    {
      quote:
        "Professional, compassionate, and thorough. The team explained each step clearly and helped us feel prepared for every outcome.",
      name: "Jordan",
      descriptor: "Placeholder",
    },
    {
      quote:
        "From first consultation to final resolution, the firm demonstrated strong advocacy and practical guidance throughout our case.",
      name: "Taylor",
      descriptor: "Placeholder",
    },
  ],
  divorce: [
    {
      quote:
        "We felt supported from day one. The attorney was strategic, responsive, and guided us through decisions with clarity and care.",
      name: "Alex",
      descriptor: "Placeholder",
    },
    {
      quote:
        "The process was stressful, but the team made it manageable. They fought for our goals and ensured we understood every option.",
      name: "Morgan",
      descriptor: "Placeholder",
    },
    {
      quote:
        "Strong legal representation with real empathy. We trusted the advice and are grateful for the outcome.",
      name: "Casey",
      descriptor: "Placeholder",
    },
    {
      quote:
        "Thoughtful strategy, clear communication, and a results-focused approach. Exactly what we needed during a major life transition.",
      name: "Riley",
      descriptor: "Placeholder",
    },
  ],
  child_custody: [
    {
      quote:
        "Attorney advocacy focused on stability for our child. The strategy was practical and the updates were always clear and timely.",
      name: "Mia",
      descriptor: "Placeholder",
    },
    {
      quote:
        "We appreciated the calm, focused guidance. The firm helped us build a plan that put our child first.",
      name: "Noah",
      descriptor: "Placeholder",
    },
    {
      quote:
        "Every meeting was well-prepared and explained in plain language. We felt confident navigating the process.",
      name: "Emma",
      descriptor: "Placeholder",
    },
    {
      quote:
        "The team demonstrated deep understanding of child-focused custody considerations and provided strong representation.",
      name: "Liam",
      descriptor: "Placeholder",
    },
  ],
  domestic_violence: [
    {
      quote:
        "Safety was the priority, and the attorney moved with urgency while staying professional and compassionate.",
      name: "Samantha",
      descriptor: "Placeholder",
    },
    {
      quote:
        "The firm helped us take next steps without confusion or delays. We felt supported throughout the process.",
      name: "Chris",
      descriptor: "Placeholder",
    },
    {
      quote:
        "Clear guidance, steady advocacy, and excellent follow-through. We’re grateful for the care and expertise.",
      name: "Olivia",
      descriptor: "Placeholder",
    },
    {
      quote:
        "The team was decisive and compassionate. They made sure we understood our options and felt protected.",
      name: "Ethan",
      descriptor: "Placeholder",
    },
  ],
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex min-h-[320px] flex-col  items-center rounded-xl border border-[#FFFFFF1F] bg-linear-to-br from-[#FFFFFF12] to-[#FFFFFF05] p-6 shadow-[0_12px_24px_rgba(0,0,0,0.2)]">
      <Image src={quoteSvg} alt="Quote" width={45} height={45} />
      <p
        className={`${cormorantGaramond.className} mt-5 flex-1 text-xl leading-relaxed text-[#C8C4C0]`}
      >
        {testimonial.quote}
      </p>

      <div className="mt-6 flex justify-between items-center gap-4">
        <Image
          src={blankProfileSvg}
          alt="Blank Profile"
          width={40}
          height={40}
          className="rounded-full border-2 border-law-gold"
        />
        <div className="flex flex-col">
          <p className="text-law-gold font-medium uppercase tracking-[0.25em]">
            {testimonial.name}
          </p>
          <p className="mt-1 text-xs italic tracking-[0.2em] text-[#FFF7F099]">
            {testimonial.descriptor}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const pageSize = 2;

  function chunkPairs(arr: Testimonial[]) {
    const slides: Testimonial[][] = [];
    for (let i = 0; i < arr.length; i += pageSize) {
      slides.push(arr.slice(i, i + pageSize));
    }
    return slides.length ? slides : [[]];
  }

  return (
    <section className="bg-[#16191F] px-6 py-14 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <header className="text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#73695F]">
            Testimonials
          </p>
          <h2
            className={`${cormorantGaramond.className} mt-1 text-center text-4xl text-[#FFFEFC] italic sm:text-5xl`}
          >
            Hear What Our Clients Have to Say
          </h2>
        </header>

        <div className="mt-8">
          <Tabs defaultValue="family">
            <TabsList className="mx-auto flex w-fit flex-wrap justify-center gap-3 !bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="rounded-full border border-[#FFFFFF1F] bg-transparent px-5 py-1.5 text-xs tracking-[0.2em] uppercase text-[#73695F] transition-colors hover:border-[#C49E78]/60 hover:text-[#C49E78] data-[state=active]:border-[#C49E78] data-[state=active]:bg-[#C49E78] data-[state=active]:text-[#16191F]"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => {
              const slides = chunkPairs(testimonialsByCategory[category.value]);

              return (
                <TabsContent
                  key={category.value}
                  value={category.value}
                  className="mt-10"
                >
                  <Carousel className="relative mt-8">
                    <CarouselContent>
                      {slides.map((pair, idx) => (
                        <CarouselItem key={`${category.value}-slide-${idx}`}>
                          <div className="grid gap-6 px-10 md:px-8 md:grid-cols-2">
                            {pair.map((testimonial) => (
                              <TestimonialCard
                                key={`${category.value}-${testimonial.name}-${testimonial.quote}`}
                                testimonial={testimonial}
                              />
                            ))}

                            {pair.length < pageSize
                              ? Array.from({
                                  length: pageSize - pair.length,
                                }).map((_, missingIdx) => (
                                  <div
                                    key={`placeholder-${missingIdx}`}
                                    className="min-h-[320px] rounded-xl border border-transparent bg-transparent"
                                    aria-hidden
                                  />
                                ))
                              : null}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <CarouselPrevious
                      className="top-1/2 -left-4 -translate-y-1/2 !bg-[#FFFFFF08] !border-[#FFFFFF1F] !text-[#DCC8B0] hover:!bg-[#FFFFFF12]"
                      aria-label="Previous testimonials"
                    />
                    <CarouselNext
                      className="top-1/2 -right-4 -translate-y-1/2 !bg-[#FFFFFF08] !border-[#FFFFFF1F] !text-[#DCC8B0] hover:!bg-[#FFFFFF12]"
                      aria-label="Next testimonials"
                    />
                  </Carousel>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#C49E78] text-[#16191F] uppercase tracking-[0.2em] rounded-none hover:opacity-90"
          >
            <Link href="#">
              Read More Testimonials{" "}
              <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
