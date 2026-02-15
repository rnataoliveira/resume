import React from "react";
import { SiReact, SiTypescript, SiJavascript, SiGraphql, SiJest, SiFlutter, SiTailwindcss, SiGit, SiCsharp, SiRuby, SiCypress } from "react-icons/si";
import { FaNodeJs, FaGithub } from "react-icons/fa";

const techs = [
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Jest", Icon: SiJest },
  { name: "Cypress", Icon: SiCypress },
  { name: "Ruby (E2E)", Icon: SiRuby },
  { name: "C# (.NET)", Icon: SiCsharp },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: FaGithub },
  { name: "Flutter (basic)", Icon: SiFlutter },
];

export default function TechMarquee({ lang = 'en' }: { lang?: 'en'|'pt' }): JSX.Element {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-white p-4 rounded shadow-sm">
        <div className="text-sm text-slate-500 mb-3">{lang === 'pt' ? 'Tecnologias que uso' : 'Tech I use'}</div>
        <div className="marquee">
          <div className="marquee-track">
            {techs.map((t) => (
              <div key={t.name} className="flex items-center gap-3 px-4 py-2 text-slate-700">
                <t.Icon className="icon" />
                <div className="text-sm">{t.name}</div>
              </div>
            ))}
            {/* repeat for smooth loop */}
            {techs.map((t) => (
              <div key={`${t.name}-2`} className="flex items-center gap-3 px-4 py-2 text-slate-700">
                <t.Icon className="icon" />
                <div className="text-sm">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
