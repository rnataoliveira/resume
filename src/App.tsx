import React from "react";
import TechMarquee from "./components/TechMarquee";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

type Experience = {
    company: string;
    role: string;
    period: string;
    location?: string;
    bullets: string[];
    logo?: string;
};

const experiences: Experience[] = [
    {
        company: "XP Investimentos",
        role: "Senior Software Engineer",
        period: "Feb 2022 — present",
        location: "São Paulo, BR · Híbrida",
        bullets: ["Software development, GraphQL, scalable financial products, mentoring"],
        logo: "https://upload.wikimedia.org/wikipedia/pt/0/0b/XP_Investimentos_logo.png",
    },
    {
        company: "Sovos",
        role: "Software Developer",
        period: "Apr 2019 — Mar 2021",
        bullets: ["Web applications, APIs, integrations"],
        logo: "https://images.seeklogo.com/logo-png/36/1/sovos-logo-png_seeklogo-363466.png",
    },
    {
        company: "Webedia",
        role: "Software Developer",
        period: "Jul 2018 — Apr 2019",
        bullets: ["Frontend, HTML5, product features"],
        logo: "https://br.webedia-group.com/wp-content/uploads/sites/13/2022/05/webedia-monogram.png",
    },
];

type Education = {
    institution: string;
    program: string;
    period: string;
    logo?: string;
    note?: string;
};

const education: Education[] = [
    {
        institution: "Faculdade Impacta Tecnologia",
        program: "Análise e desenvolvimento de sistemas",
        period: "2016 - 2018",
        logo: "https://www.grupogestaorh.com.br/conteudo/publicacoes/B7d5f3946af9d1617bec63ade6980e07ff092315.png",
        note: "Graduation",
    },
    {
        institution: "Fundação Getulio Vargas",
        program: "Gestão Estratégica de Tecnologia da Informação",
        period: "Fev 2022",
        logo: "https://logodownload.org/wp-content/uploads/2016/09/fgv-logo-0.png",
    },
    {
        institution: "Conviso",
        program: "Application Security Training (Modelagem de Ameaças, Web, API e Mobile)",
        period: "Jul 2023",
        logo: "data:image/png;base64,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",
    },
];

export default function App(): JSX.Element {
    const [lang, setLang] = React.useState<'en' | 'pt'>(() => ((localStorage.getItem('lang') as 'en' | 'pt') || 'en'));
    React.useEffect(() => { localStorage.setItem('lang', lang); }, [lang]);

    const t = {
        en: {
            contact: 'Contact',
            work: 'Work',
            experience: 'Experience',
            education: 'Education & Certifications',
            skillsHeading: 'Skills & Languages',
            techHeader: 'Tech I use',
            contactHeading: 'Contact',
            bio: 'Senior Software Engineer with 8+ years of experience across frontend, backend, and mobile development. Currently at XP Investimentos building scalable financial products and growth initiatives. Strong advocate for testing, documentation, and sustainable systems. Actively exploring AI initiatives to enhance products and developer experience. I enjoy mentoring and knowledge sharing. Always learning. Always building.',
            footer: 'Built with React + Vite • Hosted on GitHub Pages',
        },
        pt: {
            contact: 'Contato',
            work: 'Experiência',
            experience: 'Experiência',
            education: 'Formação & Certificações',
            skillsHeading: 'Competências & Idiomas',
            techHeader: 'Tecnologias que uso',
            contactHeading: 'Contato',
            bio: 'Engenheira de Software Sênior com 8+ anos de experiência em frontend, backend e mobile. Atualmente na XP Investimentos, construindo produtos financeiros escaláveis e iniciativas de crescimento. Forte defensora de testes, documentação e sistemas sustentáveis. Explorando iniciativas de IA para melhorar produtos e experiência de desenvolvedores. Gosto de mentorias e compartilhar conhecimento. Sempre aprendendo. Sempre construindo.',
            footer: 'Criado com React + Vite • Hospedado no GitHub Pages',
        },
    } as const;

    const L = t[lang];

    return (
        <div className="min-h-screen app-root">
            <header className="max-w-4xl mx-auto p-6 flex justify-between items-center">
                <div>
                    <div className="text-lg font-semibold">Renata Oliveira</div>
                    <div className="mt-1 flex gap-2 text-sm">
                        <button
                            onClick={() => setLang('en')}
                            className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'}`}
                            aria-pressed={lang === 'en'}
                        >
                            en
                        </button>
                        <button
                            onClick={() => setLang('pt')}
                            className={`px-2 py-1 rounded ${lang === 'pt' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'}`}
                            aria-pressed={lang === 'pt'}
                        >
                            pt-br
                        </button>
                    </div>
                </div>
                <nav className="flex gap-4 items-center">
                    <a
                        href="https://github.com/rnataoliveira"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-600 hover:text-slate-900"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rnataoliveira/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-600 hover:text-slate-900"
                    >
                        LinkedIn
                    </a>
                    <a href="mailto:renatabels@gmail.com" className="bg-slate-900 text-white px-3 py-1 rounded text-sm">
                        Email
                    </a>
                </nav>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12">
                <section className="bg-white shadow rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold">Renata Oliveira</h1>
                    <p className="mt-4 text-slate-700">{L.bio}</p>
                    <div className="mt-6 flex gap-3">
                        <a href="#contact" className="accent-bg px-4 py-2 rounded">
                            {L.contact}
                        </a>
                        <a href="#work" className="border border-slate-200 px-4 py-2 rounded">
                            {L.work}
                        </a>
                    </div>
                </section>

                <TechMarquee lang={lang} />

                <Skills lang={lang} />

                <Projects lang={lang} />

                <section id="work" className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">{L.experience}</h2>
                    <div className="space-y-4">
                        {experiences.map((exp) => (
                            <article key={exp.company} className="bg-white p-4 rounded shadow-sm">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-4">
                                        {exp.logo && (
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                className="w-10 h-10 object-contain bg-white rounded"
                                                loading="lazy"
                                            />
                                        )}
                                        <div>
                                            <div className="font-semibold">
                                                {exp.role} — <span className="text-slate-600 font-medium">{exp.company}</span>
                                            </div>
                                            <div className="text-sm text-slate-500">{exp.period} {exp.location ? `· ${exp.location}` : null}</div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="mt-3 list-disc ml-5 text-slate-600">
                                    {exp.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="education" className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">{L.education}</h2>
                    <div className="space-y-4">
                        {education.map((e) => (
                            <article key={e.institution} className="bg-white p-4 rounded shadow-sm flex items-start gap-4">
                                {e.logo && (
                                    <img src={e.logo} alt={`${e.institution} logo`} className="w-12 h-12 object-contain bg-white rounded" loading="lazy" />
                                )}
                                <div>
                                    <div className="font-medium">{e.institution} — {e.program}</div>
                                    <div className="text-sm text-slate-500">{e.period}</div>
                                    {e.note && <div className="text-sm text-slate-500 mt-1">{e.note}</div>}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="contact" className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">{L.contactHeading}</h2>
                    <div className="bg-white p-6 rounded shadow-sm">
                        <ContactForm lang={lang} />
                    </div>
                </section>
            </main>

            <footer className="max-w-4xl mx-auto px-6 py-8 text-sm text-slate-500">
                © {new Date().getFullYear()} Renata Oliveira — {L.footer}
            </footer>
        </div>
    );
}
