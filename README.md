# Danish Lakhanpal — portfolio

A static site with no frameworks and no dependencies. The live address is **https://danishlakhanpal.github.io**.

## Edit the content

1. Open `js/content.js` and change the text. Everything on the page comes from this file.
2. Run `node build.js`. This writes the content into `index.html` as real HTML, which is what Google, LinkedIn and recruiter tools read.
3. Commit and push. GitHub Pages updates within a minute or two.

If you forget step 2, the page still works for visitors, because the browser fills in the content. Search engines and link previews will show the old text until you run it.

## Before going live

- Add your general (not tailored) CV as `assets/Danish_Lakhanpal_CV.pdf`.
- **Contact form:** sign up free at formspree.io, create a form, and paste its ID into `formspreeId` in `content.js`. Until you do, the form opens the visitor's email app instead.
- **Optional logos:** add `microsoft.svg`, `linkedin.svg` and `peoplecert.svg` to `assets/logos`, taken from each company's official brand page.
- **Optional details:** fill in `rightToWork`, `noticePeriod`, `drivingLicence`, `linkedin`, and each certificate's `verifyUrl` in `content.js`.

## Hosting on GitHub Pages (free)

1. Create a **new public repository** named exactly `danishlakhanpal.github.io`. Use a fresh repo, not the old Emergent one, so the old history doesn't come with it.
2. Upload every file in this folder to the root of that repo, including `.nojekyll`.
3. Go to Settings, then Pages, set Source to **Deploy from a branch**, and choose Branch `main` / `(root)`.
4. The site is live at https://danishlakhanpal.github.io.

Then delete or archive the old `Danish-Portfolio` repository.

### Alternative: keep the repo private (Netlify or Cloudflare Pages)

GitHub Pages needs a public repo on the free plan. To keep the repo private, connect it to Netlify (`yourname.netlify.app`) or Cloudflare Pages (`yourname.pages.dev`) instead, and set the build command to `node build.js` with publish directory `/`. Then change the `canonical` and `og:image` addresses in `index.html` to the new domain.

## Files

| Path | What it is |
|---|---|
| `index.html` | The page (sections are filled in by `build.js`) |
| `js/content.js` | **All your text — the only file you normally edit** |
| `js/render.js` | Turns content into HTML (used by `build.js` and the browser) |
| `js/main.js` | Skill filter and search, "show all" buttons, contact form |
| `css/styles.css` | Design |
| `assets/` | Portrait, favicon, link-preview image, logos, CV |
| `build.js` | Run with `node build.js` after editing content |

Cisco, Atlassian and Anthropic logos are from Simple Icons (CC0). The trademarks belong to their owners.
