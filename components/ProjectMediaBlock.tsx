"use client";

import { useState } from "react";
import type { ProjectMedia } from "@/lib/content";

function posterCandidates(media: ProjectMedia, isPortrait: boolean): string[] {
  if (media.kind === "image") return [];

  // A custom poster always wins.
  if (media.poster) return [media.poster];

  if (media.provider !== "youtube") return [];

  // YouTube publishes extra "original aspect ratio" thumbnails for vertical
  // videos. They fit a 9:16 card exactly, unlike the default 16:9 one.
  return isPortrait
    ? [
        `https://img.youtube.com/vi/${media.id}/oar2.jpg`,
        `https://img.youtube.com/vi/${media.id}/oardefault.jpg`,
      ]
    : [
        // hqdefault is 4:3 with black bars, but object-fit: cover crops them.
        // It's higher resolution than mqdefault and always available.
        `https://img.youtube.com/vi/${media.id}/hqdefault.jpg`,
        `https://img.youtube.com/vi/${media.id}/mqdefault.jpg`,
      ];
}

export function ProjectMediaBlock({
  media,
  playLabel,
}: {
  media: ProjectMedia;
  playLabel: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [posterIndex, setPosterIndex] = useState(0);

  const isPortrait = media.kind === "video" && media.aspect === "portrait";
  const candidates = posterCandidates(media, isPortrait);
  const posterSrc = candidates[posterIndex];

  if (media.kind === "image") {
    return (
      <figure className="media-figure">
        <div className="media media--image">
          <img src={media.src} alt={media.alt} loading="lazy" />
        </div>
        {media.caption ? (
          <figcaption className="media-caption">{media.caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  const figureClass = `media-figure${
    isPortrait ? " media-figure--portrait" : ""
  }`;
  const boxClass = `media media--video${isPortrait ? " is-portrait" : ""}`;

  return (
    <figure className={figureClass}>
      <div className={boxClass}>
        {playing ? (
          <iframe
            src={
              media.provider === "youtube"
                ? `https://www.youtube-nocookie.com/embed/${media.id}?autoplay=1&rel=0`
                : `https://www.loom.com/embed/${media.id}?autoplay=1`
            }
            title={media.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {posterSrc ? (
              <img
                src={posterSrc}
                alt=""
                loading="lazy"
                // If a thumbnail size doesn't exist, try the next one and
                // finally fall back to a plain card with just the play button.
                onError={() => setPosterIndex((i) => i + 1)}
              />
            ) : null}
            <button
              type="button"
              className="media-play"
              onClick={() => setPlaying(true)}
              aria-label={`${playLabel}: ${media.title}`}
            >
              <span className="media-play-icon" aria-hidden="true">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M5.5 3.3v9.4l7.5-4.7z" />
                </svg>
              </span>
            </button>
          </>
        )}
      </div>
      {media.caption ? (
        <figcaption className="media-caption">{media.caption}</figcaption>
      ) : null}
    </figure>
  );
}
