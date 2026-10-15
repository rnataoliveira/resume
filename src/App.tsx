import React from "react";
import TechMarquee from "./components/TechMarquee";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

type Localized = { en: string; pt: string };

type Experience = {
    company: string;
    role: Localized;
    period: Localized;
    location?: string;
    stack?: string;
    bullets: Localized[];
    logo?: string;
};

const experiences: Experience[] = [
    {
        company: "XP Investimentos",
        role: { en: "Senior Software Engineer · Acquisition", pt: "Engenheira de Software Sênior · Aquisição" },
        period: { en: "Mar 2021 — present", pt: "mar/2021 — atual" },
        location: "São Paulo, BR",
        stack: "React, TypeScript, Next.js, C#/.NET, Flutter, Azure, Jest, Cypress, Dynatrace",
        bullets: [
            { en: "Built and evolved the public acquisition websites for XP, Clear and Rico", pt: "Desenvolvi e evoluí os sites abertos de aquisição da XP, Clear e Rico" },
            { en: "Worked on the retail account opening journey, the main conversion step of the funnel", pt: "Atuei na jornada de abertura de conta PF, a principal etapa de conversão do funil" },
            { en: "Ran A/B tests and growth initiatives on acquisition journeys", pt: "Conduzi testes A/B e iniciativas de growth nas jornadas de aquisição" },
            { en: "Led the investment simulators platform (monorepo), which became the reference adopted by new products", pt: "Liderei tecnicamente a plataforma de simuladores de investimento (monorepo), que virou referência adotada por novos produtos" },
            { en: "Built internal modules in the company hub: Leads Hub manager, member-get-member (MGM) campaign management and MGM customer support", pt: "Construí módulos internos no hub da empresa: gestor do hub de leads, gestão de campanhas MGM (indique e ganhe) e atendimento a clientes do MGM" },
            { en: "Created CI/CD reports and visual standards for failure diagnosis, speeding up error analysis for the team", pt: "Criei relatórios e padrões visuais para diagnóstico de falhas no CI/CD, agilizando a análise de erros pelo time" },
            { en: "Ensured quality with design system, unit and E2E tests, and accessibility", pt: "Garanti qualidade com design system, testes unitários e E2E e acessibilidade" },
            { en: "Introduced observability with Dynatrace and DQL", pt: "Implantei observabilidade com Dynatrace e DQL" },
            { en: "Delivered back-end (C#/.NET) and mobile (Flutter) work for the team", pt: "Atuei em demandas de back-end (C#/.NET) e mobile (Flutter) do time" },
            { en: "Mentor less experienced engineers on the team, supporting their technical growth through day-to-day guidance and code reviews", pt: "Mentoro engenheiros menos experientes do time, apoiando seu desenvolvimento técnico no dia a dia e em code reviews" },
            { en: "Actively take part in the company's hiring processes for new developers, running technical interviews for Front-end and Mobile", pt: "Participo ativamente dos processos seletivos de novos desenvolvedores da empresa, conduzindo entrevistas técnicas para Front-end e Mobile" },
        ],
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACUCAMAAAAqEXLeAAAAYFBMVEUSEhL///8AAAAPDw8ICAg+Pj4fHx9ra2tycnKbm5uLi4vp6ek2NjZbW1vT09P09PRMTEyqqqrMzMzDw8MlJSXh4eG8vLxjY2MvLy8qKiqkpKSAgICSkpLa2tqwsLBHR0dCeBpwAAAFE0lEQVR4nO2c25aqMAxAa1oQRS4qN8cR//8vp4AXaFOlwUEeup/OWgeYbSglDRC26pHH9bZMq8z/IlmVltt9nPe92POfdVBBA/8yrUQV1LpkUsv/EWwxCKmzT4aScQr8214qHNK4L1n48G0lDPCLp2SxpBPdR0Bxl4z9hTpKSz/uJJN0kee6A9Kkldwv2FFa7lvJ5V3XfTg0kssOZBtKtlovXXK9Ynm22Eu7Q5xyFi88kDKUMftZvuQPOy9f8syi5UtGzFv4dSOvHI/5i57KG7j/bQOHw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcMxB99WEyovX3AS6w1sE5+R35zgr1zqp+UV/qLAd3lCmu8xnb369GbiuMA4mSzij248hPGzOKe2DFvhFj3jEDwbrBN18tOhlK8NJsAzQwx04YmnY1o7ixWAyW27R6CBnHKJpcbyRFIRgGs6hFksow084SsLA/gqCYEwsYfcpR8mWYInHcnD1gHdBg3KgWW4Ilvho68USTjm2RRLhs8N7fgnjsnwdS+Ax6ljChihJ+X4EPHTEHURrKXz0XCce0CXDijATRahlG0sB6MhLImB0yVVNmdUZHksuuMExk39lguTKo1hecUvoPt9TCdvP5KZIUkLJIEMtiz3qmLV/YopkeCVIyjwMnWfQP1B1YdAkk1DHdDf9pUiaZkOd/HQ7VZrk5rTT8K7RD3aSEpKkTEzRuUblIu7DSZPcgkCQCVp51I9Dk5TjcoTlJXsMeUTS+Pt/PiU5JpaXXqo1XlIup7S0nip5+xT3BYPPiC0k5cbqfEuWNN1fHo6DDM5OUs1j6JJMcGSM3zmyYZZpI8mZ8vMnSMpYGi3VFZqVJIN6uPEUyfuH7Drap/eWkkr2OUnSZBlrSyhLye0nJU0LQy3r/6IkXE23W9XSUlLJVSY5lgbFVdMjYGBpd3WrF+Qkx1dFgHpgaSUp0o/Nk7B+oaha2k3mygxEl4Tzu2JK0bO0kdRHEVGRjylK1b31uEUWpBdKiJLqJIHzvO+Mk+QyofT0TI0miWRTbywRSZTyiKXmNMfRy6rDLc/Q9shjjUtuGOV7kiNa2EkMdaLJq8UkpTgio0auCw1DoFtDTJEs7NfdXL1n3Rx3pnpPu4qYIllaS5ocm9ZNhup/XE2qBR0IjngtZQfMOBCaM06XTKxLQVy7Y/UcjWFeXSq6pHUV1RTHx/raZJlX1EqvdbXKkIeH1+eBDD9jdcHl33KwrZkLgdcfB2sFUyxp1NaO+Do7VNp0aRnrBKyfPRgqFs/x+LQ0LCFtiX1bR0PtR43ji5Bbcgysn9qJEx7HK3YgyCZaJvnG44THTPh4RB2bHn3UcZnkcbHf7tTn8uNa8fAy0Cl3xvTax7YPgvX6vjCqI4z0usu0FpPcH9vUCH9jwvyj8Jz2mXYbkl4h9HcwhDdjeyiZzz/T7pfFgSEQzddoazg12Uie52tZNswxbCT3szV/UxJ3G8l4rjZ6HEKipKjyuRoSqsWE8ZJyz7laO0JMlqznapIp1IemoyW7JpmzhFJ7x2S0ZLNgmalxq7YoHyt5b9wqV3P/foFrq92RkuLUZIhtM2HDe3GflLSqmT9269L8ri3z8fTPZ5wmCacu5bs1uL5E/xtMiqSA6Pbs/9EqvOD/2SrcWlLItLdQWoU3FGfvntR9nJFvDtzeHmgyz3MvZ2L9PcO42ARR6n2eSq0S/VamTdMo2BTxYO7/A9KeSRDFc4XVAAAAAElFTkSuQmCC",
    },
    {
        company: "Sovos",
        role: { en: "Software Engineer", pt: "Engenheira de Software" },
        period: { en: "Apr 2019 — Mar 2021", pt: "abr/2019 — mar/2021" },
        stack: "React, Redux, TypeScript, .NET Core, C#, Jest",
        bullets: [
            { en: "Modernized legacy tax compliance applications at a multinational company, working across front-end and back-end", pt: "Modernizei aplicações legadas de compliance fiscal de uma multinacional, atuando em front-end e back-end" },
        ],
        logo: "https://images.seeklogo.com/logo-png/36/1/sovos-logo-png_seeklogo-363466.png",
    },
    {
        company: "Webedia (Minha Vida)",
        role: { en: "Software Engineer", pt: "Engenheira de Software" },
        period: { en: "Jul 2018 — Apr 2019", pt: "jul/2018 — abr/2019" },
        bullets: [
            { en: "Templatator: content template management system and a user microservice integrated with Google", pt: "Templatator: sistema de gestão de templates de conteúdo e microsserviço de usuários integrado ao Google" },
            { en: "Sampleo: brand campaign platform built from scratch, with social media integrations", pt: "Sampleo: plataforma de campanhas de marca, construída do zero, com integrações a redes sociais" },
        ],
        logo: "https://br.webedia-group.com/wp-content/uploads/sites/13/2022/05/webedia-monogram.png",
    },
    {
        company: "Crodity",
        role: { en: "Software Developer Intern", pt: "Estágio em Desenvolvimento" },
        period: { en: "Jan 2018 — Jun 2018", pt: "jan/2018 — jun/2018" },
        stack: "React, Meteor, Node.js",
        bullets: [],
    },
];

type Education = {
    institution: string;
    program: { en: string; pt: string };
    period: string;
    logo?: string;
    note?: Localized;
};

const education: Education[] = [
    {
        institution: "FIAP",
        program: {
            en: "Postgraduate Degree in Software Architecture",
            pt: "Pós-Graduação em Arquitetura de Software",
        },
        period: "2026 — present",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqit2W7Tku3xXYwBmoJzYULnlhDh4P6mmr2hL_t-wxVg&s=10",
        note: { en: "In progress", pt: "Em andamento" },
    },
    {
        institution: "Faculdade Impacta Tecnologia",
        program: {
            en: "Systems Analysis and Development",
            pt: "Análise e desenvolvimento de sistemas",
        },
        period: "2016 — 2018",
        logo: "https://www.grupogestaorh.com.br/conteudo/publicacoes/B7d5f3946af9d1617bec63ade6980e07ff092315.png",
        note: { en: "Technology degree", pt: "Tecnólogo" },
    },
    {
        institution: "Fundação Getulio Vargas",
        program: {
            en: "Strategic Management of Information Technology",
            pt: "Gestão Estratégica de Tecnologia da Informação",
        },
        period: "2022",
        logo: "https://logodownload.org/wp-content/uploads/2016/09/fgv-logo-0.png",
    },
    {
        institution: "Conviso",
        program: {
            en: "Application Security Training (Threat Modeling, Web, API & Mobile)",
            pt: "Application Security Training (Modelagem de Ameaças, Web, API e Mobile)",
        },
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
            headline: 'Senior Software Engineer | Front-end | React · TypeScript · Next.js',
            bio: 'Front-end software engineer with 8+ years of experience, 5+ of them in the financial market at XP Investimentos. I build digital customer acquisition journeys for XP, Clear and Rico: public websites, retail account opening and investment simulators. My focus is customer experience, quality (unit and E2E tests, accessibility) and scalable front-end architecture (monorepo and design system). I also work on back-end (C#/.NET) and mobile (Flutter) when needed. Currently pursuing a Postgraduate Degree in Software Architecture at FIAP.',
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
            headline: 'Engenheira de Software Sênior | Front-end | React · TypeScript · Next.js',
            bio: 'Engenheira de software front-end com 8+ anos de experiência, sendo 5+ no mercado financeiro na XP Investimentos. Construo jornadas digitais de aquisição de clientes para XP, Clear e Rico: sites abertos, abertura de conta PF e simuladores de investimento. Meu foco é experiência do cliente, qualidade (testes unitários, E2E e acessibilidade) e arquitetura front-end escalável (monorepo e design system). Também atuo em back-end (C#/.NET) e mobile (Flutter) quando necessário. Pós-graduanda em Arquitetura de Software na FIAP.',
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
                    <p className="mt-2 text-lg font-medium accent-text">{L.headline}</p>
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
                                                {exp.role[lang]} — <span className="text-slate-600 font-medium">{exp.company}</span>
                                            </div>
                                            <div className="text-sm text-slate-500">{exp.period[lang]} {exp.location ? `· ${exp.location}` : null}</div>
                                            {exp.stack && <div className="text-sm text-slate-500 italic">{exp.stack}</div>}
                                        </div>
                                    </div>
                                </div>
                                {exp.bullets.length > 0 && (
                                    <ul className="mt-3 list-disc ml-5 text-slate-600">
                                        {exp.bullets.map((b) => (
                                            <li key={b.en}>{b[lang]}</li>
                                        ))}
                                    </ul>
                                )}
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
                                    <div className="font-medium">{e.institution} — {e.program[lang]}</div>
                                    <div className="text-sm text-slate-500">{e.period}</div>
                                    {e.note && <div className="text-sm text-slate-500 mt-1">{e.note[lang]}</div>}
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
