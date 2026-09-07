import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ProjectGrid from "@/components/project-grid";
import { Spark } from "@/components/graphics";
import { metadata as siteMetadata } from "../metadata";

const description = "Games, AI experiments, and design tools by Esteban Leandro Marin. Explore the projects, why I built them, and their source code.";

export const metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    ...siteMetadata.openGraph,
    title: "Projects | Esteban Leandro Marin",
    description,
    url: "/projects",
  },
  twitter: {
    ...siteMetadata.twitter,
    title: "Projects | Esteban Leandro Marin",
    description,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="projects-hero section-space" aria-labelledby="projects-title">
        <div className="shell">
          <Link className="text-link back-link" href="/">
            <ArrowLeft aria-hidden="true" size={18} /> Back to home
          </Link>
          <div className="projects-heading">
            <div>
              <p className="eyebrow section-kicker">Selected projects</p>
              <h1 id="projects-title" className="display section-title">Built to learn.<br />Made to use.</h1>
            </div>
            <Spark className="projects-spark" />
          </div>
          <p className="projects-description">
            Games, AI experiments, and tools for making things. Some started
            with curiosity; others with a problem a small business needed to solve.
          </p>
          <Link className="text-link projects-experience-link" href="/#experience">
            My work experience <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>
      <div className="checker-strip" aria-hidden="true" />
      <section className="projects-list section-space" aria-labelledby="selected-projects-title">
        <div className="shell">
          <h2 id="selected-projects-title" className="sr-only">Selected projects</h2>
          <ProjectGrid />
          <div className="github-callout">
            <div>
              <h2>There&apos;s more on GitHub.</h2>
              <p>More experiments, tools, and ideas in progress.</p>
            </div>
            <a className="button button-ink" href="https://github.com/elemarin" target="_blank" rel="noopener noreferrer">
              Explore my GitHub <ArrowUpRight aria-hidden="true" size={20} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
