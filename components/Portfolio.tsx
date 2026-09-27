import { Pipeline } from "@/components/Pipeline";
import { ProjectMediaBlock } from "@/components/ProjectMediaBlock";
import { SectionNav } from "@/components/SectionNav";
import { dict, shared, type Lang } from "@/lib/content";

function DownloadIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 2.5v9M4.5 8 8 11.5 11.5 8M3 13.5h10" />
    </svg>
  );
}

function LangSwitch({ lang, label }: { lang: Lang; label: string }) {
  const isEn = lang === "en";

  return (
    <nav className="lang" aria-label={label}>
      {isEn ? (
        <span className="lang-opt is-active" aria-current="page">
          EN
        </span>
      ) : (
        <a className="lang-opt" href="/" lang="en" hrefLang="en">
          EN
        </a>
      )}
      <span className="lang-sep" aria-hidden="true">
        /
      </span>
      {isEn ? (
        <a className="lang-opt" href="/es" lang="es" hrefLang="es">
          ES
        </a>
      ) : (
        <span className="lang-opt is-active" aria-current="page">
          ES
        </span>
      )}
    </nav>
  );
}

export function Portfolio({ lang }: { lang: Lang }) {
  const t = dict[lang];

  return (
    <>
      <a className="skip" href="#work">
        {t.skip}
      </a>

      <header className="topbar shell">
        <span className="mark">{shared.name}</span>
        <div className="topbar-right">
          <LangSwitch lang={lang} label={t.langSwitchLabel} />
          <span className="status">
            <span className="dot" aria-hidden="true" />
            {t.status}
          </span>
        </div>
      </header>

      <SectionNav items={t.sectionNav.items} label={t.sectionNav.label} />

      <main className="shell">
        <section className="hero" id="top">
          <p className="eyebrow rise rise--1">
            {t.role} · {t.location}
          </p>
          <h1 className="rise rise--2">{t.headline}</h1>
          <p className="lede rise rise--3">{t.lede}</p>

          <div className="actions rise rise--4">
            <a className="btn" href={`mailto:${shared.email}`}>
              {t.actions.email}
            </a>
            <a
              className="btn btn--ghost"
              href={t.cvHref}
              download
              type="application/pdf"
            >
              <DownloadIcon />
              {t.actions.cv}
            </a>
            <a
              className="btn btn--ghost"
              href={shared.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.actions.github}
            </a>
          </div>

          <div className="rise rise--5">
            <Pipeline label={t.railLabel} />
          </div>
        </section>

        <section className="section" id="work">
          <h2 className="label">{t.sections.work}</h2>

          {t.projects.map((project) => (
            <article className="project" key={project.index}>
              <div className="project-head">
                <span className="project-index">{project.index}</span>
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-meta">{project.meta}</p>
                </div>
              </div>

              {project.media ? (
                <ProjectMediaBlock
                  media={project.media}
                  playLabel={t.playVideo}
                />
              ) : null}

              <ul className="project-points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              {project.href ? (
                <a
                  className="project-link"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.href.includes("github.com")
                    ? t.viewCode
                    : t.viewProject}{" "}
                  ↗
                </a>
              ) : null}
            </article>
          ))}
        </section>

        <section className="section" id="skills">
          <h2 className="label">{t.sections.toolkit}</h2>
          <dl>
            {t.skillGroups.map((group) => (
              <div className="skill-row" key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section" id="about">
          <h2 className="label">{t.sections.about}</h2>
          <div className="about">
            {t.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <h2 className="label">{t.sections.contact}</h2>
          <p className="contact-lede">{t.contact.lede}</p>
          <a className="contact-mail" href={`mailto:${shared.email}`}>
            {shared.email}
          </a>
          <p className="contact-alt">
            <a
              href={shared.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.github}
            </a>
            <span className="contact-sep" aria-hidden="true">
              ·
            </span>
            <a
              href={shared.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="contact-sep" aria-hidden="true">
              ·
            </span>
            <a href={t.cvHref} download type="application/pdf">
              {t.actions.cv}
            </a>
          </p>
        </section>
      </main>

      <footer className="footer shell">
        <span>
          © {new Date().getFullYear()} {shared.name}
        </span>
      </footer>
    </>
  );
}
