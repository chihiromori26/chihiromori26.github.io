# Chihiro Mori — Portfolio Website

A personal academic portfolio site: About, Research & Projects, Education, Culture & Talks, and Contact. Built with plain HTML, CSS, and JavaScript — no build tools required — designed to be hosted for free on GitHub Pages.

## Files

```
index.html          → the whole site (one page, anchor-linked sections)
css/style.css        → all styling
js/script.js          → nav toggle, scroll progress bar, scroll-reveal animation
assets/Chihiro Mori Resume May 31 2026.pdf   → downloadable résumé (linked from the hero button)
assets/images/        → put your profile photo here (see below)
```

## 1. Add your photo

Save a square-ish headshot as:

```
assets/images/profile.jpg
```

If this file is missing, the site automatically shows an elegant "CM" placeholder circle instead — so nothing breaks either way. Once you drop in the real photo, refresh the page and it will appear.

## 2. Personalize the placeholders

Open `index.html` in any text editor and update:

- **GitHub link** — currently points to `https://github.com/chihiromori26`. Update if your GitHub username differs.
- Any project descriptions, awards, or links you want to add or adjust as your résumé grows.

## 3. Preview locally (optional but recommended)

You don't need any special software — just open `index.html` directly in your browser by double-clicking it. Everything (fonts, layout, animations) will work.

## 4. Publish for free on GitHub Pages

### Step 1 — Create the special repository

1. Log into GitHub.
2. Click **New repository**.
3. Name it **exactly**: `chihiromori26.github.io` (replace `chihiromori26` with your actual GitHub username — the repo name must match your username exactly, followed by `.github.io`).
4. Set it to **Public**.
5. Do **not** initialize with a README (you already have one) — just click **Create repository**.

### Step 2 — Upload your site

**Option A — GitHub's web interface (easiest, no command line):**

1. On your new repo's page, click **uploading an existing file**.
2. Drag in `index.html`, the `css/`, `js/`, and `assets/` folders, and `README.md`.
3. Scroll down, add a commit message like "Initial site", and click **Commit changes**.

**Option B — Git command line:**

```bash
cd path/to/this/folder
git init
git remote add origin https://github.com/chihiromori26/chihiromori26.github.io.git
git add .
git commit -m "Initial site"
git branch -M main
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. In your repository, go to **Settings → Pages**.
2. Under **Source**, select **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then click **Save**.
4. Wait 1–2 minutes. Your site will be live at:

```
https://chihiromori26.github.io
```

(GitHub emails you or shows a green checkmark in the Pages settings once it's live.)

### Step 4 — Future updates

Any time you edit a file and push (or re-upload it via the web interface), GitHub Pages automatically rebuilds and republishes within a minute or two — no extra steps needed.

## 5. Nice-to-haves for later

- **Custom domain**: if you ever buy a domain (e.g. `chihiromori.com`), GitHub Pages supports pointing it here for free — see _Settings → Pages → Custom domain_.
- **Google Analytics / Plausible**: add a tracking snippet in `index.html`'s `<head>` if you want visitor stats.
- **Blog**: if you later want to publish write-ups, consider adding a `/blog/` folder with individual HTML pages, or migrating to Jekyll (GitHub Pages supports it natively).
- **SEO**: the `<meta name="description">` tag in `index.html` is already set — update it if your focus areas change.
