import Image from "next/image";

import locationPinSvg from "@/public/location.svg";
import blankProfileSvg from "@/public/blank-image.png";

const offices = [
  {
    title: "Durham Office",
    address: ["3515 Shannon Road Suite 150", "Durham, NC, 27707"],
  },
  {
    title: "Cary Office",
    address: ["201 Shannon Oaks Circle Suite 100", "Cary, NC, 27511"],
  },
  {
    title: "Wake Forest Office",
    address: ["1740 Heritage Center Drive Suite", "202 Wake Forest, NC, 27587"],
  },
  {
    title: "Pittsboro Office",
    address: ["27 Hillsboro Street Pittsboro,", "NC, 27312"],
  },
] as const;

export default function Locations() {
  return (
    <section className="relative overflow-hidden border-t border-t-[#C49E7833] bg-[#16191F] px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office) => (
            <article
              key={office.title}
              className="flex flex-col items-center text-center border-b border-[#FFFFFF1F] last:border-b-0 md:border-b-0 lg:border-r lg:last:border-r-0 px-6 py-8"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={locationPinSvg}
                  alt=""
                  aria-hidden
                  width={50}
                  height={50}
                  className="h-auto w-auto"
                />

                <h3 className="mt-3 font-medium tracking-[0.2em] uppercase text-[#FFFEFC]">
                  {office.title}
                </h3>
                <address className="mt-2 not-italic leading-relaxed text-[#FFFEFC]">
                  {office.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div className="mx-auto mt-5 w-full max-w-[220px] bg-[#FFFEFC]">
                <Image
                  src={blankProfileSvg}
                  alt="Office photo placeholder"
                  className="h-[120px] w-full object-contain rounded-none"
                  width={220}
                  height={120}
                  priority={false}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
