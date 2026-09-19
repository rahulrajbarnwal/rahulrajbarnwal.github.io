# rahulrajbarnwal.github.io

Your resume + portfolio site, ready for GitHub Pages. Everything is plain HTML/CSS/JS —
no build step, no npm install, nothing to compile.

## What's in this folder

- `index.html` — the site itself (single file, self-contained)
- `resume.pdf` — one-page PDF resume, linked from the "Download Resume" buttons
- `resume.html` — the source used to generate resume.pdf (edit this, not the PDF, if you want to change the resume)
- `assets/` — empty folder for your profile photo (see below)

## 1. Create the repo

Your GitHub Pages URL is always `https://<username>.github.io`, and for the *root*
version of that URL (not a sub-path), the repo must be named **exactly**:

```
rahulrajbarnwal.github.io
```

Go to https://github.com/new, create a repo with that exact name, under your account
(`github.com/rahulrajbarnwal`), public, no README/gitignore needed (we already have files).

## 2. Push these files

From this folder, run:

```bash
git init
git add index.html resume.pdf resume.html assets
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/rahulrajbarnwal/rahulrajbarnwal.github.io.git
git push -u origin main
```

(If you already cloned the empty repo instead, just copy these files into that folder
and run `git add . && git commit -m "Initial portfolio site" && git push` from inside it.)

## 3. Turn on Pages

Repos named `<username>.github.io` are usually published automatically, but double-check:

1. On GitHub, open the repo → **Settings** → **Pages** (left sidebar).
2. Under "Build and deployment", **Source** should be "Deploy from a branch".
3. **Branch** should be `main` / `/ (root)`. Save if you had to change anything.
4. Wait 1–2 minutes, then visit **https://rahulrajbarnwal.github.io**

## 4. Profile photo & hero background

Your photo is already wired in at `assets/profile.png` — background removed (transparent), jacket
recolored to match the site's purple accent — and shown in the hero avatar circle at 2x its original
size. To swap it, replace that file with a new transparent PNG (keep it square, ideally 500–600px)
under the same name.

The hero section also has a photo background (`assets/hero/background.jpg`) dimmed with a dark
gradient overlay so it stays subtle and consistent with the rest of the dark theme. Swap that file
for a different photo any time — no HTML/CSS changes needed, the overlay is defined in `index.html`'s
`.hero` style block.

## 5. Things worth double-checking / personalizing

Everything on the site was pulled from your real LinkedIn profile (Times Internet, Amanzi,
Incaendo, IndiCorp, Fusion, DishTV, JIIT), so the facts should already be accurate — but a
few things I could **not** verify and left as-is, so please check them:

- **Play Store links** on the Projects section (ET Markets, Economic Times, Domino's
  Indonesia) currently point to Play Store *search* results, not the exact app listing —
  I didn't have the exact package IDs. Open each app on your phone/Play Store, copy the
  real URL, and swap it into the matching `<a class="proj-link" href="...">` in `index.html`.
- **Education** only shows "Jaypee Institute of Information Technology (JIIT), Noida" —
  I didn't have your exact degree name or graduation year from LinkedIn, so add them
  yourself in the Education section if you want them shown (e.g. "B.Tech, Computer
  Science · 2013–2017").
- **GitHub username** is set to `rahulrajbarnwal` throughout (nav bar, hero buttons,
  footer, and the repo name itself). If that's not your actual GitHub handle, do a
  find-and-replace across `index.html` and `README.md` before pushing.
- The **ASHA Kiosk App** and **VerifHire** project cards have no external link since
  they're enterprise/government products, not public Play Store apps — that's expected.

## 6. Updating the site later

Edit `index.html` directly (all content is plain text inside the HTML — experience
bullets, skills, stats, etc.), commit, and push. GitHub Pages rebuilds in under a minute.
To update the resume PDF, edit `resume.html` and re-render it to `resume.pdf` (any
"print to PDF" from a browser works, or ask me to regenerate it).
