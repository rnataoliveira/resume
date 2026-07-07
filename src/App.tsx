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
        period: "Mar 2021 — present",
        location: "São Paulo, BR · Híbrida",
        bullets: [
            "Led creation of an investment simulators platform that became the architectural reference adopted across new products",
            "Defined frontend architecture and engineering standards used by multiple teams beyond my own squad",
            "Introduced observability and quality practices — from testing strategy to accessibility — as team culture, not individual tasks",
            "Mentored engineers, conducted independent technical interviews, and built interview frameworks adopted by other interviewers",
        ],
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACUCAMAAAAqEXLeAAAAYFBMVEUSEhL///8AAAAPDw8ICAg+Pj4fHx9ra2tycnKbm5uLi4vp6ek2NjZbW1vT09P09PRMTEyqqqrMzMzDw8MlJSXh4eG8vLxjY2MvLy8qKiqkpKSAgICSkpLa2tqwsLBHR0dCeBpwAAAFE0lEQVR4nO2c25aqMAxAa1oQRS4qN8cR//8vp4AXaFOlwUEeup/OWgeYbSglDRC26pHH9bZMq8z/IlmVltt9nPe92POfdVBBA/8yrUQV1LpkUsv/EWwxCKmzT4aScQr8214qHNK4L1n48G0lDPCLp2SxpBPdR0Bxl4z9hTpKSz/uJJN0kee6A9Kkldwv2FFa7lvJ5V3XfTg0kssOZBtKtlovXXK9Ynm22Eu7Q5xyFi88kDKUMftZvuQPOy9f8syi5UtGzFv4dSOvHI/5i57KG7j/bQOHw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcMxB99WEyovX3AS6w1sE5+R35zgr1zqp+UV/qLAd3lCmu8xnb369GbiuMA4mSzij248hPGzOKe2DFvhFj3jEDwbrBN18tOhlK8NJsAzQwx04YmnY1o7ixWAyW27R6CBnHKJpcbyRFIRgGs6hFksow084SsLA/gqCYEwsYfcpR8mWYInHcnD1gHdBg3KgWW4Ilvho68USTjm2RRLhs8N7fgnjsnwdS+Ax6ljChihJ+X4EPHTEHURrKXz0XCce0CXDijATRahlG0sB6MhLImB0yVVNmdUZHksuuMExk39lguTKo1hecUvoPt9TCdvP5KZIUkLJIEMtiz3qmLV/YopkeCVIyjwMnWfQP1B1YdAkk1DHdDf9pUiaZkOd/HQ7VZrk5rTT8K7RD3aSEpKkTEzRuUblIu7DSZPcgkCQCVp51I9Dk5TjcoTlJXsMeUTS+Pt/PiU5JpaXXqo1XlIup7S0nip5+xT3BYPPiC0k5cbqfEuWNN1fHo6DDM5OUs1j6JJMcGSM3zmyYZZpI8mZ8vMnSMpYGi3VFZqVJIN6uPEUyfuH7Drap/eWkkr2OUnSZBlrSyhLye0nJU0LQy3r/6IkXE23W9XSUlLJVSY5lgbFVdMjYGBpd3WrF+Qkx1dFgHpgaSUp0o/Nk7B+oaha2k3mygxEl4Tzu2JK0bO0kdRHEVGRjylK1b31uEUWpBdKiJLqJIHzvO+Mk+QyofT0TI0miWRTbywRSZTyiKXmNMfRy6rDLc/Q9shjjUtuGOV7kiNa2EkMdaLJq8UkpTgio0auCw1DoFtDTJEs7NfdXL1n3Rx3pnpPu4qYIllaS5ocm9ZNhup/XE2qBR0IjngtZQfMOBCaM06XTKxLQVy7Y/UcjWFeXSq6pHUV1RTHx/raZJlX1EqvdbXKkIeH1+eBDD9jdcHl33KwrZkLgdcfB2sFUyxp1NaO+Do7VNp0aRnrBKyfPRgqFs/x+LQ0LCFtiX1bR0PtR43ji5Bbcgysn9qJEx7HK3YgyCZaJvnG44THTPh4RB2bHn3UcZnkcbHf7tTn8uNa8fAy0Cl3xvTax7YPgvX6vjCqI4z0usu0FpPcH9vUCH9jwvyj8Jz2mXYbkl4h9HcwhDdjeyiZzz/T7pfFgSEQzddoazg12Uie52tZNswxbCT3szV/UxJ3G8l4rjZ6HEKipKjyuRoSqsWE8ZJyz7laO0JMlqznapIp1IemoyW7JpmzhFJ7x2S0ZLNgmalxq7YoHyt5b9wqV3P/foFrq92RkuLUZIhtM2HDe3GflLSqmT9269L8ri3z8fTPZ5wmCacu5bs1uL5E/xtMiqSA6Pbs/9EqvOD/2SrcWlLItLdQWoU3FGfvntR9nJFvDtzeHmgyz3MvZ2L9PcO42ARR6n2eSq0S/VamTdMo2BTxYO7/A9KeSRDFc4XVAAAAAElFTkSuQmCC",
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
        institution: "FIAP",
        program: "Pós-Graduação em Arquitetura de Software",
        period: "2026 — present",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqit2W7Tku3xXYwBmoJzYULnlhDh4P6mmr2hL_t-wxVg&s=10",
        note: "In progress",
    },
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
            bio: 'I believe great engineering is about more than writing great code — it\'s about empowering people, making thoughtful technical decisions, and building systems that scale, both technically and organizationally. Senior Software Engineer with 9+ years in fintech. I mentor engineers, influence architectural direction, support hiring decisions, and collaborate across Product, Design, and Backend to solve complex business challenges. My long-term goal is to lead high-performing engineering organizations where technology, people, and business strategy evolve together.',
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
            bio: 'Acredito que grande engenharia vai além de escrever bom código — é sobre empoderar pessoas, tomar decisões técnicas cuidadosas e construir sistemas que escalam, tanto tecnicamente quanto organizacionalmente. Senior Software Engineer com 9+ anos em fintech. Mentoro engenheiras e engenheiros, influencio a direção arquitetural, apoio decisões de contratação e colaboro com Produto, Design e Backend para resolver desafios complexos de negócio. Meu objetivo de longo prazo é liderar organizações de engenharia de alto desempenho onde tecnologia, pessoas e estratégia de negócios evoluam juntos.',
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
