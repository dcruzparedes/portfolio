import { ImageResponse } from "next/og";
import { dict, shared } from "@/lib/content";

const stages = ["COMMIT", "BUILD", "TEST", "PUSH", "DEPLOY"];

/**
 * Renders the Open Graph card used for link previews.
 * 1200x630 is the size LinkedIn, X and Slack expect.
 */
export function ogImage(lang: "en" | "es") {
  const t = dict[lang];
  const last = stages.length - 1;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F6F6F4",
          padding: "76px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 24,
              letterSpacing: 4,
              color: "#6C7075",
            }}
          >
            {shared.name.toUpperCase()}
          </span>
          <span style={{ fontSize: 24, letterSpacing: 4, color: "#6C7075" }}>
            {lang.toUpperCase()}
          </span>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 64,
              lineHeight: 1.12,
              letterSpacing: -2,
              fontWeight: 700,
              color: "#15171A",
              maxWidth: 960,
            }}
          >
            {t.headline}
          </span>
          <span style={{ marginTop: 26, fontSize: 27, color: "#3D4147" }}>
            {t.role} · {t.location}
          </span>
        </div>

        {/* pipeline rail */}
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          {stages.map((stage, i) => (
            <div
              key={stage}
              style={{ display: "flex", alignItems: "flex-start" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    background: i === last ? "#35A56A" : "#15171A",
                  }}
                />
                <span
                  style={{
                    marginTop: 13,
                    fontSize: 16,
                    letterSpacing: 2,
                    color: i === last ? "#15171A" : "#6C7075",
                  }}
                >
                  {stage}
                </span>
              </div>
              {i < last ? (
                <div
                  style={{
                    width: 74,
                    height: 1,
                    marginTop: 6,
                    background: "#C9CBC6",
                  }}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
