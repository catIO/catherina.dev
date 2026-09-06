# catherina.dev

An App Store showcase and launchpad for web applications, progressive web apps, and creative tools developed by Catherina ([@catIO](https://github.com/catIO)).

## Featured Applications

1. **Bright Sight** — AI-powered classical guitar sight-reading practice app (Grades 1–8) with OSMD rendering and Web Audio metronome.
2. **ScoreTone** — High-performance, tablet-friendly PDF sheet music viewer PWA with eye-strain reduction filters and Google Drive integration.
3. **Practice Mirror** — Latency-free visual feedback and practice recording with client-side WebAssembly FFmpeg trimming and direct YouTube uploads.
4. **Practice Mate** — Focused Pomodoro interval timer, per-piece segment countdowns, routine planner, and practice logging.
5. **Spot Practice** — Focused MusicXML score passage isolation and randomized repetition practice tool.
6. **Click Up** — Advanced interleaved tempo progression and speed-building tool based on Molly Gebrian's cognitive research.
7. **Practice Koh-Pilot** — Structured repetition tracker and passage mastery tool with integrated metronome pacing.
8. **Rhythm Weaver** — All-in-one metronome with acoustically tuned, non-fatiguing ticks, polyrhythms, and visual beat indicators.
9. **Scaled** — Interactive music practice companion for mastering scales, modes, arpeggios, and finger patterns.
10. **Pitch Mate** — Chromatic instrument tuner powered by the robust YIN pitch detection algorithm.
11. **Oikaze** — Minimalist Japanese-inspired weather PWA with Open-Meteo air quality and convective storm alerts.
12. **Retrogram** — Retro square-format photo gallery connected to Sanity.io CMS and read-only API-CDN.

## Features

- **App Store Grid**: Apple-inspired squircle card layout with dynamic radial hover glow and responsive multi-column grid.
- **Interactive Detail Modal**: Rich modal sheet displaying app metadata, feature checklists, technology stack pills, and direct launch links.
- **Deep Linking**: Shareable URL hash navigation (e.g. `catherina.dev/#app=score-tone`) automatically opens the respective modal.
- **Live Search & Category Filtering**: Instant client-side search across app titles, descriptions, and tech stacks, plus category filter tabs.
- **Dark & Light Mode**: Curated theme palettes with persistent preference saving in `localStorage` and system preference detection.
- **Zero Build Friction**: Built with semantic HTML5, modern vanilla CSS with custom properties, and modular vanilla JavaScript.

## Running Locally

To preview the website locally:

```bash
npm run dev
# or
npx serve .
# or
python3 -m http.server 8000
```

## Adding or Updating Apps

App entries are configured in [`js/apps-data.js`](js/apps-data.js). Each entry supports:
- `id`: Unique slug identifier (used for deep linking `#app=<id>`)
- `title`: Display name
- `subtitle`: One-line tagline
- `category` & `categoryKey`: Categorization (`music`, `productivity`, `tools`, `creative`)
- `icon`: Relative path to squircle icon in `assets/icons/`
- `thumbnail`: Optional relative path to preview image
- `appUrl`: Live application destination URL
- `repoUrl`: GitHub repository link
- `platform`: Target platforms (e.g. `Web & Mobile PWA`)
- `status`: Deployment status (`Live Web App`, `Live PWA`, etc.)
- `description`: Full application summary
- `features`: Array of key feature bullets
- `techStack`: Array of technologies and frameworks used
