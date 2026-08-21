# Ikhwan Portfolio

Updated React/Tailwind portfolio for Mohamad Ikhwan, Mobile Application Developer.

## Run locally
```bash
npm install
npm start
```

## Add AI Chord Finder screenshots / video
The current project card uses `src/images/ai-chord-finder-placeholder.svg`.

1. Add your screenshot, e.g. `src/images/ai-chord-finder-home.png`.
2. In `src/components/work.jsx`, change:
```js
import chordFinder from '../images/ai-chord-finder-placeholder.svg';
```
to:
```js
import chordFinder from '../images/ai-chord-finder-home.png';
```
3. Upload your demo video somewhere public/unlisted (YouTube Unlisted works well).
4. Set `demoLink` on the AI Chord Finder project object to the video URL.

## Professional project images
Only replace the Smart Fridge / Custom Vending placeholders with company images if you are authorized to share them. Redact credentials, internal URLs, customer information, machine identifiers, and confidential data.

## Deploy
```bash
npm run deploy
```
