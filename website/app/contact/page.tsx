
export default function ContactPage() {
  // Replace these example links with your real contact details later.

  // These are your contact methods and their links.
  const contacts = [
    {
      name: "WhatsApp",
      description: "Message me about your design project.",
      link: "https://wa.me/2349051561915",
      button: "Chat on WhatsApp",
    },
    {
      name: "Email",
      description: "Send me your project details and ideas.",
      link: "mailto:philibusjacobkutmak@gmail.com",
      button: "Send an Email",
    },
    {
      name: "Fiverr",
      description: "Visit Fiverr to explore my services.",
      link: "https://www.fiverr.com/",
      button: "Visit My Fiverr",
    },
    {
      name: "Facebook",
      description: "Connect with me on Facebook.",
      link: "https://www.facebook.com/",
      button: "Visit Facebook",
    },
  ];


  return (
    // Main page background and text styling.
    <main className="relative isolate min-h-screen overflow-hidden bg-[#12091F] px-6 py-16 text-white sm:px-10">
      {/* Background image gives the page a consistent appearance. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 scale-105 bg-cover bg-center opacity-60 blur-[2px]"
        style={{ backgroundImage: "url('/images/philip2.jpeg')" }}
        aria-hidden="true"
      />

      {/* Dark overlay keeps the content readable. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[#12091F]/35"
        aria-hidden="true"
      />

      <section className="mx-auto max-w-5xl">
        {/* Page introduction. */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
          Get in touch
        </p>

        <h1 className="mb-6 text-4xl font-bold sm:text-6xl">
          Let’s Work <span className="text-purple-300">Together</span>
        </h1>

        <p className="mb-12 max-w-2xl leading-8 text-purple-100">
          Have a design project in mind? I’d love to hear about it.
          Choose your preferred contact method below, and let’s discuss
          how I can help bring your ideas to life.
        </p>

        {/* Contact cards are arranged in columns on larger screens. */}
        <div className="grid gap-6 md:grid-cols-3">
          {contacts.map((contact) => (
            // Each card contains a contact method and its link.
            <article
              key={contact.name}
              className="flex flex-col rounded-3xl border border-white/15 bg-[#12091F]/75 p-6 shadow-xl backdrop-blur-sm"
            >
              <h2 className="mb-3 text-2xl font-semibold text-purple-200">
                {contact.name}
              </h2>

              <p className="mb-6 flex-1 leading-7 text-purple-100">
                {contact.description}
              </p>

              {/* Opens the selected contact service. */}
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-purple-500 px-5 py-3 text-center font-semibold transition hover:bg-purple-400"
              >
                {contact.button}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-purple-200">
          I look forward to hearing about your next project.
        </p>
      </section>
    </main>
  );
}
