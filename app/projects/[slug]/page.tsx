import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} — Haris Sofyan`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="case-page">
      <nav className="nav case-nav" aria-label="Project navigation">
        <Link className="brand" href="/" aria-label="Haris Sofyan home">
          <Image className="brand-image" src="/logo.png" alt="" width={48} height={48} priority />
        </Link>
        <Link className="back-link" href="/#work"><span>←</span> All projects</Link>
        <a className="nav-cta" href="mailto:haristiani243@gmail.com">Let&apos;s talk <span>↗</span></a>
      </nav>

      <header className="case-hero" data-reveal>
        <div className="case-kicker"><span>{project.number} / CASE STUDY</span><span>{project.year}</span></div>
        <h1>{project.title}</h1>
        <p>{project.overview}</p>
        <div className="case-scene" data-tilt aria-hidden="true">
          <div className="case-grid-floor" />
          <div className="case-prism"><i /><i /><i /><i /></div>
          <div className="case-ring ring-a" /><div className="case-ring ring-b" />
          <span>{project.number}</span>
        </div>
      </header>

      <section className="case-facts" data-reveal>
        <div><span>Client / Organization</span><strong>{project.client}</strong></div>
        <div><span>Role</span><strong>{project.role}</strong></div>
        <div><span>Year</span><strong>{project.year}</strong></div>
      </section>

      <section className="case-story" data-reveal>
        <span className="section-index">THE CHALLENGE</span>
        <h2>{project.challenge}</h2>
        <div className="case-detail">
          <div><span className="section-index">CONTRIBUTION</span><p>{project.description}</p></div>
          <div><span className="section-index">OUTCOME</span><p>{project.outcome}</p></div>
        </div>
      </section>

      <section className="case-capabilities" data-reveal>
        <div><span className="section-index">CAPABILITIES</span><h2>What the work involved.</h2></div>
        <ol>{project.capabilities.map((capability, index) => <li key={capability}><span>{String(index + 1).padStart(2, "0")}</span>{capability}</li>)}</ol>
      </section>

      <Link className="next-project" href={`/projects/${next.slug}`} data-reveal>
        <span>Next project · {next.number}</span>
        <strong>{next.shortTitle}</strong>
        <i>↗</i>
      </Link>

      <footer><span>© 2026 Haris Sofyan</span><span>Software Engineer · Cloud Engineer</span></footer>
    </main>
  );
}
