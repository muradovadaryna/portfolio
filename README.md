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

The Work section shows **featured projects**, each with a title, details and a sideways-scrolling strip of materials. They are all generated from the **`PROJECTS` list at the top of `js/main.js`**. You never need to touch the HTML.

Each project looks like this:

```js
{
  title: 'Spring *Campaign*',      // *word* = italics
  client: 'Client name',
  year: '2025',
  role: 'Creative producer',
  tags: ['Video', 'AI', 'Social'],
  description: 'The brief, the idea and what you delivered.',
  items: [
    { type: 'video', src: 'assets/projects/01/campaign-film.mp4', poster: 'assets/projects/01/campaign-film.jpg', ratio: '16:9', caption: 'Campaign film' },
    { type: 'video', src: 'assets/projects/01/reel.mp4', poster: 'assets/projects/01/reel.jpg', ratio: '9:16', phone: true, caption: 'Instagram reel' },
    { type: 'image', src: 'assets/projects/01/key-visual.jpg', ratio: '4:5', caption: 'AI key visual', prompt: 'The prompt you used…' },
    { type: 'image', src: 'assets/projects/01/post.jpg', ratio: '1:1', caption: 'Feed post' },
  ],
},
```

**Items** (as many as you like per project):

| Field | What it does |
|---|---|
| `type` | `'video'` or `'image'` |
| `src` | the file |
| `poster` | for videos: a still frame shown before it plays (recommended) |
| `ratio` | the file's shape: `'16:9'`, `'9:16'`, `'1:1'`, `'4:5'`, `'4:3'`… |
| `phone: true` | shows the item inside a phone frame, which suits reels and stories |
| `caption` | small label under the item |
| `prompt` | for AI images: adds a **Prompt** button that reveals the text |
| `firstGeneration` | optional, with `prompt`: adds a "First generation vs Final" comparison |

To add a project, copy a whole `{ … },` block and edit it. To remove one, delete its block, and to reorder, move the blocks.
The hero links (VIDEO PRODUCTION · AI CREATIVES · SOCIAL MEDIA DESIGNS) jump to the first project that has that tag.

The 5 projects included are **placeholders**. Replace them with your real work.

## 2. Where to put files

| What | Where | Tips |
|---|---|---|
| Project files | `assets/projects/01/`, `02/` … one folder per project | MP4 (H.264) for video, ideally under 10 MB each; JPG/WebP about 1600 px on the long side for images. |
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
- Libraries load from CDNs: GSAP + ScrollTrigger, Lenis and SplitType. If they can't load, the page still shows all content, just without animation.
- Users with "reduce motion" turned on get simple fades, native scrolling and no parallax.
