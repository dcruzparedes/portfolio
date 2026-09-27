"use client";

import { useEffect, useState } from "react";

type NavItem = { id: string; label: string };

export function SectionNav({
  items,
  label,
}: {
  items: NavItem[];
  label: string;
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const ids = items.map((item) => item.id).join("|");

  useEffect(() => {
    const sections = ids
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      // A thin band at the vertical centre of the viewport decides the
      // active section, so the highlight changes as a section crosses it.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ids]);

  return (
    <>
      {/* Right rail — wide screens */}
      <nav className="secnav" aria-label={label}>
        <ul>
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  className={`secnav-link${isActive ? " is-active" : ""}`}
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className="secnav-node" aria-hidden="true" />
                  <span className="secnav-label">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Horizontal sticky bar — narrow screens */}
      <nav className="secbar" aria-label={label}>
        <ul>
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  className={`secbar-link${isActive ? " is-active" : ""}`}
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
