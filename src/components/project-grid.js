import { ArrowUpRight } from "lucide-react";
import { Flower, Spark } from "./graphics";

const projects = [
  {
    id: "renderoni",
    title: "Renderoni",
    category: "Web game engine",
    description: "I wanted a faster way to build web games by combining existing technology. Renderoni brings Three.js rendering and Rapier physics together in a TypeScript engine, with headless testing and tools for AI agents.",
    technologies: ["TypeScript", "Three.js", "Rapier", "MCP"],
    website: "https://elemarin.github.io/renderoni/",
  },
  {
    id: "visualizadorcubos",
    title: "Visualizador de cubos",
    category: "Small business / design",
    description: "Built to help a small business preview its designs before making them. An interactive 3D workspace for arranging cubes, trying tile colors, and seeing how a design comes together.",
    technologies: ["Next.js", "React Three Fiber", "TypeScript"],
    website: "https://visualizadorcubos.vercel.app/",
  },
  {
    id: "gravity",
    title: "Gravity",
    category: "Browser game",
    description: "A low-poly orbital arcade game that grew out of my love of space and curiosity about web games. A way to explore game development by making something playable in the browser.",
    technologies: ["Three.js", "Next.js", "TypeScript"],
    website: "https://gravity-three-chi.vercel.app/",
  },
  {
    id: "onionsvg",
    title: "OnionSVG",
    category: "Making / laser cutting",
    description: "After getting a laser cutter, I wanted to make my own decorations. OnionSVG turns images into layered SVGs that can be cut and stacked into physical designs.",
    technologies: ["Next.js", "Sharp", "Potrace", "SVG"],
    website: "https://onionsvg.vercel.app/",
  },
  {
    id: "repo2brainrot",
    title: "repo2brainrot",
    category: "AI / video experiment",
    description: "I wanted to learn how AI skills and tools fit together, from on-device voice generation to video editing. This experiment turns code repositories into narrated, short-form video feeds.",
    technologies: ["Python", "Agent Skills", "Kokoro TTS", "FFmpeg"],
  },
  {
    id: "paw",
    title: "PAW",
    category: "Personal Agent Workspace",
    description: "I wanted to understand how OpenClaw worked by building a similar system myself. PAW explores cloud-hosted personal workspaces where an AI agent can use tools, keep memory, and work through tasks.",
    technologies: ["Python", "LiteLLM", "Docker", "Telegram"],
  },
  {
    id: "cube-optimizer",
    title: "Cube Optimizer",
    category: "Small business / prototyping",
    description: "Built to help a small business prototype better. A 3D tool for planning wooden cube cuts and tile layouts, so ideas can be explored before making the physical pieces.",
    technologies: ["React", "Three.js", "TypeScript", "Vite"],
    website: "https://cube-optimizer.vercel.app/",
  },
];

export default function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <article className={`project-card project-${index % 2 === 0 ? "blue" : "green"}`} key={project.id}>
          <div className="project-info">
            <span className="project-category eyebrow">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tag-list" aria-label={`${project.title} technologies`}>
              {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <div className="project-links">
              <a className="text-link" href={`https://github.com/elemarin/${project.id}`} target="_blank" rel="noopener noreferrer">
                View code <ArrowUpRight aria-hidden="true" size={18} />
                <span className="sr-only"> for {project.title} on GitHub (opens in a new tab)</span>
              </a>
              {project.website && (
                <a className="text-link" href={project.website} target="_blank" rel="noopener noreferrer">
                  Visit project <ArrowUpRight aria-hidden="true" size={18} />
                  <span className="sr-only">: {project.title} (opens in a new tab)</span>
                </a>
              )}
            </div>
          </div>
          <div className="project-art" aria-hidden="true">
            <span className="eyebrow">Project / {String(index + 1).padStart(2, "0")}</span>
            {index % 2 === 0 ? <Flower /> : <Spark />}
          </div>
        </article>
      ))}
    </div>
  );
}
