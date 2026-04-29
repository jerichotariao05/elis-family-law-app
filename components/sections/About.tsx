"use client";

import { FormEvent, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!name.trim() || !email.trim()) {
      setError("Please fill in both fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setSuccess("Thanks for subscribing!");
    setName("");
    setEmail("");
  };

  return (
    <section className="bg-[#F4EFEC] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl lg:grid-cols-3 lg:gap-12">
        <div className="space-y-2 text-[#272421] lg:col-span-2">
          <p className="tracking-[0.2em] uppercase text-[#523F3F]">
            Newsletter Signup
          </p>
          <h2
            className={`${cormorantGaramond.className} text-4xl leading-tight text-[#272421] italic sm:text-5xl`}
          >
            Ex Files featuring
            <span className="pl-2 text-law-gold">Pour Decisions</span>
          </h2>
          <ul
            className={`${cormorantGaramond.className} list-disc space-y-1 pl-6 text-lg`}
          >
            <li>Stay up to date on changes in North Carolina law</li>
            <li>
              Get specialist legal insights to your most pressing family law
              questions
            </li>
            <li>
              Access exclusive guides and resources you won&apos;t find anywhere
              else
            </li>
          </ul>
          <p className={`${cormorantGaramond.className} text-[#16191F] italic`}>
            And for a fun twist: don&apos;t miss our &ldquo;Pour
            Decisions&rdquo; section, featuring wine tips from our lawyer-wine
            specialist Deer Designer!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-4 lg:col-span-1"
        >
          <label htmlFor="newsletter-name" className="sr-only">
            Enter your name
          </label>
          <input
            id="newsletter-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your Name"
            className="h-13 border border-[#D4D0CC] bg-white px-4 text-[#272421] placeholder:text-[#8A847F] focus:border-law-gold focus:outline-none"
          />

          <label htmlFor="newsletter-email" className="sr-only">
            Enter your email
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your Email"
            className="h-13 border border-[#D4D0CC] bg-white px-4 text-[#272421] placeholder:text-[#8A847F] focus:border-law-gold focus:outline-none"
          />

          <button
            type="submit"
            className="h-13 bg-law-gold text-sm font-medium tracking-[0.2em] text-[#16191F] uppercase transition-opacity hover:opacity-90"
          >
            Subscribe Now
          </button>

          {error ? (
            <p className="text-sm text-red-700" role="alert">
              {error}
            </p>
          ) : null}
          {success ? (
            <p className="text-sm text-emerald-700" role="status">
              {success}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
