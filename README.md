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

## 1. Add or replace projects

Every project card is generated from the **`PROJECTS` list at the top of `js/main.js`**. You never need to touch the HTML.

Each project is one block in curly braces `{ … }`. Copy an existing block, paste it where you want the card to appear, and change the values:

```js
{
  category: 'video',                         // 'video', 'ai' or 'social'
  title: 'Spring Campaign Film',
  industry: 'Fashion',
  format: 'Campaign film',
  video: 'assets/videos/video-01.mp4',       // or use `image:` for a still
  poster: 'assets/images/poster-01.jpg',     // still frame shown before playing
},
```

Extras per category:

| Category | Extra fields |
|---|---|
| `video` | `ratios: { '16:9': '…mp4', '1:1': '…mp4', '9:16': '…mp4' }` gives a separate file for each button of the ratio switcher. It's optional: any missing ratio uses `video`, cropped to fit. |
| `ai` | `prompt: '…'` is the text typed out when someone clicks **Prompt**. `firstGeneration: '…jpg'` is optional and adds a "First generation vs Final" comparison. |
| `social` | `image` or `video` + `poster`. These are shown inside phone frames, so a 9:16 format works best. |

To remove a project, delete its block. To reorder, move the blocks.
Keep the comma after each `}`.

The 9 projects included are **placeholders**. Replace them with your real work.

## 2. Where to put files

| What | Where | Tips |
|---|---|---|
| Videos | `assets/videos/` | MP4 (H.264). Keep files short and compressed, ideally under 10 MB each. |
| Posters / images | `assets/images/` | JPG or WebP, about 1600 px on the long side. |
| Portrait | `assets/images/portrait.jpg` | Portrait orientation (4:5). It's shown in black and white and turns to color on hover. |
| CV | `assets/cv/Daryna_Muradova_CV.pdf` | Use exactly this file name, or change `cv` in `SITE`. |
| Share image | `assets/images/og-image.jpg` | 1200 × 630, shown when the link is shared. |
| Favicon | `assets/images/favicon.svg` | Replace with your own icon. |
| Hero background video (optional) | e.g. `assets/videos/hero-loop.mp4` | Then set `heroVideo` in `SITE`. |

If a file is missing, the site shows a neutral placeholder with the file path it expects, so nothing looks broken.

## 3. Email, LinkedIn and Instagram links

Edit the **`SITE` block in `js/main.js`**. It updates every link on the page (header, contact, footer):

```js
const SITE = {
  email: 'hello@example.com',
  linkedin: 'https://linkedin.com/in/your-profile',
  instagram: 'https://instagram.com/your-handle',
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
- Libraries load from CDNs: GSAP + ScrollTrigger + Flip, Lenis and SplitType. If they can't load, the page still shows all content, just without animation.
- Users with "reduce motion" turned on get simple fades, native scrolling and no parallax.
