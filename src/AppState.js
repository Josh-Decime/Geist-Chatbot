import { reactive } from 'vue'
import { Product } from './models/Product.js'

const getImageUrl = (imageName) => {
  try {
    // Try without the '../' prefix
    return new URL(`/src/assets/img/${imageName}`, import.meta.url).href
  } catch (error) {
    console.error('Error loading image:', imageName, error)
    return null
  }
}
console.log('Holy Salt image URL:', getImageUrl('Holy-Salt.png'));
console.log('Midnight Candles image URL:', getImageUrl('Midnight-Candles.png'));
console.log('Ravens Eye image URL:', getImageUrl('Ravens-Eye-Pendant.png'));
console.log('Grimoire image URL:', getImageUrl('Grimoire-of-Shadows.png'));

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  // Function to dynamically import images from assets

  products: [
    new Product({
      name: 'Holy Salt',
      description: 'Salt water blessed by a priest before being dehydrated, leaving behind the finest holy water infused salts. Perfect for fending off bad spirits & demons',
      additionalAiInfo: '',
      price: '29.99',
      img: getImageUrl('Holy-Salt.png'),
    }),
    new Product({
      name: 'Midnight Candles',
      description: 'Hand-dipped black candles infused with protective herbs and essential oils. Burns with an eerie blue flame that wards off malevolent entities',
      additionalAiInfo: '',
      price: '24.99',
      img: getImageUrl('Midnight-Candles.png'),
    }),
    new Product({
      name: 'Raven\'s Eye Pendant',
      description: 'Obsidian pendant carved to resemble a raven\'s eye, said to grant the wearer sight beyond the veil. Includes silver chain blessed under a full moon',
      additionalAiInfo: '',
      price: '49.99',
      img: getImageUrl('Ravens-Eye-Pendant.png'),
    }),
    new Product({
      name: 'Grimoire of Shadows',
      description: 'Leather-bound spell book filled with ancient incantations and protective rituals. Hand-written on parchment with iron gall ink',
      additionalAiInfo: '',
      price: '89.99',
      img: getImageUrl('Grimoire-of-Shadows.png'),
    }),
    new Product({
      name: 'Phantom Mist Diffuser Oil',
      description: 'Essential oil blend of sage, cedar, and mysterious botanicals. Creates an otherworldly atmosphere while cleansing negative energy',
      additionalAiInfo: '',
      price: '19.99',
      img: getImageUrl('Phantom-Mist-Diffuser-Oil.png'),
    }),
    new Product({
      name: 'Bone Rune Set',
      description: 'Twenty-four hand-carved bone runes in an aged velvet pouch. Each rune is inscribed with ancient symbols for divination and fortune telling',
      additionalAiInfo: '',
      price: '34.99',
      img: getImageUrl('Bone-Rune-Set.png'),
    }),
    new Product({
      name: 'Cursed Mirror',
      description: 'Antique-style mirror with an ornate gothic frame. Rumored to show glimpses of the spirit realm when gazed upon at midnight',
      additionalAiInfo: '',
      price: '79.99',
      img: getImageUrl('Cursed-Mirror.png'),
    }),
    new Product({
      name: 'Witch\'s Brew Tea Blend',
      description: 'Herbal tea mixture of mugwort, lavender, and elderflower. Enhances psychic abilities and promotes prophetic dreams when consumed',
      additionalAiInfo: '',
      price: '16.99',
      img: getImageUrl('Witchs-Brew-Tea-Blend.png'),
    }),
    new Product({
      name: 'Spirit Board Deluxe',
      description: 'Handcrafted wooden ouija board with mother-of-pearl inlays and matching planchette. Comes with instruction booklet and protective cloth',
      additionalAiInfo: '',
      price: '64.99',
      img: getImageUrl('Spirit-Board-Deluxe.png'),
    }),
    new Product({
      name: 'Banshee\'s Wail Wind Chimes',
      description: 'Blackened metal wind chimes tuned to haunting frequencies. Creates spine-chilling melodies that are said to communicate with restless spirits',
      additionalAiInfo: '',
      price: '39.99',
      img: getImageUrl('Banshees-Wail-Wind-Chimes.png'),
    }),
    new Product({
      name: 'Vampire\'s Elixir',
      description: 'Dark red potion made from rare herbs and minerals. Grants temporary enhanced senses and vitality when consumed under starlight',
      additionalAiInfo: '',
      price: '54.99',
      img: getImageUrl('Vampires-Elixir.png'),
    }),
    new Product({
      name: 'Séance Candle Set',
      description: 'Set of thirteen purple candles arranged in a ritual circle formation. Each candle is inscribed with protective symbols and burns for exactly one hour',
      additionalAiInfo: '',
      price: '42.99',
      img: getImageUrl('Seance-Candle-Set.png'),
    }),
    new Product({
      name: 'Ectoplasm Essence',
      description: 'Rare spectral residue captured during documented paranormal encounters. Glows faintly in darkness and allows temporary communication with departed souls',
      additionalAiInfo: '',
      price: '199.99',
      img: getImageUrl('Ectoplasm-Essence.png'),
    }),
    new Product({
      name: 'Demon Binding Chains',
      description: 'Ancient iron chains forged with blessed metals and inscribed with solomon\'s seals. Capable of restraining even the most powerful infernal entities',
      additionalAiInfo: '',
      price: '299.99',
      img: getImageUrl('Demon-Binding-Chains.png'),
    }),
    new Product({
      name: 'Necromancer\'s Staff',
      description: 'Gnarled wooden staff topped with a genuine human skull. Amplifies dark magic and allows the wielder to command undead spirits',
      additionalAiInfo: '',
      price: '449.99',
      img: getImageUrl('Necromancers-Staff.png'),
    }),
    new Product({
      name: 'Phoenix Feather Quill',
      description: 'Authentic phoenix plume that writes in flames. Any contract or spell written with this quill becomes magically binding across all planes of existence',
      additionalAiInfo: '',
      price: '899.99',
      img: getImageUrl('Phoenix-Feather-Quill.png'),
    }),
    new Product({
      name: 'Soul Trap Crystal',
      description: 'Hollow obsidian crystal capable of imprisoning wayward spirits. Pulses with ethereal energy when containing a supernatural entity',
      additionalAiInfo: '',
      price: '159.99',
      img: getImageUrl('Soul-Trap-Crystal.png'),
    }),
    new Product({
      name: 'Bloodline Compass',
      description: 'Mystical compass that points toward your ancestral spirits instead of magnetic north. Needle spins wildly when vengeful ghosts are near',
      additionalAiInfo: '',
      price: '124.99',
      img: getImageUrl('Bloodline-Compass.png'),
    }),
    new Product({
      name: 'Wraith Cloak',
      description: 'Ethereal garment woven from shadow and moonbeams. Grants the wearer ability to phase through walls and become invisible to mortal eyes',
      additionalAiInfo: '',
      price: '999.99',
      img: getImageUrl('Wraith-Cloak.png'),
    }),
    new Product({
      name: 'Hellhound Collar',
      description: 'Spiked leather collar infused with brimstone. Summons a loyal hellhound companion to guard against supernatural threats for 24 hours',
      additionalAiInfo: '',
      price: '349.99',
      img: getImageUrl('Hellhound-Collar.png'),
    }),
    new Product({
      name: 'Time Rift Pocket Watch',
      description: 'Cursed timepiece that runs backward at midnight. Allows glimpses into past lives and can temporarily slow the flow of time around the bearer',
      additionalAiInfo: '',
      price: '699.99',
      img: getImageUrl('Time-Rift-Pocket-Watch.png'),
    }),
    new Product({
      name: 'Poltergeist in a Jar',
      description: 'Mischievous spirit contained in an antique mason jar. Release to cause supernatural disturbances or keep sealed as a conversation piece',
      additionalAiInfo: '',
      price: '89.99',
      img: getImageUrl('Poltergeist-in-a-Jar.png'),
    }),
    new Product({
      name: 'Dragon\'s Blood Ink',
      description: 'Genuine dragon ichor mixed with rare minerals. Spells and curses written with this ink are 10x more potent and cannot be dispelled',
      additionalAiInfo: '',
      price: '249.99',
      img: getImageUrl('Dragons-Blood-Ink.png'),
    }),
    new Product({
      name: 'Astral Projection Pillow',
      description: 'Pillow stuffed with herbs from the spirit realm. Sleeping on it allows your soul to leave your body and explore other dimensions safely',
      additionalAiInfo: '',
      price: '179.99',
      img: getImageUrl('Astral-Projection-Pillow.png'),
    }),
    new Product({
      name: 'Reaper\'s Scythe Pendant',
      description: 'Miniature scythe forged from meteorite metal. Grants the wearer knowledge of when any person they touch will die',
      additionalAiInfo: '',
      price: '599.99',
      img: getImageUrl('Reapers-Scythe-Pendant.png'),
    }),
    new Product({
      name: 'Shapeshifter\'s Mask',
      description: 'Ancient ceremonial mask carved from werewolf bone. Allows the wearer to take on the appearance of any person they have seen',
      additionalAiInfo: '',
      price: '799.99',
      img: getImageUrl('Shapeshifters-Mask.png'),
    }),
    new Product({
      name: 'Voodoo Doll Kit',
      description: 'Complete set includes handmade doll, blessed pins, ritual instructions, and a vial of graveyard dirt. Comes with lifetime karma protection',
      additionalAiInfo: '',
      price: '74.99',
      img: getImageUrl('Voodoo-Doll-Kit.png'),
    }),
    new Product({
      name: 'Midnight Fog Lantern',
      description: 'Victorian-style lantern that burns with cold, purple flames. The ethereal light reveals hidden spirits and illuminates pathways to otherworldly realms',
      additionalAiInfo: '',
      price: '67.99',
      img: getImageUrl('Midnight-Fog-Lantern.png'),
    }),
    new Product({
      name: 'Banshee Hair Brush',
      description: 'Antique silver brush containing actual banshee hair bristles. Brushing your hair with it grants prophetic visions but may attract restless spirits',
      additionalAiInfo: '',
      price: '134.99',
      img: getImageUrl('Banshee-Hair-Brush.png'),
    }),
    new Product({
      name: 'Phantom Ring Collection',
      description: 'Set of five rings once worn by executed criminals. Each ring bears a different curse and grants its wearer supernatural abilities at a terrible cost',
      additionalAiInfo: '',
      price: '189.99',
      img: getImageUrl('Phantom-Ring-Collection.png'),
    }),
    new Product({
      name: 'Graveyard Soil Hourglass',
      description: 'Hourglass filled with consecrated cemetery earth that falls upward during witching hour. Measures time until significant supernatural events occur',
      additionalAiInfo: '',
      price: '156.99',
      img: getImageUrl('Graveyard-Soil-Hourglass.png'),
    }),
    new Product({
      name: 'Spectral Photography Camera',
      description: 'Modified vintage camera that captures images of ghosts and spirits invisible to the naked eye. Includes film that develops in moonlight',
      additionalAiInfo: '',
      price: '423.99',
      img: '',
    }),
    new Product({
      name: 'Cursed Music Box',
      description: 'Ornate music box that plays a haunting melody only children and spirits can hear. The dancing figure inside moves on its own at 3:33 AM',
      additionalAiInfo: '',
      price: '98.99',
      img: '',
    }),
    new Product({
      name: 'Shadow Puppet Theater',
      description: 'Miniature puppet stage where shadow figures perform scenes from the afterlife. The puppets are said to be controlled by departed souls',
      additionalAiInfo: '',
      price: '213.99',
      img: '',
    }),
    new Product({
      name: 'Séance Bell Set',
      description: 'Three brass bells tuned to frequencies that summon specific types of spirits. Ring once for guides, twice for departed loved ones, thrice for ancient entities',
      additionalAiInfo: '',
      price: '89.99',
      img: '',
    }),
    new Product({
      name: 'Nightmare Catcher Dreamcatcher',
      description: 'Twisted version of traditional dreamcatcher woven with spider silk and raven feathers. Captures bad dreams and transforms them into prophetic visions',
      additionalAiInfo: '',
      price: '76.99',
      img: '',
    }),
    new Product({
      name: 'Gargoyle Guardian Statue',
      description: 'Hand-carved stone gargoyle that comes to life during supernatural threats. Protects your home from demons and malevolent spirits while you sleep',
      additionalAiInfo: '',
      price: '389.99',
      img: '',
    }),
    new Product({
      name: 'Witch Doctor\'s Ritual Bowl',
      description: 'Ancient ceramic bowl used for scrying and potion brewing. Made from clay mixed with bone dust and blessed by Haitian voodoo practitioners',
      additionalAiInfo: '',
      price: '127.99',
      img: '',
    }),
    new Product({
      name: 'Phantom Chess Set',
      description: 'Chess set where pieces move themselves, playing games against long-dead grandmasters. Victory grants wisdom, defeat may cost you memories',
      additionalAiInfo: '',
      price: '267.99',
      img: '',
    }),
  ]





})

