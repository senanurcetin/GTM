# Reviewer brief — GTM ToyStore

**Focus:** Google Analytics 4 / Google Tag Manager instrumentation for a Jekyll storefront. This is a web-analytics integration sample, not a payment-processing or conversion-lift case study.

## Problem and approach

Commerce analytics needs a consistent event contract across product and cart actions. The site generates GA4-compatible `dataLayer` payloads for `add_to_cart`, `remove_from_cart`, and `begin_checkout`, with the tag-manager snippet separated from application logic.

## Evidence to inspect

| Question | Evidence |
|---|---|
| Which events and properties are expected? | [GA4 event contract](GA4_EVENTS.md) |
| How are browser events constructed? | [Instrumentation script](../assets/javascript/ga4.js) |
| Are payloads checked? | [JavaScript tests](../tests/) and [local verification](../README.md#quality-checks) |
| Is the site reproducible? | [Jekyll build instructions](../README.md) |

## What this proves

- Event schema design and front-end instrumentation using GA4 conventions.
- A small, testable data layer suitable for analytics QA exercises.
- Integration work on an existing forked storefront, with upstream contribution and licensing boundaries retained.

## Do not infer

There is no live paid checkout, validated GA4 property reporting, attribution measurement, or verified commercial uplift. This repository originated as a fork; its README documents upstream attribution and why no new open-source licence is claimed.
