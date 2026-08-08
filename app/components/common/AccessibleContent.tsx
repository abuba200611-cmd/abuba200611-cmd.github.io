import { FOOTER_LINKS, PROJECTS, WORK_TIMELINE } from "@constants";

const TAGLINES = [
  'AI Automation Engineer',
  'UI/UX Designer',
  'Graphic Designer',
  'Problem Solver',
  'Fast Learner',
  'Team Player',
];

// The 3D scene renders every word as WebGL text drawn on a <canvas> — none of
// it exists as real text in the page. That leaves search engines and screen
// readers with nothing to read, and gives no fallback for anyone whose OS is
// set to reduce motion (the site's whole navigation model is a scroll-driven
// camera flythrough, which that setting exists to avoid). This component is
// the same content as real markup, twice over:
//
//   - `visible: false` (default) — visually hidden (`sr-only`) but present in
//     the DOM, so crawlers and screen readers get a real h1 and real links
//     while sighted users see the canvas as before.
//   - `visible: true` — an ordinary static page, shown instead of the canvas
//     when prefers-reduced-motion is set, in the same style as the WebGL
//     hero: dark background, serif display type for the two headings.
const AccessibleContent = ({ visible = false }: { visible?: boolean }) => {
  if (!visible) {
    return (
      <div className="sr-only">
        <Body />
      </div>
    );
  }

  return (
    <main className="min-h-[100dvh] bg-[#0a0a0a] text-[#ededed] px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-2xl">
        <Body />
      </div>
    </main>
  );
};

const Body = () => (
  <>
    <h1 className="font-serif text-3xl sm:text-4xl">Abubakr Mala</h1>
    <p className="mt-3 text-lg opacity-80">{TAGLINES.join(' · ')}</p>
    <p className="mt-6 max-w-prose leading-relaxed opacity-90">
      AI automation engineer, UI/UX and graphic designer building AI-powered
      web apps and workflow automation.
    </p>

    <section className="mt-12" aria-labelledby="work-heading">
      <h2 id="work-heading" className="font-serif text-2xl">Work and education</h2>
      <ul className="mt-4 space-y-4">
        {WORK_TIMELINE.map((point) => (
          <li key={point.title}>
            {point.year && <span className="opacity-60">{point.year} — </span>}
            <strong>{point.title}</strong>
            {point.subtitle && <span className="opacity-80">: {point.subtitle}</span>}
          </li>
        ))}
      </ul>
    </section>

    <section className="mt-12" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="font-serif text-2xl">Side projects</h2>
      <ul className="mt-4 space-y-4">
        {PROJECTS.map((project) => (
          <li key={project.title}>
            {project.url ? (
              <a className="underline underline-offset-2" href={project.url} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            ) : (
              <strong>{project.title}</strong>
            )}
            <span className="opacity-60"> ({project.date})</span>
            <span className="opacity-80">: {project.subtext}</span>
          </li>
        ))}
      </ul>
    </section>

    <section className="mt-12" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="font-serif text-2xl">Contact</h2>
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {FOOTER_LINKS.map((link) => (
          <li key={link.name}>
            <a className="underline underline-offset-2" href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  </>
);

export default AccessibleContent;
