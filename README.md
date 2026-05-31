# GTM ToyStore Analytics Integration

Archive proof for static-site merchandising, Google Tag Manager instrumentation, and GA4-friendly web analytics setup.

## Why this project exists

This repository packages a simple toy-store storefront in Jekyll so product pages, contact flow, and front-end structure can be used for tag-management and analytics experiments.

## Portfolio role

`archive proof`

## What it shows

- Static-site product catalog structure in Jekyll
- Product and contact surfaces suitable for GTM and GA4 event instrumentation
- Lightweight front-end experimentation without a full application stack

## Architecture snapshot

- **Site framework:** Jekyll
- **Content model:** `_products` collection plus layout partials
- **Presentation layer:** static HTML, Markdown, Liquid templates, and assets
- **Analytics angle:** GTM and GA4 integration sandbox for page and event tracking

## Local setup

```bash
bundle install
bundle exec jekyll serve
```

The site runs locally on `http://127.0.0.1:4000`.

## Quality checks

The GitHub Actions workflow runs:

```bash
bundle exec jekyll build
```

## Limitations

- This repo is primarily a web analytics integration sandbox, not a production commerce platform.
- The storefront content is lightweight and should be read as instrumentation proof rather than a full SaaS or product case study.

## License

MIT
