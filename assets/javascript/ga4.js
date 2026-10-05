// Builds dataLayer payloads that follow Google's GA4 e-commerce event schema
// (add_to_cart, remove_from_cart, begin_checkout). The storefront keeps pushing
// its own events (addToCart, removeCartItem, ...); these are pushed alongside so
// a GA4 event tag in Google Tag Manager can trigger on the standard names.
// Works in the browser (window.GA4Events) and in Node (module.exports).
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.GA4Events = factory()
  }
})(typeof self !== 'undefined' ? self : this, function () {
  const CURRENCY = 'TRY'

  const round2 = (number) => Math.round(number * 100) / 100

  const toItem = ({ id, name, price, quantity }) => ({
    item_id: String(id),
    item_name: String(name),
    price: Number(price),
    quantity: quantity === undefined ? 1 : Math.abs(Number(quantity)),
  })

  const build = (event, items) => ({
    event,
    ecommerce: {
      currency: CURRENCY,
      value: round2(items.reduce((sum, item) => sum + item.price * item.quantity, 0)),
      items,
    },
  })

  return {
    CURRENCY,
    toItem,
    addToCart: (item) => build('add_to_cart', [toItem(item)]),
    removeFromCart: (item, quantity = 1) => build('remove_from_cart', [toItem({ ...item, quantity })]),
    beginCheckout: (cart) => build('begin_checkout', cart.map(toItem)),
    // Google recommends clearing the previous ecommerce object before each push.
    push: (dataLayer, payload) => {
      dataLayer.push({ ecommerce: null })
      dataLayer.push(payload)
    },
  }
})
