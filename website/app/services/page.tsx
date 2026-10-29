
export default function ServicesPage() {
    // List of design services and their starting prices.
  const services = [
    {
      number: "01",
      title: "Flyer Design",
      description: "Eye-catching flyers for events, promotions, and businesses.",
      price: "$10",
    },
    {
      number: "02",
      title: "Birthday Design",
      description: "Beautiful birthday designs made for special celebrations.",
      price: "$10",
    },
    {
      number: "03",
      title: "Social Media Design",
      description: "Creative graphics that help your brand stand out online.",
      price: "$15",
    },
    {
      number: "04",
      title: "Logo Design",
      description: "Memorable logos that give your brand its own identity.",
      price: "$25",
    },
    {
      number: "05",
      title: "Business Branding",
      description: "Consistent visuals that help your business look professional.",
      price: "$50",
    },
    {
      number: "06",
      title: "YouTube Thumbnails",
      description: "Bold thumbnails designed to catch viewers' attention.",
      price: "$10",
    },
    {
      number: "07",
      title: "Church Flyer Design",
      description: "Meaningful designs for church programmes and special events.",
      price: "$10",
    },
  ];

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#12091F] px-6 py-16 text-white sm:px-10">
  {/* Background image with a gentle blur */}
  <div
    className="pointer-events-none absolute inset-0 -z-10 scale-105 bg-cover bg-center opacity-30 blur-[20px]"
    style={{ backgroundImage: "url('/images/philip6.jpeg')" }}
    aria-hidden="true"
  />

  {/* Dark overlay keeps the text easy to read */}
  <div
    className="pointer-events-none absolute inset-0 -z-10 bg-[#12091F]/67"
    aria-hidden="true"
  />
      {/* Page heading */}
      <div className="mx-auto max-w-6xl">
        <a
          href="/"
          className="text-sm text-purple-300 transition hover:text-white"
        >
          ← Back to Home
        </a>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
          What I Do
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
          Creative design services for your brand.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-purple-100/75 sm:text-lg">
          From event flyers to complete brand identities, I create designs
          that communicate your message and leave a lasting impression.
        </p>

        {/* Service cards appear in a responsive grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-purple-400/20 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-purple-500/10"
            >
              <p className="text-sm font-semibold text-purple-300">
                {service.number}
              </p>

              <h2 className="mt-6 text-xl font-semibold">
                {service.title}
              </h2>

              <p className="mt-3 leading-7 text-purple-100/70">
                {service.description}
              </p>
              {/* Price area with a subtle background */}
<div className="mt-6 rounded-xl border border-purple-400/20 bg-purple-500/10 p-4">
  {/* Small label above the price */}
  <p className="text-xs font-medium uppercase tracking-widest text-purple-200/70">
    Starting at
  </p>

  {/* Make the price stand out */}
  <p className="mt-2 text-3xl font-extrabold text-violet-300">
    {service.price}
  </p>
</div>

{/* Button for clients who want to order this service */}
<a
  href="/contact"
  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-purple-500 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-purple-400 hover:shadow-lg hover:shadow-purple-500/20"
>
  Order This Design <span className="ml-2">↗</span>
</a>
            </article>
          ))}
        </div>

        {/* Invitation to contact the designer */}
        <div className="mt-14 rounded-2xl border border-purple-400/20 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/10 p-8 sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Have a project in mind?
          </h2>

          <p className="mt-3 leading-7 text-purple-100/75">
            Tell me what you need, and let's create something beautiful.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-block rounded-full bg-purple-500 px-7 py-3 font-semibold transition hover:bg-purple-400"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </main>
  );
}
