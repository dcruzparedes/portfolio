# Daniel Cruz Paredes — Portfolio

Minimal single-page portfolio. Next.js (App Router) + TypeScript, plain CSS, no UI dependencies.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit content

Everything you'd want to change lives in **`lib/content.ts`**, which holds both
languages under `dict.en` and `dict.es`:

- `shared` — name, email, GitHub (used by both languages)
- `dict.en` / `dict.es` — headline, lede, button labels, section titles,
  toolkit, About paragraphs, and the four projects
- `cvHref` — path to the CV PDF for that language (files live in `public/`)

To add a project link, add `href: "https://..."` to any project object.

### Replace the CV

Drop your new PDFs into `public/` and keep the same file names:

- `public/daniel-cruz-paredes-cv-en.pdf`
- `public/daniel-cruz-paredes-cv-es.pdf`

### Add a demo video or screenshot

Some projects aren't deployed anywhere, so a short screen recording is a good
stand-in. Add a `media` field to any project in `lib/content.ts`.

**Video (YouTube)** — upload it as **Unlisted**, then use the id from the URL
(`youtube.com/watch?v=THIS_PART`):

```ts
media: {
  kind: "video",
  provider: "youtube",
  id: "abc123XYZ",
  title: "CI/CD pipeline walkthrough",
},
```

**Video (Loom)** — needs a poster image, since Loom has no public thumbnail:

```ts
media: {
  kind: "video",
  provider: "loom",
  id: "the-loom-share-id",
  title: "Site walkthrough",
  poster: "/projects/solar-site.png",
},
```

**Screenshot** — put the file in `public/projects/`:

```ts
media: {
  kind: "image",
  src: "/projects/solar-site.png",
  alt: "Solar quote calculator",
},
```

**Vertical video (mobile demos)** — add `aspect: "portrait"` and it renders as a
9:16 card capped at 320px wide, instead of a 16:9 box with black bars:

```ts
media: {
  kind: "video",
  provider: "youtube",
  id: "abc123XYZ",
  title: "ExTra — Android app walkthrough",
  aspect: "portrait",
},
```

Videos render as a click-to-play card: nothing loads from YouTube until the
visitor presses play, so the page stays fast.

### Languages

- English: `/`
- Spanish: `/es`

Each route has its own root layout so the `<html lang>` attribute is correct.
The switch in the top bar links between them.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. Go to vercel.com → **Add New → Project** → import the repo.
3. Vercel detects Next.js automatically. Press **Deploy**.

Or, without GitHub:

```bash
npx vercel
```

## Design notes

- Tokens (color, type, spacing) are at the top of `app/globals.css`.
- The pipeline rail in the hero is the signature element. Stages are defined in `components/Pipeline.tsx`.
- Motion is CSS-only and respects `prefers-reduced-motion`.
