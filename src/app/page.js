import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Spark } from "@/components/graphics";

const skills = [
  {
    number: "01",
    title: "The front end.",
    description: "Fast, accessible interfaces, with the detail work that makes them easy to use.",
    tools: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Across the stack.",
    description: "Connecting interfaces, services, and data. Learning the systems a problem needs.",
    tools: ["C#", ".NET", "C++", "Prisma", "SQL", "NoSQL"],
  },
  {
    number: "03",
    title: "Applied AI.",
    description: "Harness engineering that connects models to context, tools, and workflows, with evaluation tied to a clear goal.",
    tools: ["Harness engineering", "Prompt engineering", "Context engineering", "RAG", "Evaluation"],
  },
];

const aiWork = [
  {
    title: "Harness engineering.",
    description: "I build AI harnesses: the systems around a model that manage context, connect tools, carry state through a workflow, and handle failures. That includes retrieval-augmented generation (RAG), embedding databases, and shared team knowledge, so the model can work with relevant information rather than an isolated prompt.",
  },
  {
    title: "Evaluate the result, not the novelty.",
    description: "I build evaluation harnesses to compare behavior, understand failure cases, and assess whether a change moves us closer to the intended outcome. A convincing demo is a starting point, not evidence that a system is ready to rely on.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="shell">
          <div className="hero-eyebrow eyebrow">
            <p>Esteban Leandro Marin<br />Full-stack software engineer</p>
            <span className="hero-edition">Technology for people.<br />Built with purpose.</span>
          </div>
          <div className="hero-grid">
            <h1 id="hero-title" className="display hero-title">
              <span>Big ideas.</span>{" "}
              <span>Built</span>{" "}
              <span className="hero-last-line">right.<Spark className="hero-spark" /></span>
            </h1>
            <div className="hero-intro">
              <p className="hero-description">
                I&apos;m Esteban, a software engineer at Xbox, working on
                new ways for people to play.
              </p>
              <p className="hero-context">
                Full-stack engineering and applied AI, built around the
                people using them.
              </p>
              <div className="hero-actions">
                <Link className="button button-yellow" href="#experience">
                  My work experience <ArrowDown aria-hidden="true" size={20} />
                </Link>
                <Link className="text-link" href="#ai">
                  My approach to AI <ArrowDown aria-hidden="true" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="checker-strip" aria-hidden="true" />

      <section id="about" className="about-section section-space" aria-labelledby="about-title">
        <div className="shell">
          <div className="section-intro">
            <div>
              <p className="eyebrow section-kicker">01 / The person behind the pixels</p>
              <h2 id="about-title" className="display section-title">
                Serious<br />craft.<br /><span className="green-text">Playful mind.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p className="lead">10+ years of building useful digital products.</p>
              <p>
                I&apos;ve worked with small businesses, large outsourcing
                companies, remote teams, and big tech. Different environments
                have shaped how I collaborate, solve problems, and build software.
              </p>
              <p>
                I&apos;m a full-stack developer who cares about performance,
                usability, and accessibility. I enjoy turning ideas into
                products that feel good to use and make a real difference.
              </p>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.number}>
                <div className="skill-card-top eyebrow">
                  <span>{skill.number} / What I bring</span>
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <ul className="tag-list" aria-label={`${skill.title} Skills`}>
                  {skill.tools.map((tool) => <li key={tool}>{tool}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="work-section section-space" aria-labelledby="work-title">
        <div className="shell">
          <div className="work-heading">
            <div>
              <p className="eyebrow section-kicker">02 / Experience</p>
              <h2 id="work-title" className="display section-title">More people.<br />More play.</h2>
            </div>
            <p>
              At Xbox, I&apos;m working on new ways for players to play more,
              more affordably.
            </p>
          </div>
          <article className="experience-card" aria-labelledby="xbox-role-title">
            <div className="experience-role">
              <p className="eyebrow">December 2024 - present</p>
              <h3 id="xbox-role-title">Microsoft / Xbox</h3>
              <p>Software Engineer<br />Xbox Experiences and Platforms</p>
            </div>
            <div className="experience-details">
              <div>
                <h4>A whole ecosystem, not just a screen.</h4>
                <p>
                  I work across web, console, smart TVs, PC, handhelds, and
                  more. Each surface has its own constraints; my work connects
                  those experiences with the systems behind them.
                </p>
              </div>
              <div>
                <h4>The difficult parts, end to end.</h4>
                <p>
                  I tackle complex engineering challenges across the stack,
                  learning new systems and building the skills each problem demands.
                </p>
              </div>
              <div>
                <h4>More choice. Fewer barriers.</h4>
                <p>
                  More ways to play should mean real choice: where people play,
                  how they get started, and what they can afford. That is the
                  goal behind the engineering.
                </p>
              </div>
            </div>
          </article>
          <div className="previous-experience" aria-labelledby="previous-experience-title">
            <h3 id="previous-experience-title">Earlier experience</h3>
            <div>
              <h4>Zonda <span>July - December 2024</span></h4>
              <p>Full-stack developer, continuing my work after Zonda acquired Outcoding.</p>
            </div>
            <div>
              <h4>Outcoding <span>2016 - 2024</span></h4>
              <p>Eight years growing from JavaScript customization through performance-focused development to full-stack engineering.</p>
            </div>
          </div>
          <div className="work-links">
            <Link href="/projects" className="text-link">
              Project corner <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
            <a className="text-link" href="https://github.com/elemarin" target="_blank" rel="noopener noreferrer">
              Explore my GitHub <ArrowUpRight aria-hidden="true" size={18} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <section id="ai" className="ai-section section-space" aria-labelledby="ai-title">
        <div className="shell">
          <div className="section-intro">
            <div>
              <p className="eyebrow section-kicker">03 / Applied AI</p>
              <h2 id="ai-title" className="display section-title">A goal first.<br />Then the tech.</h2>
            </div>
            <div className="about-copy">
              <p className="lead">At Xbox, I&apos;m helping shape how we apply AI to real engineering problems.</p>
              <p>
                I start with what we want to make possible for players or the
                team, not with a model we want to try. That means defining what
                should improve, choosing an approach that fits, and evaluating
                it against that goal.
              </p>
              <p>
                I&apos;m curious about what&apos;s new, but deliberate about
                where it belongs. The point is to give people more room to
                think, create, and solve problems, not add AI for its own sake.
              </p>
            </div>
          </div>
          <div className="ai-grid">
            {aiWork.map((work) => (
              <article className="ai-card" key={work.title}>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </article>
            ))}
          </div>
          <p className="ai-context">
            My broader hands-on work includes AI-powered platforms, WhatsApp
            chatbots, and shared second brains for teams. Those experiences
            inform how I approach new possibilities: start with a need, build,
            and find out whether it actually helps.
          </p>
        </div>
      </section>
    </>
  );
}
