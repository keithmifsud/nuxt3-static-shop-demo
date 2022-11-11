import products from './../data/products.json'

export const useProductsStore = definePiniaStore(
  'products-store',
  {
    state : () => (
      {
        products: [],
      }
    ),
    getters: {},
    actions: {
      async retrieveProducts() {
        this.products = products
      }
    },
  }
)
