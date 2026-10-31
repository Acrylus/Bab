# Acrylus Studio

A pink-accented, long-distance love-story slideshow for Divis. No login or backend is included.

## Run locally

```bash
npm install
npm start
```

## Story media

The slideshow uses assets from `img/` and Angular copies that folder unchanged to `/img` during builds. The first-date memory, two videos, and all five poem pages are already included in the story.

To add, remove, or reorder slides, edit the `slides` array in `src/app/app.component.ts`. Keep image/video files in the existing `img/` subfolders and use paths beginning with `/img/`.

The theme-song link opens Spotify search for “Always” by Atlantic Starr. To play your own audio file on the page, add it at `img/audio/always.mp3` and set `soundtrackUrl` to `/img/audio/always.mp3` in `src/app/app.component.ts`.
