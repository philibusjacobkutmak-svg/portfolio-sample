
const designs = [
  {
    image: "/images/philip2.jpeg",
    title: "Birthday Design",
    category: "Celebrations",
    number: "01",
  },
  {
    image: "/images/philip3.jpeg",
    title: "The Ember Months",
    category: "Church & Inspirational",
    number: "02",
  },
  {
    image: "/images/philip4.jpeg",
    title: "Creative Project",
    category: "Graphic Design",
    number: "03",
  },
  {
    image: "/images/philip4.jpeg",
    title: "Creative Project",
    category: "Graphic Design",
    number: "04",
  },
  {
    image: "/images/philip6.jpeg",
    title: "Creative Project",
    category: "Graphic Design",
    number: "05",
  },
  {
    image: "/images/philip7.jpeg",
    title: "Creative Project",
    category: "Graphic Design",
    number: "06",
  },
];

export default function PortfolioPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#12091F] px-6 py-16 text-white sm:px-10">
  {/* Background image with a gentle blur */}
  <div
    className="pointer-events-none absolute inset-0 -z-10 scale-105 bg-cover bg-center opacity-60 blur-[2px]"
    style={{ backgroundImage: "url('/images/philip6.jpeg')" }}
    aria-hidden="true"
  />

  {/* Dark overlay keeps the text easy to read */}
  <div
    className="pointer-events-none absolute inset-0 -z-10 bg-[#12091F]/67"
    aria-hidden="true"
  />
      <div className="mx-auto max-w-7xl">

        {/* Small introduction label */}
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">
          Selected works · 2026
        </p>

        {/* Large heading with a violet highlight */}
        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
          Design with
          <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            purpose & feeling.
          </span>
        </h1>

        <div className="mt-7 flex flex-col gap-5 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            A collection of visual stories crafted for celebrations,
            churches, businesses, and growing brands.
          </p>

          <p className="shrink-0 text-sm text-violet-300">
            06 projects / Selected work
          </p>
        </div>

        {/* Responsive grid: one column on phones, three on large screens */}
        <div className="mt-10 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((design) => (
            <article key={design.image} className="group">

              {/* This frame preserves the complete artwork without cropping */}
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#211438] to-[#130c20] p-3 transition duration-300 group-hover:border-violet-400/60 sm:p-4">
                <img
                  src={design.image}
                  alt={design.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                />

                {/* Small project number in the corner */}
                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
                  {design.number}
                </span>
              </div>

              {/* Project information below the image */}
              <div className="flex items-start justify-between gap-3 pt-5">
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
                    {design.category}
                  </p>
                  <h2 className="text-xl font-medium tracking-tight text-white transition group-hover:text-violet-200 sm:text-2xl">
                    {design.title}
                  </h2>
                </div>

                <span className="mt-1 text-xl text-violet-300 transition group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Return link */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <a
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-violet-400/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-500/15"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </a>
        </div>
      </div>

    </main>
  );
}
