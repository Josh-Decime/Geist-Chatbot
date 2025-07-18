import { reactive } from 'vue'
import { Product } from './models/Product.js'

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
    new Product({
      name: 'Midnight Candles',
      description: 'Hand-dipped black candles infused with protective herbs and essential oils. Burns with an eerie blue flame that wards off malevolent entities',
      additionalAiInfo: '',
      price: '24.99',
      img: '',
    }),
    new Product({
      name: 'Raven\'s Eye Pendant',
      description: 'Obsidian pendant carved to resemble a raven\'s eye, said to grant the wearer sight beyond the veil. Includes silver chain blessed under a full moon',
      additionalAiInfo: '',
      price: '49.99',
      img: '',
    }),
    new Product({
      name: 'Grimoire of Shadows',
      description: 'Leather-bound spell book filled with ancient incantations and protective rituals. Hand-written on parchment with iron gall ink',
      additionalAiInfo: '',
      price: '89.99',
      img: '',
    }),
    new Product({
      name: 'Phantom Mist Diffuser Oil',
      description: 'Essential oil blend of sage, cedar, and mysterious botanicals. Creates an otherworldly atmosphere while cleansing negative energy',
      additionalAiInfo: '',
      price: '19.99',
      img: '',
    }),
    new Product({
      name: 'Bone Rune Set',
      description: 'Twenty-four hand-carved bone runes in an aged velvet pouch. Each rune is inscribed with ancient symbols for divination and fortune telling',
      additionalAiInfo: '',
      price: '34.99',
      img: '',
    }),
    new Product({
      name: 'Cursed Mirror',
      description: 'Antique-style mirror with an ornate gothic frame. Rumored to show glimpses of the spirit realm when gazed upon at midnight',
      additionalAiInfo: '',
      price: '79.99',
      img: '',
    }),
    new Product({
      name: 'Witch\'s Brew Tea Blend',
      description: 'Herbal tea mixture of mugwort, lavender, and elderflower. Enhances psychic abilities and promotes prophetic dreams when consumed',
      additionalAiInfo: '',
      price: '16.99',
      img: '',
    }),
    new Product({
      name: 'Spirit Board Deluxe',
      description: 'Handcrafted wooden ouija board with mother-of-pearl inlays and matching planchette. Comes with instruction booklet and protective cloth',
      additionalAiInfo: '',
      price: '64.99',
      img: '',
    }),
    new Product({
      name: 'Banshee\'s Wail Wind Chimes',
      description: 'Blackened metal wind chimes tuned to haunting frequencies. Creates spine-chilling melodies that are said to communicate with restless spirits',
      additionalAiInfo: '',
      price: '39.99',
      img: '',
    }),
    new Product({
      name: 'Vampire\'s Elixir',
      description: 'Dark red potion made from rare herbs and minerals. Grants temporary enhanced senses and vitality when consumed under starlight',
      additionalAiInfo: '',
      price: '54.99',
      img: '',
    }),
    new Product({
      name: 'Séance Candle Set',
      description: 'Set of thirteen purple candles arranged in a ritual circle formation. Each candle is inscribed with protective symbols and burns for exactly one hour',
      additionalAiInfo: '',
      price: '42.99',
      img: '',
    }),
  ]





})

