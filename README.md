# Glen Pringle — Personal Site (Windows XP Edition)

My personal portfolio built to look and behave like Windows XP: draggable and resizable windows,
a working start menu and taskbar, a contact form styled as Outlook Express, and a fully functional
copy of Paint.

Built with Next.js, TypeScript, Redux, Claude and a lot of CSS.

## Running locally

```
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Deployment

Deployed on Netlify. The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/) —
submissions appear in the Netlify dashboard under **Forms**, and email notifications can be enabled
there. No API keys are needed, and none are stored in the client bundle.

## Adding your own content

- **Resume** — drop a `Resume.pdf` into `public/` and point the resume handlers in
  `src/pages/index.tsx`, `components/StartMenu/StartMenu.tsx` and `src/programs/Welcome.tsx`
  back at `window.open("./Resume.pdf")`.
- **Photo gallery** — add images under `assets/` and populate `PhotoCollection` in
  `src/appData/index.tsx`. The gallery shows an empty state until it has entries.
- **Work and projects** — edit `WorkData` and `WorkAccordionContent` in `src/appData/index.tsx`.
- **Bio copy** — the About Me text lives at the top of `src/programs/Welcome.tsx`.

## Credits

- [firwer/winxpsite](https://github.com/firwer/winxpsite) — the original template this is forked from
- [botoxparty/XP.css](https://github.com/botoxparty/XP.css) — XP-styled form components
- [ShizukuIchi/winXP](https://github.com/ShizukuIchi/winXP) — general inspiration, some CSS, and the
  approach used for the Paint window
- [jspaint.app](https://jspaint.app) — the Paint implementation embedded in the Paint window
- [mrdoob/three-quake](https://github.com/mrdoob/three-quake) — the Three.js port of Quake served
  from `public/quake/`. That directory is GPL v2 (its `LICENSE` is kept alongside it) and ships the
  freely redistributable shareware `pak0.pak` (Episode 1). Original game by id Software.
