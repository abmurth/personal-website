import Image from "next/image";

type ProfileItem = {
  accent?: string;
  body?: string;
  date?: string;
  link?: string;
  logo?: string;
  logoClassName?: string;
  logoSrc?: string;
  role: string;
  title: string;
};

type ProfileSection = {
  interactive?: boolean;
  items: ProfileItem[];
  title: string;
  tone: "blue" | "emerald" | "violet";
};

export default function Home() {
  const links = [
    {
      href: "https://www.linkedin.com/in/abhay-murthy",
      label: "LinkedIn",
    },
    {
      href: "/AbhayMurthy_ResearchResume.pdf",
      label: "Resume",
    },
    {
      href: "https://www.instagram.com/abhaymuurthy",
      label: "Instagram",
    },
    {
      href: "mailto:abhaymurthy1@gmail.com",
      label: "Email",
    },
  ];

  const profileSections: ProfileSection[] = [
    {
      title: "Experience",
      tone: "blue",
      items: [
        {
          accent: "blue",
          body: "~$65k worth of books donated to underprivileged kids and prisons in 4 countries. Lead team of 11 to engage 200+ volunteers. Authored, filed, advocated TX SB203 with Texas Senator Jose Menendez.",
          date: "Jul 2023 - Present",
          logo: "T4T",
          logoClassName: "t4t-logo",
          logoSrc: "/textbooks-for-tomorrow-logo.jpg",
          role: "Co-Founder",
          title: "TextbooksForTomorrow 501(c)(3)",
        },
        {
          accent: "red",
          body: "Modeled BDNF signaling with an ODE-based dynamical system in Python to identify a potential biomarker for neurodegeneration. Presented @ SfN 2025.",
          date: "Jun 2025 - Aug 2025",
          logo: "BU",
          logoSrc: "/bu-logo.jpg",
          role: "Research Intern (RISE)",
          title: "Boston University",
        },
        {
          accent: "gold",
          body: "Constructed comprehensive dataset of Ballon d'Or top three nominees. Found four defining factors of Ballon d'Or winners.",
          date: "Jun 2024 - Aug 2024",
          logo: "UTD",
          logoSrc: "/utd-logo.png",
          role: "Research Intern",
          title: "University of Texas at Dallas",
        },
      ],
    },
    {
      title: "Education",
      tone: "emerald",
      items: [
        {
          accent: "berkeley",
          body: "A prestigious and highly selective dual-degree program (~1% acceptance rate) uniting UC Berkeley's College of Engineering with the Haas School of Business. Selected as one of approximately 50 students worldwide.",
          date: "Aug 2026 - May 2030",
          logo: "MET",
          logoClassName: "education-logo berkeley-met-logo",
          logoSrc: "/berkmetforpw.jpg",
          role: "B.S. in Bioengineering, B.S. in Business Administration",
          title: "University of California, Berkeley (M.E.T. Program)",
        },
        {
          accent: "liberty",
          body: "Activities and societies: Varsity Soccer, DECA (Co-President), CS Club (VP of Curriculum), BPA, Math UIL, PTSA, Red Cross IHL, National Honor Society \n\n Top 1% | GPA 4.0/4.0 | SAT: 1570 \n\n Coursework:  Multivariable Calculus, Differential Equations, Data Structures & Algorithms, AP Calculus BC, AP Statistics, AP Physics C, AP Biology, AP Computer Science A, AP Macroeconomics, Statistical Learning with Python (Stanford)",
          date: "Aug 2022 - May 2026",
          logo: "LHS",
          logoClassName: "education-logo liberty-logo",
          logoSrc: "/libertyhslogoforpw.png",
          role: "High School Diploma",
          title: "Liberty High School",
        },
      ],
    },
    {
      title: "Awards",
      tone: "violet",
      interactive: false,
      items: [
        {
          date: "2026",
          role: "Top 6 out of 770. $5500 prize.",
          title: "Jane Street M3C International Finalist & Top Presenter",
        },
        {
          date: "2025-2026",
          role: "First in school history to win ICDC DECA Glass. 3rd out of ~150k. 2x ICDC Qualifier",
          title: "DECA ICDC 3rd Place Glass Winner (TTDM)",
        },
        {
          date: "2025",
          role: "2nd out of ~5000",
          title: "BPA 2nd Place @ National Leadership Conference (SQL Database Programming)",
        },
        {
          date: "2025",
          role: "In collaboration with Texas Senator Jose Menendez",
          title: "Authored Texas State Bill 203",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden px-4 pb-10 pt-20 text-white sm:px-8 lg:px-16">
      <header className="site-header fixed inset-x-0 top-0 z-50 px-4 py-5 sm:px-8 lg:px-16">
        <nav aria-label="Social links" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="top-link group"
              target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
              rel={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "noreferrer" : undefined}
            >
              <span>{link.label}</span>
              <span aria-hidden="true" className="top-link-arrow">
                {"\u2197"}
              </span>
            </a>
          ))}
        </nav>
      </header>

      <section className="profile-shell mx-auto flex min-h-[calc(100vh-5rem)] w-full flex-col justify-start gap-12 pt-15">
        <div className="browser-hero relative w-full overflow-hidden bg-[#171717]">
          <div className="browser-chrome relative flex h-10 items-center justify-between px-5">
            <div className="flex items-center gap-2.5">
              <span className="h-3 w-3 rounded-full bg-[#e8574f] shadow-[0_0_14px_rgba(232,87,79,0.68)]" />
              <span className="h-3 w-3 rounded-full bg-[#caa143] shadow-[0_0_14px_rgba(202,161,67,0.56)]" />
              <span className="h-3 w-3 rounded-full bg-[#38a94f] shadow-[0_0_14px_rgba(56,169,79,0.54)]" />
            </div>

            <span className="text-[1.8rem] font-light leading-none text-white/18">+</span>
          </div>

          <div className="intro-panel relative grid min-h-[500px] items-start gap-8 px-6 pb-24 pt-8 sm:px-9 sm:pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-12 lg:pt-12">
            <div className="headshot-frame relative aspect-square w-full overflow-hidden rounded-[22px] bg-white/[0.04]">
              <Image
                src="/abhay_headshot.jpg"
                alt="Abhay Murthy"
                width={1236}
                height={1648}
                priority
                className="h-full w-full object-cover object-[50%_42%]"
              />
            </div>

            <div className="relative flex flex-col justify-start pt-0">
              <h1 className="intro-title whitespace-nowrap text-[clamp(1.85rem,3.7vw,3.75rem)] font-semibold leading-none tracking-normal text-white">
                Hey, I&apos;m Abhay!{" "}
                <span className="wave" aria-hidden="true">
                  {"\uD83D\uDC4B"}
                </span>
              </h1>

              <div className="intro-rule mt-6" />

              <div className="intro-copy mt-6 max-w-2xl text-[clamp(0.98rem,1.3vw,1.18rem)] leading-[1.65] text-white/66">
                <p>
                  I&apos;m an incoming freshman at UC Berkeley studying
                  Bioengineering and Business as part of the MET Program. I&apos;m
                  interested in neurotech, product development, and therapeutics.
                </p>
              </div>

              <nav aria-label="Profile sections" className="intro-links mt-8">
                <a href="#experience" className="intro-link">Experience</a>
                <a href="#education" className="intro-link">Education</a>
                <a href="#awards" className="intro-link">Awards</a>
              </nav>
            </div>

          </div>

          <div className="bounce-arrow" aria-hidden="true">
            <span />
          </div>
        </div>

        <div className="profile-card-stack mt-12">
          {profileSections.map((section) => (
            <div className="project-card-outline" id={section.title.toLowerCase()} key={section.title}>
              <div className="project-glare project-glare-outer" />
              <article className={`project-card project-card-${section.tone}`}>
                <div className="project-glare project-glare-inner" />
                <div className="project-card-color" />

                <div className="project-card-top">
                  <div className="project-card-title-row">
                    <h2 className="project-card-title">{section.title}</h2>
                  </div>
                </div>

                <div className={`experience-list${section.interactive === false ? " awards-list" : ""}`}>
                  {section.items.map((item) => (
                    section.interactive === false ? (
                      <div className="award-item" key={item.title}>
                        <span className="experience-heading award-heading">
                          <span className="experience-name">{item.title}</span>
                          <span className="experience-role">{item.role}</span>
                        </span>
                        {item.date ? <span className="experience-date award-year">{item.date}</span> : null}
                      </div>
                    ) : (
                      <details className="experience-tile" key={item.title}>
                        <summary>
                          <span
                            className={`experience-logo ${item.accent ?? ""}${item.logoSrc ? " has-image" : ""}`}
                          >
                            {item.logoSrc ? (
                              <Image
                                src={item.logoSrc}
                                alt={`${item.title} logo`}
                                width={80}
                                height={80}
                                className={`experience-logo-image ${item.logoClassName ?? ""}`}
                              />
                            ) : (
                              <span>{item.logo}</span>
                            )}
                          </span>
                          <span className="experience-heading">
                            <span className="experience-name">{item.title}</span>
                            <span className="experience-role">{item.role}</span>
                          </span>
                          {item.date ? <span className="experience-date">{item.date}</span> : null}
                        </summary>
                        {item.body ? (
                          <p>
                            {item.body}
                            {item.link ? (
                              <a href="#" className="experience-link">
                                {" "}
                                {item.link} {"\u2197"}
                              </a>
                            ) : null}
                          </p>
                        ) : null}
                      </details>
                    )
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
