# Build a statically generated online shop with Nuxt3, Pinia and Stripe.

![alt text](https://github.com/keithmifsud/nuxt3-static-shop-demo/blob/main/docs/nuxt3-static-shop.png?raw=true)

## Generate a static website with Nuxt3 - NuxtJs

Reference code for the [Build and deploy a static online shop with Nuxt3 using Pinia Store and Stripe Checkout to Firebase tutorial](https://keith-mifsud.me/blog/build-and-deploy-nuxt3-static-site-with-pinia-and-stripe-checkout-on-firebase).

Feel free to use this code as you wish 😃

## Usage

If you'd like to use this code as a starting point for your static Nuxt3 online store, simpy clone it:

```shell
git clone git@github.com:keithmifsud/nuxt3-static-shop-demo.git
```

and install the dependencies:

```shell
npm install
```

Update the `./nuxt.config.ts` file's runtime config:

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appUrl: 'http://localhost:3000',
      stripePk: 'pk_test_xxxxxxxxxxxxxxxxxxxxxx',
    },
  }
})
```

and run the local instance with:

```shell
npm run dev
```

## Generate

You can easily generate the static site with:

```shell
npm run generarte
```

## Legal

This software is distributed under the [MIT](LICENSE.md) license.

&copy; 2018 - 2022 - Keith Mifsud <https://keith-mifsud.me> and approved contributors.


