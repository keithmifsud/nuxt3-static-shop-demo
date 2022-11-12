import { useFetch } from 'nuxt/app'

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
            subTotal: itemPayload.price
          })
        }
      },

      async startCheckout() {
        return await new Promise((resolve, reject) => {
          const { data } = useFetch(() =>
            '/api/checkout',
            {
              method: 'POST',
              body: {
                cartItems: this.items,
              }
            }
          )

          console.log('data', data)
        })
      }
    },
  }
)