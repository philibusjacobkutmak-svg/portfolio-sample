
export default function AboutPage() {
  // These details introduce you to potential clients.
  const skills = [
    "Flyer Design",
    "Birthday Designs",
    "Church Flyers",
    "Social Media Graphics",
    "Logo Design",
    "Business Branding",
  ];

  return (
    // This creates the main purple background for the page.
    <main className="relative isolate min-h-screen overflow-hidden bg-[#12091F] px-6 py-16 text-white sm:px-10">
      {/* This adds a soft background image behind the content. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 scale-105 bg-cover bg-center opacity-60 blur-[2px]"
        style={{ backgroundImage: "url('/images/philip2.jpeg')" }}
        aria-hidden="true"
      />

      {/* This dark layer helps visitors read the text clearly. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[#12091F]/35"
        aria-hidden="true"
      />

      <section className="mx-auto max-w-5xl">
        {/* Small heading above the main title. */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
          Get to know me
        </p>

        {/* Main page title. */}
        <h1 className="mb-8 text-4xl font-bold sm:text-6xl">
          About <span className="text-purple-300">Me</span>
        </h1>

        {/* Introduction section. */}
        <div className="max-w-3xl rounded-3xl border border-white/15 bg-[#12091F]/75 p-6 shadow-2xl backdrop-blur-sm sm:p-10">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Hello, I’m Philibus.
          </h2>

          <p className="mb-5 leading-8 text-purple-100">
            I’m a graphic designer who enjoys creating attractive,
            meaningful designs that help people and businesses communicate
            their messages.
          </p>

          <p className="mb-8 leading-8 text-purple-100">
            From promotional flyers and birthday designs to church flyers
            and social media graphics, I aim to create designs that look
            professional and connect with their intended audience.
          </p>

          {/* This displays your design skills as individual tags. */}
          <h3 className="mb-4 text-xl font-semibold">
            What I Can Help You With
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              // Each skill appears in its own purple label.
              <span
                key={skill}
                className="rounded-full border border-purple-300/30 bg-purple-500/20 px-4 py-2 text-sm text-purple-100"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* A call to action invites visitors to contact you. */}
          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-purple-500 px-7 py-3 font-semibold transition hover:bg-purple-400"
          >
            Let’s Work Together
          </a>
        </div>
      </section>
    </main>
  );
}
