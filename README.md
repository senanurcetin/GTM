# GTM ToyStore Analytics Integration

Archive proof for a static storefront with a Google Tag Manager container snippet, dataLayer events and a tested GA4 e-commerce event layer.

## Why this project exists

This repository packages a simple toy-store storefront in Jekyll so product pages, contact flow, and front-end structure can be used for tag-management and analytics experiments.

## Portfolio role

`archive proof`

## What it shows

- Static-site product catalog structure in Jekyll
- A Google Tag Manager container snippet in the page layout, and dataLayer events pushed from the storefront script (add to cart, remove from cart, checkout, contact form)
- GA4 e-commerce event payloads (`add_to_cart`, `remove_from_cart`, `begin_checkout`) built by `assets/javascript/ga4.js`, with unit tests
- Lightweight front-end experimentation without a full application stack

## Architecture snapshot

- **Site framework:** Jekyll
- **Content model:** `_products` collection plus layout partials
- **Presentation layer:** static HTML, Markdown, Liquid templates, and assets
- **Analytics angle:** a GTM container snippet, the storefront's dataLayer events, and a tested layer (`assets/javascript/ga4.js`, see [`docs/GA4_EVENTS.md`](docs/GA4_EVENTS.md)) that pushes the GA4 e-commerce events `add_to_cart`, `remove_from_cart` and `begin_checkout`. Tags, triggers and the GA4 property live in the GTM container, which is not part of this repository.

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
node --test tests/*.test.js
```

## Limitations

- This repo is primarily a web analytics integration sandbox, not a production commerce platform.
- The storefront content is lightweight and should be read as instrumentation proof rather than a full SaaS or product case study.

## License and attribution

This repository started as a fork of an earlier collaborative project whose repository carries no open-source licence, so no licence is granted here either. The storefront and its dataLayer events come from that upstream work; the GTM container snippet, the GA4 event layer with its tests, this README and the CI workflow are the additions made in this fork. All rights in the upstream code remain with its authors.
