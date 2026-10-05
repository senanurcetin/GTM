const test = require('node:test')
const assert = require('node:assert/strict')
const GA4Events = require('../assets/javascript/ga4.js')

test('add_to_cart follows the GA4 e-commerce schema', () => {
  // dataset attributes arrive as strings
  const payload = GA4Events.addToCart({ id: 'p1', name: 'Robot', price: '149.90' })
  assert.deepEqual(payload, {
    event: 'add_to_cart',
    ecommerce: {
      currency: 'TRY',
      value: 149.9,
      items: [{ item_id: 'p1', item_name: 'Robot', price: 149.9, quantity: 1 }],
    },
  })
})

test('remove_from_cart uses a positive quantity and the line value', () => {
  // the storefront reports removals as negative quantities; GA4 expects positive
  const payload = GA4Events.removeFromCart({ id: 'p1', name: 'Robot', price: '100' }, '-3')
  assert.equal(payload.event, 'remove_from_cart')
  assert.equal(payload.ecommerce.items[0].quantity, 3)
  assert.equal(payload.ecommerce.value, 300)
})

test('begin_checkout carries every cart line and the summed value', () => {
  const cart = [
    { id: 'p1', name: 'Robot', price: 100, quantity: 2 },
    { id: 'p2', name: 'Puzzle', price: 49.5, quantity: 1 },
  ]
  const payload = GA4Events.beginCheckout(cart)
  assert.equal(payload.event, 'begin_checkout')
  assert.equal(payload.ecommerce.items.length, 2)
  assert.equal(payload.ecommerce.value, 249.5)
  assert.equal(payload.ecommerce.currency, 'TRY')
})

test('push clears the previous ecommerce object first', () => {
  const layer = []
  GA4Events.push(layer, GA4Events.addToCart({ id: 'p1', name: 'Robot', price: 10 }))
  assert.deepEqual(layer[0], { ecommerce: null })
  assert.equal(layer[1].event, 'add_to_cart')
})

test('every item has the fields GA4 requires', () => {
  const { items } = GA4Events.beginCheckout([{ id: 7, name: 'Kite', price: '5', quantity: 1 }]).ecommerce
  for (const item of items) {
    assert.equal(typeof item.item_id, 'string')
    assert.equal(typeof item.item_name, 'string')
    assert.equal(typeof item.price, 'number')
    assert.equal(typeof item.quantity, 'number')
  }
})
