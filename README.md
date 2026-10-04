# Joseph Tang — Academic Website

A personal academic website built with [al-folio](https://github.com/alshedivat/al-folio) and Jekyll. English throughout, with a muted sage and warm-white palette, five research projects, original project figures, and a downloadable CV. No Publications section.

## Preview locally

Use Ruby 3.4 and Bundler:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000/Joseph-Tang-Personal-Page/`. A production build is generated with `bundle exec jekyll build`.

## Publish on GitHub Pages

1. Use the repository `Joseph-Tang1/Joseph-Tang-Personal-Page`.
2. Upload or push this folder's contents to its `main` branch. Include the hidden `.github` directory and `Gemfile.lock`.
3. In repository **Settings → Pages**, choose **GitHub Actions** as the build source.
4. Run **Build and deploy academic website**, or push another commit. The workflow builds Jekyll and deploys the generated site.

The configured website URL is `https://Joseph-Tang1.github.io/Joseph-Tang-Personal-Page/`. If you choose another account or repository, update `url` and `baseurl` in `_config.yml`; the Pages workflow also supplies the repository's correct base path when building.

## Edit content

| Content | File |
| --- | --- |
| Biography, education, research interests | `_data/profile.json` |
| Profile photograph | `assets/img/profile.jpeg` |
| Institution logos | `assets/img/institutions/` |
| Contact email | `_config.yml` and `_data/socials.yml` |
| Project descriptions, images, captions | `_data/research.json` |
| Homepage sections | `_pages/about.md` |
| CV page | `_pages/cv.md` |
| Colors, typography, mobile layout | `_sass/_personal.scss` |
| Gallery and enlarged figures | `assets/js/research.js` |
| CV download | `assets/pdf/Joseph_Tang_CV.pdf` |
| Near-field focusing proposal | `assets/pdf/Near_Field_Focusing_Proposal.pdf` |

Each project keeps its images on the left on desktop. Arrow buttons cycle through source figures; clicking a figure opens an accessible enlarged view. On narrow screens, the image moves above its description. The MTS photograph's white border is clipped in the page display while preserving the source file.

The site uses no analytics or private Google Drive links. The proposal and CV are served as local PDF files so readers do not need Drive access.

See `TEMPLATE_ORIGIN.md` for upstream attribution. The original al-folio MIT license is preserved in `LICENSE`; project figures and CV material retain their original authorship.

Institution logos identify the educational affiliations shown on this site and remain the property of their respective universities. The EPFL visiting affiliation links to the official [LEAP laboratory](https://www.epfl.ch/labs/leap/) website.
