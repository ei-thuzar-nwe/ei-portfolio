# Ei Thuzar Nwe — Portfolio

A responsive, static HTML/CSS/JavaScript portfolio prepared for GitHub Pages.

## Preview locally

From this folder, run one of the following:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/ei-portfolio/ if the folder is served from its parent directory, or http://localhost:8000/ if the server is started inside this folder.

You can also use the VS Code Live Server extension.

## Publish to GitHub Pages

1. Review the content and replace all clearly marked placeholders.
2. The CV PDF is included at `assets/Ei-Thuzar-Nwe-CV.pdf`.
3. Add real project repository URLs in `script.js`, in the `projectRepositories` object.
4. Add your email address in the Contact section of `index.html` when you are ready.
5. Test the website locally.
6. Copy the updated files into your existing `ei-portfolio` repository. Do not delete the old version until you have tested the new one locally.
7. Commit and push only when you explicitly choose to do so.
8. In GitHub, open **Settings → Pages**. For this plain static website, select **Deploy from a branch**, choose your publishing branch (usually `main`) and the root folder (`/(root)`), then save.
9. Wait for the Pages deployment to finish and open `https://ei-thuzar-nwe.github.io/ei-portfolio/`.
10. Verify the page, images, CV link, and mobile navigation after deployment.

No build step or dependency installation is required. Relative paths are used for assets, so they work on the repository project URL without a Vite base setting.

## Files

- `index.html` — all portfolio sections and metadata
- `styles.css` — responsive design, project illustrations, focus states, reduced-motion support
- `script.js` — mobile navigation, dynamic footer year, CV download link, central repository URL configuration
- `assets/favicon.svg` — initials favicon
- `assets/data-engineering-level-1-certificate.pdf` and `.png` — provided RIG certificate and preview
- `assets/asean-data-science-explorers-2026-certificate.pdf` and `.png` — provided ASEAN Data Science Explorers certificate and preview
- `assets/Ei-Thuzar-Nwe-CV.pdf` — your CV PDF

## Content to confirm

- Your exact contributions to each team project
- Technologies actually used for the Smart Streetlight project
- Project repository URLs
- Data-analysis dataset, notebook, and actual findings
- Machine-learning models and evaluation results
- Any genuine certificate verification links
- Professional contact email
