import React from "react";

type Lang = { name: string; level: string };

const languages: Lang[] = [
  { name: "Português", level: "Fluent / Native" },
  { name: "English", level: "Advanced (B2+)" },
];

const categories: { title: string; items: string[] }[] = [
  { title: "Frontend", items: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Sass"] },
  { title: "Testing & QA", items: ["Jest", "Cypress", "E2E", "Ruby (E2E)", "A/B Testing"] },
  { title: "Backend & APIs", items: ["Node.js", "REST APIs", "GraphQL", "C# (.NET)"] },
  { title: "Mobile & Cross‑platform", items: ["Flutter (basic)"] },
  { title: "Workflows & Tools", items: ["Git", "GitHub", "GitFlow", "Code Review"] },
  { title: "Product & Practices", items: ["Mentoring", "Architecture", "Threat Modeling", "Diversity & Inclusion"] },
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
              <div key={l.name} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
                <strong className="mr-2">{l.name}</strong>
                <span className="text-slate-500">{l.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm text-slate-500 mb-3">{lang === 'pt' ? 'Principais competências' : 'Core competencies'}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((c) => (
              <div key={c.title} className="border rounded p-3">
                <div className="font-medium mb-2">{c.title}</div>
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
