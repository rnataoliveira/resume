import React from "react";
import { FiExternalLink } from "react-icons/fi";

type Project = {
  title: string;
  description: { en: string; pt: string };
  url: string;
  tags?: string[];
};

const projects: Project[] = [
  {
    title: "cv-generator",
    description: {
      en: "Resume/CV generator — customizable templates and PDF export.",
      pt: "Gerador de currículo — templates personalizáveis e exportação para PDF.",
    },
    url: "https://rnataoliveira.github.io/cv-generator/",
    tags: ["React", "TypeScript"],
  },
  {
    title: "it-glossary",
    description: {
      en: "Interactive IT glossary with concise definitions and examples.",
      pt: "Glossário interativo de TI com definições concisas e exemplos.",
    },
    url: "https://rnataoliveira.github.io/it-glossary/",
    tags: ["React"],
  },
];

export default function Projects({ lang = "en" }: { lang?: "en" | "pt" }): JSX.Element {
  return (
    <section id="projects" className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{lang === "pt" ? "Projetos recentes" : "Recent projects"}</h2>

      <div className="bg-white p-6 rounded shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <article key={p.title} className="border rounded p-4 flex flex-col justify-between h-full">
              <div>
                <div className="font-medium text-lg">{p.title}</div>
                <p className="mt-2 text-slate-600 text-sm">{p.description[lang]}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {p.tags?.map((t) => (
                    <div key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">
                      {t}
                    </div>
                  ))}
                </div>

                <a href={p.url} target="_blank" rel="noreferrer" className="accent-text text-sm flex items-center gap-2">
                  {lang === "pt" ? "Ver" : "View"} <FiExternalLink />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
