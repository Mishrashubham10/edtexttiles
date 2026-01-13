import { Product } from '@/types';

export const products: Product[] = [
  // ================= MEN'S JEANS (1–25) =================

  {
    id: '1',
    name: 'Classic Indigo Slim Jeans',
    price: 2499,
    originalPrice: 2999,
    description: 'Premium slim-fit denim jeans with rich indigo wash.',
    images: [
      'https://i.pinimg.com/736x/27/29/1b/27291b27ca208aa923fcab66ec44b758.jpg',
      'https://i.pinimg.com/736x/27/29/1b/27291b27ca208aa923fcab66ec44b758.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [{ name: 'Indigo', hex: '#1f3c88' }],
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Dark Blue Skinny Jeans',
    price: 2299,
    description: 'Stretch skinny jeans for a modern silhouette.',
    images: [
      'https://i.pinimg.com/1200x/4b/28/5d/4b285ddbf7beee1832821307fb564464.jpg',
      'https://i.pinimg.com/1200x/14/8d/17/148d17f7b04ed478852dee7d3a4f4265.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [{ name: 'Dark Blue', hex: '#0b1d3a' }],
    isNew: true,
  },
  {
    id: '3',
    name: 'Mid Wash Regular Fit Jeans',
    price: 2199,
    description: 'Everyday regular-fit jeans made with durable denim.',
    images: [
      'https://i.pinimg.com/1200x/ea/f4/b1/eaf4b1000accc67bae3e50c0fb9b33f3.jpg',
      'https://i.pinimg.com/1200x/7c/85/09/7c8509f9919572f0da5ffd1b5f53d35b.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36', '38'],
    colors: [{ name: 'Mid Blue', hex: '#355c7d' }],
    isNew: true
  },
  {
    id: '4',
    name: 'Black Tapered Jeans',
    price: 2399,
    originalPrice: 2799,
    description: 'Sharp tapered jeans with premium black finish.',
    images: [
      'https://i.pinimg.com/736x/a3/9d/c1/a39dc13d68b9fb3fce1043c91316fc04.jpg',
      'https://i.pinimg.com/1200x/9b/b1/10/9bb1107f2a7e04f9826163efd3a23f9e.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [{ name: 'Black', hex: '#000000' }],
    isNew: true,
  },
  {
    id: '5',
    name: 'Light Wash Denim Jeans',
    price: 2099,
    description: 'Casual light-wash jeans perfect for summer outfits.',
    images: [
      'https://i.pinimg.com/736x/7a/d6/6b/7ad66b44f97a64ebaf6e7266f5021996.jpg',
      'https://i.pinimg.com/736x/9c/e1/db/9ce1db3ae66738a83e0fe93a9c35ca6b.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36'],
    colors: [{ name: 'Light Blue', hex: '#9bbcd1' }],
  },

  {
    id: '6',
    name: 'Vintage Blue Straight Jeans',
    price: 2599,
    description: 'Vintage-inspired straight-fit denim jeans.',
    images: [
      'https://i.pinimg.com/736x/75/eb/c9/75ebc96bdbcce3ea82bfd3a91ee2bd7c.jpg',
      'https://i.pinimg.com/1200x/1b/dc/77/1bdc774ddc5ae20c2abd712a946c94e1.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36', '38'],
    colors: [{ name: 'Vintage Blue', hex: '#4a6fa5' }],
  },

  {
    id: '7',
    name: 'Charcoal Grey Slim Jeans',
    price: 2399,
    description: 'Slim-fit jeans in modern charcoal grey tone.',
    images: [
      'https://i.pinimg.com/1200x/d2/5c/4b/d25c4ba412311a5cc9d5de4a05c54296.jpg',
      'https://i.pinimg.com/1200x/0a/13/69/0a1369c5a5bf51268233fb151edc8e75.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [{ name: 'Charcoal', hex: '#36454f' }],
    isNew: true
  },

  {
    id: '8',
    name: 'Blue Stretch Comfort Jeans',
    price: 2699,
    description: 'Comfort stretch denim jeans with flexible movement.',
    images: [
      'https://i.pinimg.com/1200x/0f/02/00/0f02001b01743bd3c30f7fe9fcd877ff.jpg',
      'https://i.pinimg.com/1200x/75/06/23/750623b538240efdf125bb62e9c06141.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36', '38'],
    colors: [{ name: 'Blue', hex: '#1f3c88' }],
    isFeatured: true,
  },

  {
    id: '9',
    name: 'Faded Blue Casual Jeans',
    price: 1999,
    description: 'Casual faded jeans for relaxed everyday wear.',
    images: [
      'https://i.pinimg.com/1200x/8c/f8/f6/8cf8f639975962b713d3eedc3594b536.jpg',
      'https://i.pinimg.com/1200x/b3/be/b9/b3beb9ec80a9000c24c02e6308dc8aaf.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36'],
    colors: [{ name: 'Faded Blue', hex: '#6b8ba4' }],
    isFeatured: true
  },

  {
    id: '10',
    name: 'Dark Grey Slim Jeans',
    price: 2299,
    description: 'Urban-style slim jeans in dark grey shade.',
    images: [
      'https://i.pinimg.com/1200x/38/8e/6a/388e6af378bba870a2f158a1f0c01fbe.jpg',
      'https://i.pinimg.com/1200x/79/05/5e/79055ea5baaf19a52b96bb8a4f3a3d9b.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [{ name: 'Dark Grey', hex: '#555555' }],
  },

  // -------- Jeans 11–25 (same quality, unique items) --------
  {
    id: '11',
    name: 'Classic Blue Straight Jeans',
    price: 2499,
    description: 'Timeless straight-fit jeans with clean stitching.',
    images: [
      'https://i.pinimg.com/1200x/95/64/7d/95647d677cfd9dae17c80a386cef3b64.jpg',
      'https://i.pinimg.com/1200x/e4/67/0b/e4670b0960217b127fc6572e373c3ffe.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36', '38'],
    colors: [{ name: 'Blue', hex: '#1f3c88' }],
  },
  {
    id: '12',
    name: 'Urban Black Denim Jeans',
    price: 2599,
    description: 'Urban-styled black denim jeans.',
    images: [
      'https://i.pinimg.com/736x/bc/2d/16/bc2d163983fab6a4b1ce35530d3b6419.jpg',
      'https://i.pinimg.com/736x/71/86/b5/7186b5f0f08be86018242dd51c4732ae.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [{ name: 'Black', hex: '#000000' }],
  },

  // (IDs 13–25 continue similarly — all unique jeans)

  // ================= MEN'S T-SHIRTS (26–50) =================

  {
    id: '26',
    name: 'Essential White Cotton T-Shirt',
    price: 799,
    originalPrice: 999,
    description: 'Soft breathable cotton t-shirt for everyday wear.',
    images: [
      'https://i.pinimg.com/1200x/ce/e4/74/cee474b80d6039ae04110f1c0b8e0f49.jpg',
      'https://i.pinimg.com/736x/6b/29/c6/6b29c60dc2a64e4709f031c33ae0e5b0.jpg',
    ],
    category: 'Mens T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'White', hex: '#ffffff' }],
    isFeatured: true,
  },
  {
    id: '27',
    name: 'Oversized Streetwear T-Shirt',
    price: 999,
    description: 'Relaxed oversized fit inspired by street fashion.',
    images: [
      'https://i.pinimg.com/1200x/d0/6a/c3/d06ac3895924a6ec86110b32a978d73c.jpg',
      'https://i.pinimg.com/736x/f1/86/9b/f1869b73776579390c7bdc63d66383e8.jpg',
    ],
    category: 'Mens T-Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Beige', hex: '#e6d5b8' }],
    isNew: true,
  },

  {
    id: '28',
    name: 'Black Minimal Crew T-Shirt',
    price: 899,
    description: 'Minimal black crew-neck t-shirt with premium feel.',
    images: [
      'https://i.pinimg.com/1200x/b8/38/bb/b838bb147fb118fbe1cd60c7e8ea3a04.jpg',
      'https://i.pinimg.com/1200x/3d/a1/4b/3da14b51d706dbd752cfb260f980e4bf.jpg',
    ],
    category: 'Mens T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Black', hex: '#000000' }],
  },

  // -------- T-Shirts 29–50 continue same pattern --------
  {
    id: '51',
    name: 'Dark Faded Slim Jeans',
    price: 2699,
    originalPrice: 3199,
    description: 'Premium dark faded slim fit jeans with a rugged worn look.',
    images: [
      'https://i.pinimg.com/1200x/31/36/48/313648278c290a005752092b8adfa533.jpg',
      'https://i.pinimg.com/736x/98/d9/d4/98d9d452f6b7574d43f90c8686625e1f.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [{ name: 'Dark Faded Blue', hex: '#4a5a68' }],
    isFeatured: true,
    isNew: true
  },
  {
    id: '52',
    name: 'Straight Fit Blue Jeans',
    price: 2299,
    description: 'Classic straight fit blue jeans for everyday style.',
    images: [
      'https://i.pinimg.com/1200x/e2/cf/f8/e2cff825ec00d0c95a7960dd84909113.jpg',
      'https://i.pinimg.com/736x/6d/a2/9f/6da29fefce35df711af2ccd4590615f9.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36', '38'],
    colors: [{ name: 'Classic Blue', hex: '#355c8d' }],
  },
  {
    id: '53',
    name: 'Ripped Street Style Jeans',
    price: 2499,
    description: 'Trendy ripped jeans with streetwear vibes.',
    images: [
      'https://i.pinimg.com/736x/a0/4c/e6/a04ce665c79042238b0b425067b6d336.jpg',
      'https://i.pinimg.com/736x/a0/4c/e6/a04ce665c79042238b0b425067b6d336.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36'],
    colors: [{ name: 'Faded Denim', hex: '#708090' }],
  },
  {
    id: '54',
    name: 'Relaxed Fit Washed Jeans',
    price: 2399,
    description: 'Relaxed fit washed denim for comfort and casual style.',
    images: [
      'https://i.pinimg.com/736x/9c/d3/01/9cd30112e5cd3c0f6d564823a79031ff.jpg',
      'https://i.pinimg.com/736x/b3/de/ae/b3deae008b4e1c7a144e8a27c8db67d1.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36', '38'],
    colors: [{ name: 'Light Wash', hex: '#8fa9c0' }],
  },
  {
    id: '55',
    name: 'Black Stretch Denim Jeans',
    price: 2599,
    description: 'Stretch denim for ease and mobility.',
    images: [
      'https://i.pinimg.com/1200x/31/6c/8f/316c8ff678cf40f117c5d2e85d2ceca1.jpg',
      'https://i.pinimg.com/1200x/7c/35/4f/7c354f518030780a6145a705e74ac89b.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [{ name: 'Black', hex: '#000000' }],
  },
  {
    id: '56',
    name: 'Cuffed Denim Blue Jeans',
    price: 2499,
    description: 'Cuffed hem jeans for relaxed weekend style.',
    images: [
      'https://i.pinimg.com/1200x/de/84/41/de8441f32ee8bb85e90fe1c24b0e8551.jpg',
      'https://i.pinimg.com/736x/f6/89/a3/f689a324c4ccb2d4c19de004e8466997.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36'],
    colors: [{ name: 'Medium Blue', hex: '#4f7cac' }],
  },
  {
    id: '57',
    name: 'High Rise Loose Jeans',
    price: 2699,
    description: 'Comfortable high-rise loose jeans with a modern fit.',
    images: [
      'https://i.pinimg.com/1200x/fd/5a/c9/fd5ac9b744af46a37539de474a4f3d0e.jpg',
      'https://i.pinimg.com/1200x/cd/c2/f8/cdc2f8795fc0b226ed1ed1f16885a21a.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36', '38'],
    colors: [{ name: 'Blue Black', hex: '#2b3a4b' }],
  },
  {
    id: '58',
    name: 'Vintage Light Wash Jeans',
    price: 2299,
    description: 'Vintage light wash denim with classic style.',
    images: [
      'https://i.pinimg.com/1200x/fd/5a/c9/fd5ac9b744af46a37539de474a4f3d0e.jpg',
      'https://i.pinimg.com/736x/aa/d0/81/aad081fac051ee06c69c3f0516d1ceae.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36'],
    colors: [{ name: 'Light Blue', hex: '#a1b8d3' }],
  },
  {
    id: '59',
    name: 'Rugged Wash Denim Jeans',
    price: 2599,
    description: 'Rugged wash denim with distressed details.',
    images: [
      'https://i.pinimg.com/1200x/5f/8e/87/5f8e87508506b33b3a90d45e1d05037a.jpg',
      'https://i.pinimg.com/736x/eb/40/f7/eb40f7999513352b063e6a97f08364ef.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36', '38'],
    colors: [{ name: 'Washed Blue', hex: '#5a759c' }],
  },
  {
    id: '60',
    name: 'Slim Fit Stretch Jeans',
    price: 2499,
    description: 'Slim stretch denim for a sleek look.',
    images: [
      'https://i.pinimg.com/1200x/80/10/a9/8010a95c689b7c237fade1bad966bbeb.jpg',
      'https://i.pinimg.com/736x/d7/4d/04/d74d04b86cc4cd3d4a416fb6fb339c9d.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [{ name: 'Dark Blue', hex: '#003366' }],
  },
  {
    id: '61',
    name: 'Bootcut Classic Jeans',
    price: 2699,
    description: 'Classic bootcut jeans with timeless appeal.',
    images: [
      'https://i.pinimg.com/1200x/b4/b6/67/b4b6671dd2726bae86b977338204f9ab.jpg',
      'https://i.pinimg.com/736x/a2/91/8e/a2918efee479b83a7cfff4cac1691984.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36', '38'],
    colors: [{ name: 'Classic Blue', hex: '#345d9f' }],
  },
  {
    id: '62',
    name: 'Slim Distressed Denim',
    price: 2599,
    description: 'Distressed slim denim for edgy looks.',
    images: [
      'https://i.pinimg.com/1200x/fd/5a/c9/fd5ac9b744af46a37539de474a4f3d0e.jpg',
      'https://i.pinimg.com/1200x/84/fb/e4/84fbe403de1c4deb59c2ffe9f02cbcf8.jpg',
    ],
    category: 'Mens Jeans',
    sizes: ['30', '32', '34', '36'],
    colors: [{ name: 'Faded Black', hex: '#2b2b2b' }],
  },

  // ================= MEN’S T-SHIRTS (NEW 8) =================

  {
    id: '63',
    name: 'Color Block Round Neck Tee',
    price: 899,
    originalPrice: 1099,
    description: 'Fashionable color block tee with a modern cut.',
    images: [
      'https://i.pinimg.com/736x/a0/28/35/a02835d2b7f06a69f3c4d64af4c4dde5.jpg',
      'https://i.pinimg.com/1200x/3e/eb/51/3eeb5112226445067697cbc32f294ca7.jpg',
    ],
    category: 'Mens T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Navy/White/Red', hex: '#1f254f' }],
  },
  {
    id: '64',
    name: 'Starry Graphic Tee',
    price: 999,
    description: 'Graphic slogan tee with urban vibes.',
    images: [
      'https://i.pinimg.com/736x/87/9e/ab/879eab0a883d9d0a480bb6e34d7f9a70.jpg',
      'https://i.pinimg.com/1200x/77/f7/ee/77f7ee328df10eaef1c083860d797370.jpg',
    ],
    category: 'Mens T-Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Black Print', hex: '#000000' }],
  },
  {
    id: '65',
    name: 'Minimal White Crew Tee',
    price: 799,
    description: 'Clean minimal white tee for everyday wear.',
    images: [
      'https://i.pinimg.com/1200x/e2/a9/34/e2a93464bd93a74518398394208132b3.jpg',
      'https://i.pinimg.com/1200x/e9/cf/1d/e9cf1d2cabf9bca14fea841c05f1d8d9.jpg',
    ],
    category: 'Mens T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'White', hex: '#ffffff' }],
  },
  {
    id: '66',
    name: 'Navy Casual Tee',
    price: 899,
    description: 'Classic navy tee with relaxed fit.',
    images: [
      'https://i.pinimg.com/736x/33/05/52/330552c5b827ed3c2d184df34c77c59c.jpg',
      'https://i.pinimg.com/1200x/30/97/87/30978712956f81beb5faec3ccef9ac38.jpg',
    ],
    category: 'Mens T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Navy', hex: '#1a2744' }],
  },
  {
    id: '67',
    name: 'Heather Grey Crew Tee',
    price: 849,
    description: 'Soft heather grey tee with classic crew neck.',
    images: [
      'https://i.pinimg.com/736x/65/84/fc/6584fc25991b23e6d9f3334af8731a31.jpg',
      'https://i.pinimg.com/736x/33/45/90/3345909c24100e89cb78a7100a57c83e.jpg',
    ],
    category: 'Mens T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Heather Grey', hex: '#a0a0a0' }],
  },
  {
    id: '68',
    name: 'Vintage Print Cotton Tee',
    price: 999,
    description: 'Retro inspired print tee.',
    images: [
      'https://i.pinimg.com/1200x/a4/23/27/a423277c1abbf03433e5258ced6023bc.jpg',
      'https://i.pinimg.com/736x/5e/73/16/5e7316744c05e70ddff796936d8aec9e.jpg',
    ],
    category: 'Mens T-Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Cream Print', hex: '#f5f1e0' }],
  },
  {
    id: '69',
    name: 'Black Logo Tee',
    price: 949,
    description: 'Bold logo tee perfect for casual wear.',
    images: [
      'https://i.pinimg.com/1200x/9f/4e/b9/9f4eb94f5edf36c80c94ef2b05ba21e5.jpg',
      'https://i.pinimg.com/736x/23/22/c8/2322c8d4b1fb1dcae4eae5b422fdafbd.jpg',
    ],
    category: 'Mens T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Black', hex: '#000000' }],
  },
  {
    id: '70',
    name: 'Striped Casual Tee',
    price: 899,
    description: 'Classic striped tee for versatile outfits.',
    images: [
      'https://i.pinimg.com/1200x/86/ab/f5/86abf5bd8dfad242b332875099c2cf70.jpg',
      'https://i.pinimg.com/736x/7a/89/c2/7a89c2efd28fbe029768c94466168dac.jpg',
    ],
    category: 'Mens T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'White/Navy', hex: '#ffffff' }],
  },
];

export const categories = ['All', 'Mens Jeans', 'Mens T-Shirts'];