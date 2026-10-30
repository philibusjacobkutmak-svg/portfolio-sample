
"use client";

import { useState } from "react";

export default function Home() {
  // Remember whether the mobile navigation menu is open.
  const [menuOpen, setMenuOpen] = useState(false);

  // Keep the page links in one place so they are easy to update.
  const links = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Use the six images already saved in your project.
  const projects = [
    "/images/philip2.jpeg",
    "/images/philip3.jpeg",
    "/images/philip4.jpeg",

  ];

  // The service names shown on the homepage.
  const services = [
    "Flyer Design",
    "Birthday Designs",
    "Church Flyers",
    "Social Media Graphics",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#10051f] via-[#1b0b35] to-[#090511] text-white">

      {/* Header and navigation links */}
      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 md:px-12">
        <a href="/" className="text-lg font-extrabold tracking-wide sm:text-xl">
          PHILIBUS DESIGN<span className="text-violet-400">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-violet-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="rounded-xl border border-violet-400/40 px-4 py-2 text-xl md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Contact button on larger screens */}
        <a
          href="/contact"
          className="hidden rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold transition hover:bg-violet-400 sm:inline-flex"
        >
          Let's Talk ↗
        </a>

        {/* Dropdown links for phones */}
        {menuOpen && (
          <div className="absolute left-4 right-4 top-full rounded-2xl border border-violet-400/20 bg-[#170b29] p-4 shadow-2xl md:hidden">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-gray-200 transition hover:bg-violet-500/20 hover:text-violet-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero section: introduce your design business */}
      <section className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center px-6 py-20 sm:px-8 md:px-12">
        {/* Soft purple light behind the headline */}
        <div className="pointer-events-none absolute left-1/4 top-1/4 -z-0 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px] sm:h-80 sm:w-80" />

        <p className="relative mb-6 text-xs font-bold uppercase tracking-[0.25em] text-violet-300 sm:text-sm sm:tracking-[0.3em]">
          Graphic Designer · Creative Thinker
        </p>

        <h1 className="relative max-w-5xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-8xl">
          Designs That Make Your Brand{" "}
          <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Stand Out.
          </span>
        </h1>

        <p className="relative mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
          I create bold, beautiful designs that help businesses, churches,
          and individuals bring their ideas to life.
        </p>

        {/* Buttons guide visitors to your work or contact page */}
        <div className="relative mt-9 flex flex-wrap gap-4">
          <a
            href="/portfolio"
            className="rounded-full bg-violet-500 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:bg-violet-400"
          >
            Explore My Work ↗
          </a>
          <a
            href="/contact"
            className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-violet-300 hover:text-violet-300"
          >
            Hire Me
          </a>
        </div>

        <div className="relative mt-16 flex items-center gap-3 text-sm text-gray-400 sm:mt-20">
          <span className="h-px w-12 bg-violet-400" />
          Turning ideas into visual stories
        </div>
      </section>

      {/* Portfolio preview with consistent, elegant image cards */}
      <section className="border-t border-white/10 px-6 py-20 sm:px-8 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300 sm:text-sm">
            Selected Projects
          </p>

          <div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                A Few of My Designs
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                A selection of creative work designed to help ideas stand out
                and connect with the right audience.
              </p>
            </div>

            <a
              href="/portfolio"
              className="shrink-0 font-semibold text-violet-300 transition hover:text-white"
            >
              View All Projects →
            </a>
          </div>

          {/* Each image is shown without cropping the design */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((image, index) => (
              <a
                key={image}
                href="/portfolio"
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-white/[0.07]"
              >
                <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl bg-[#0d0717]">
                  <img
                    src={image}
                    alt={`Graphic design portfolio sample ${index + 1}`}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="px-2 pb-1 pt-4 text-sm font-medium text-gray-300">
                  Design Project {String(index + 1).padStart(2, "0")}
                  <span className="float-right text-violet-300">↗</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview with a link to the full services page */}
      <section className="border-t border-white/10 px-6 py-20 sm:px-8 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300 sm:text-sm">
            What I Do
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            Creative Services
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            Thoughtful designs for businesses, churches, special occasions,
            and growing brands.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <a
                key={service}
                href="/services"
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/10"
              >
                <span className="text-sm font-bold text-violet-300">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{service}</h3>
                <p className="mt-3 text-sm text-gray-400">
                  Explore this service →
                </p>
              </a>
            ))}
          </div>

          <a
            href="/services"
            className="mt-8 inline-flex rounded-full border border-violet-400/40 px-6 py-3 font-semibold transition hover:bg-violet-500/20"
          >
            See Services & Prices →
          </a>
        </div>
      </section>



      {/* Final contact invitation */}
      <section className="border-t border-white/10 px-6 py-20 text-center sm:px-8 md:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300 sm:text-sm">
          Let's Create Together
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl md:text-6xl">
          Have a project in mind?
        </h2>
        <p className="mt-5 text-gray-300">
          Let's turn your idea into something beautiful.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-violet-500 px-8 py-4 font-semibold transition hover:-translate-y-1 hover:bg-violet-400"
        >
          Let's Talk About Your Project ↗
        </a>
      </section>

      {/* Simple footer without distracting scrolling text */}
      <footer className="border-t border-white/10 px-6 py-8 text-sm text-gray-400 sm:px-8 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <p>
          © 2026 Philibus Design. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition hover:text-violet-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
