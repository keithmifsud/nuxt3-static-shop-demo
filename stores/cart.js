import { useRuntimeConfig } from 'nuxt/app'
import { loadStripe } from '@stripe/stripe-js'

export const useCartStore = definePiniaStore(
  'cart-store',
  {
    state: () => (
      {
        items: [],
      }
    ),
    getters: {},
    actions: {
      async addToCart(itemPayload) {

        const existingItem = this.items.find(item => {
          return item.productId === itemPayload.id
        })
        if (existingItem) {
          let existingItemIndex = this.items.findIndex(
            item => item.productId === existingItem.productId
          )

          existingItem.quantity = existingItem.quantity + 1
          existingItem.subTotal = itemPayload.price * existingItem.quantity
          this.items[existingItemIndex] = existingItem
        } else {
          this.items.push({
            productId: itemPayload.id,
            productName: itemPayload.name,
            price: itemPayload.price,
            currency: itemPayload.currency || 'gbp',
            quantity: 1,
            subTotal: itemPayload.price,
            stripePriceId: itemPayload.stripePriceId,
          })
        }
      },

      async takePayment() {
        const config = useRuntimeConfig()
        const stripe = await loadStripe(config.public.stripePk)

        const lineItems = []
        this.items.forEach(cartItem => {
          lineItems.push({
            price: cartItem.stripePriceId,
            quantity: cartItem.quantity,
          })
        })

        const { error } = await stripe.redirectToCheckout({
          lineItems: lineItems,
          mode: 'payment',
          successUrl: `${config.public.appUrl}/success`,
          cancelUrl: `${config.public.appUrl}`,
        })
      }
    },
  }
)