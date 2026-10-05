# GTM ToyStore Analytics Integration

Archive proof for a static storefront with a Google Tag Manager container snippet and dataLayer events for e-commerce tracking.

## Why this project exists

This repository packages a simple toy-store storefront in Jekyll so product pages, contact flow, and front-end structure can be used for tag-management and analytics experiments.

## Portfolio role

`archive proof`

## What it shows

- Static-site product catalog structure in Jekyll
- A Google Tag Manager container snippet in the page layout, and dataLayer events pushed from the storefront script (add to cart, remove from cart, checkout, contact form)
- Lightweight front-end experimentation without a full application stack

## Architecture snapshot

- **Site framework:** Jekyll
- **Content model:** `_products` collection plus layout partials
- **Presentation layer:** static HTML, Markdown, Liquid templates, and assets
- **Analytics angle:** a GTM container snippet plus dataLayer events. The repository contains no GA4 configuration; tags, triggers and GA4 settings live in the GTM container, which is not part of this repository.

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

## License and attribution

This repository started as a fork of an earlier collaborative project whose repository carries no open-source licence, so no licence is granted here either. The storefront and its dataLayer events come from that upstream work; the GTM container snippet, this README and the CI workflow are the additions made in this fork. All rights in the upstream code remain with its authors.
