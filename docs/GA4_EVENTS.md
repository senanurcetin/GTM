# GA4 e-commerce events

The storefront's own dataLayer events (`addToCart`, `removeCartItem`, `removeOneFromCart`, `goToCheckout`, `contactFormSubmit`) are kept as they are. `assets/javascript/ga4.js` pushes the matching GA4 recommended e-commerce events next to them, so a GA4 event tag in Google Tag Manager can trigger on the standard names.

| Storefront event | GA4 event | `ecommerce` payload |
| --- | --- | --- |
| `addToCart` | `add_to_cart` | `currency: TRY`, `value` = price, one item with `item_id`, `item_name`, `price`, `quantity: 1` |
| `removeCartItem` | `remove_from_cart` | one item, `quantity` = the line quantity removed, `value` = price x quantity |
| `removeOneFromCart` | `remove_from_cart` | one item, `quantity: 1` |
| `goToCheckout` | `begin_checkout` | every cart line, `value` = sum of price x quantity |

Each push is preceded by `{ ecommerce: null }`, as Google recommends, so a previous event's items never leak into the next one.

## What is tested

`tests/ga4.test.js` (run with `node --test tests/*.test.js`, wired into CI) checks the payload shape, that removal quantities are positive, that `value` is the sum of the lines, and that every item carries the fields GA4 requires. The wiring in `index.js` was also exercised in a real browser against a stubbed cart: add, add, remove one and checkout produced `add_to_cart`, `add_to_cart`, `remove_from_cart` and `begin_checkout`, each preceded by the clearing push, with no page errors.

## What is not here

- The GA4 property, the GA4 configuration tag and the event tags live in the Google Tag Manager container (`GTM-T5RLNJ6H`), which is not part of this repository. This repository does not show GA4 reports or a BigQuery export.
- `contactFormSubmit` (from the upstream storefront) pushes the whole form into the dataLayer, including name and email. Do not forward that event to GA4, which prohibits personal data.
