import React from "react";

type Localized = { en: string; pt: string };

type Lang = { name: Localized; level: Localized };

const languages: Lang[] = [
  { name: { en: "Portuguese", pt: "Português" }, level: { en: "Native", pt: "Nativo" } },
  { name: { en: "English", pt: "Inglês" }, level: { en: "Advanced", pt: "Avançado" } },
];

const categories: { title: Localized; items: string[] }[] = [
  { title: { en: "Front-end", pt: "Front-end" }, items: ["React", "TypeScript", "JavaScript (ES6+)", "Next.js", "Redux", "HTML/CSS", "SSR", "Design System", "Performance", "Accessibility (WCAG)"] },
  { title: { en: "Quality", pt: "Qualidade" }, items: ["Jest", "React Testing Library", "Cypress", "E2E", "A/B Testing"] },
  { title: { en: "Cloud, DevOps & Observability", pt: "Cloud, DevOps e observabilidade" }, items: ["Azure", "CI/CD", "Dynatrace", "DQL"] },
  { title: { en: "Back-end & Mobile", pt: "Back-end e mobile" }, items: ["C#", ".NET", "REST APIs", "GraphQL", "OAuth 2.0", "Flutter"] },
  { title: { en: "Methods", pt: "Métodos" }, items: ["Scrum", "Kanban", "Cross-functional squads", "Code Review"] },
  { title: { en: "Practices", pt: "Práticas" }, items: ["Mentoring", "Technical interviews", "Architecture", "Threat Modeling"] },
];

export default function Skills({ lang = 'en' }: { lang?: 'en'|'pt' }): JSX.Element {
  return (
    <section id="skills" className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{lang === 'pt' ? 'Competências & Idiomas' : 'Skills & Languages'}</h2>

      <div className="bg-white p-6 rounded shadow-sm space-y-6">
        <div>
          <div className="text-sm text-slate-500 mb-3">{lang === 'pt' ? 'Idiomas' : 'Languages'}</div>
          <div className="flex gap-3 flex-wrap">
            {languages.map((l) => (
              <div key={l.name.en} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
                <strong className="mr-2">{l.name[lang]}</strong>
                <span className="text-slate-500">{l.level[lang]}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm text-slate-500 mb-3">{lang === 'pt' ? 'Principais competências' : 'Core competencies'}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((c) => (
              <div key={c.title.en} className="border rounded p-3">
                <div className="font-medium mb-2">{c.title[lang]}</div>
                <div className="flex flex-wrap gap-2">
                  {c.items.map((it) => (
                    <div key={it} className="text-sm px-2 py-1 rounded bg-slate-100 text-slate-700">
                      {it}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
