import { reactive } from 'vue'
import { Product } from './models/product.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  // I haven't been able to work on this much lately because I haven't had a lot of time left over after work, family time, & working on several art commissions for my custom 3D printed art masks. Time spent working on the Voiceflow AI chat bot also doesn't reflect on commits to this project. I am still making progress on this with what time I have available.

  products: [
    new Product({
      name: 'Holy Salt',
      description: 'Salt water blessed by a priest before being dehydrated, leaving behind the finest holy water infused salts. Perfect for fending off bad spirits & demons',
      additionalAiInfo: '',
      price: '29.99',
      img: '',
    }),
  ],





})

