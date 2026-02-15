import React, { useLayoutEffect, useRef, useState } from "react";
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

export default function TechMarquee({ lang = "en" }: { lang?: "en" | "pt" }): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const singleRef = useRef<HTMLDivElement | null>(null);
  const [repeatCount, setRepeatCount] = useState(1);

  const buildSingle = (count: number) => {
    const out: { name: string; Icon: any; key: string }[] = [];
    for (let i = 0; i < count; i++) {
      techs.forEach((t, idx) => out.push({ ...t, key: `${t.name}-${i}-${idx}` }));
    }
    return out;
  };

  const [singleSet, setSingleSet] = useState(() => buildSingle(1));

  useLayoutEffect(() => {
    setSingleSet(buildSingle(repeatCount));
  }, [repeatCount]);

  useLayoutEffect(() => {
    function update() {
      const container = containerRef.current;
      const single = singleRef.current;
      if (!container || !single) return;
      const containerW = container.offsetWidth || 0;
      const singleW = single.scrollWidth || 0;
      if (!singleW) return;
      const needed = Math.max(1, Math.ceil(containerW / singleW) + 1);
      if (needed !== repeatCount) setRepeatCount(needed);
    }

    update();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    if (ro && containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", update);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [repeatCount]);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="card p-4">
        <div className="text-sm text-slate-500 mb-3">{lang === "pt" ? "Tecnologias que uso" : "Tech I use"}</div>
        <div className="marquee" ref={containerRef}>
          <div className="marquee-track">
            <div ref={singleRef} className="flex items-center">
              {singleSet.map((t) => (
                <div key={t.key} className="flex items-center gap-3 px-4 py-2 text-slate-700">
                  <t.Icon className="icon" />
                  <div className="text-sm">{t.name}</div>
                </div>
              ))}
            </div>

            <div aria-hidden className="flex items-center">
              {singleSet.map((t) => (
                <div key={`copy-${t.key}`} className="flex items-center gap-3 px-4 py-2 text-slate-700">
                  <t.Icon className="icon" />
                  <div className="text-sm">{t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
