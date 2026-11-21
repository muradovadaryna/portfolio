# Daryna Muradova — Portfolio

A single-page portfolio site. Plain HTML, CSS and JavaScript with no build step. Open `index.html` in a browser, or upload the folder to any static host.

```
index.html          ← page structure and copy
css/styles.css      ← all styling (colors and fonts are at the top, in :root)
js/main.js          ← projects, links, and all animation
assets/videos/      ← your video files (.mp4)
assets/images/      ← posters, AI images, social designs, portrait, og-image
assets/cv/          ← Daryna_Muradova_CV.pdf
```

---

## 1. Add or replace work

The Work section is split into categories. Right now there is one: **Social Media Designs**, a 3-column grid of 4:5 posts (1080 × 1350 px).
The posts come from the **`SOCIAL_POSTS` list at the top of `js/main.js`**. You never need to touch the HTML.

```js
const SOCIAL_POSTS = [
  { src: 'assets/social/post-01.webp', alt: 'Offscript 2027 conference announcement poster' },
  { src: 'assets/social/post-02.webp', alt: 'Offscript 2027 speaker announcement, Maya Lorenz' },
  // …
];
```

- **Add a post:** put the image in `assets/social/`, copy a line, and change `src` (and `alt`, a short description for screen readers).
- **Remove a post:** delete its line. To reorder, move the lines.
- **Optional** `title: '…'` is shown in the full-screen viewer.

Images look best at exactly 1080 × 1350. WebP or JPG keeps the site fast. The site loads only the files listed in `SOCIAL_POSTS`, so other files in the folder don't slow it down.

The hero links (VIDEO PRODUCTION · AI CREATIVES · SOCIAL MEDIA DESIGNS) jump to their category, or to Work while that category isn't on the page yet.

## 2. Where to put files

| What | Where | Tips |
|---|---|---|
| Social posts | `assets/social/` | 1080 × 1350, WebP or JPG. |
| Portrait | `assets/images/portrait.jpg` | Portrait orientation (4:5). It's shown in black and white and turns to color on hover. |
| CV | `assets/cv/Daryna_Muradova_CV.pdf` | Use exactly this file name, or change `cv` in `SITE`. |
| Share image | `assets/images/og-image.jpg` | 1200 × 630, shown when the link is shared. |
| Favicon | `assets/images/favicon.svg` | Replace with your own icon. |
| Hero background video (optional) | e.g. `assets/videos/hero-loop.mp4` | Then set `heroVideo` in `SITE`. |

If a file is missing, the site shows a neutral placeholder with the file path it expects, so nothing looks broken.

## 3. Email and LinkedIn links

Edit the **`SITE` block in `js/main.js`**. It updates every link on the page (header, contact, footer):

```js
const SITE = {
  email: 'muradovadarina900@gmail.com',
  linkedin: 'https://www.linkedin.com/in/daryna-muradova-945079234/',
  cv: 'assets/cv/Daryna_Muradova_CV.pdf',
  heroVideo: '',
  timeZone: 'Europe/Ljubljana',
};
```

The same placeholders also appear in `index.html` as a fallback for visitors with JavaScript turned off. Search for `REPLACE` to update them too.

The toolkit words are in the `TOOLKIT` list just below `SITE`.

## 4. Deploy

**GitHub Pages:** in the repository go to *Settings → Pages*, set *Source: Deploy from a branch*, choose branch `main` and folder `/ (root)`, then save. The site goes live at `https://<username>.github.io/portfolio/`.

**Netlify:** go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the whole project folder onto the page. Or use *Add new site → Import from Git* and pick this repo, leave the build command empty and set the publish directory to `/`.

**Vercel:** go to *Add New → Project*, import this repo, set *Framework preset: Other*, leave the build command empty and deploy.

Every push to `main` then updates the live site automatically.

---

### Notes
- Libraries load from CDNs: GSAP + ScrollTrigger, Lenis and SplitType. If they can't load, the page still shows all content, just without animation.
- Users with "reduce motion" turned on get simple fades, native scrolling and no parallax.
