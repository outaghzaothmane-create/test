export const products = [
  {
    id: 1,
    name: 'Gazelle Blue',
    price: 90,
    category: 'Sneakers',
    color: 'Blue',
    image: '/images/image-1-gazelle-blue.jpg',
    description: 'Retro-inspired design with modern comfort. The Gazelle Blue brings vintage style to your everyday look with a vibrant blue colorway.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 2,
    name: 'Samba OG White',
    price: 100,
    category: 'Sneakers',
    color: 'White',
    image: '/images/image-8-samba-og-white.jpg',
    description: 'The classic Samba OG returns with timeless style and premium materials. A true icon that never goes out of fashion.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 3,
    name: 'Gazelle White',
    price: 90,
    category: 'Sneakers',
    color: 'White',
    image: '/images/image-3-gazelle-white.jpg',
    description: 'Clean lines and minimalist design make the Gazelle White a versatile addition to any wardrobe.',
    sizes: ['S', 'M', 'L'],
    inStock: true
  },
  {
    id: 4,
    name: 'Gazelle Black',
    price: 90,
    category: 'Sneakers',
    color: 'Black',
    image: '/images/image-2-gazelle-black.jpg',
    description: 'Street-ready style meets classic design. The Gazelle Black delivers comfort and style in equal measure.',
    sizes: ['M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 5,
    name: 'Gazelle Burgundy',
    price: 90,
    category: 'Sneakers',
    color: 'Burgundy',
    image: '/images/image-5-gazelle-burgundy.jpg',
    description: 'The Gazelle Burgundy combines classic heritage with modern comfort. A wardrobe essential with rich burgundy tones.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 6,
    name: 'Gazelle Pink',
    price: 90,
    category: 'Sneakers',
    color: 'Pink',
    image: '/images/image-6-gazelle-pink.jpg',
    description: 'Iconic design meets contemporary comfort. The Gazelle Pink is a true classic with a vibrant twist.',
    sizes: ['S', 'M', 'L'],
    inStock: true
  },
  {
    id: 7,
    name: 'Gazelle Grey',
    price: 90,
    category: 'Sneakers',
    color: 'Grey',
    image: '/images/image-4-gazelle-grey.jpg',
    description: 'Retro-inspired design with modern comfort. The Gazelle Grey brings vintage style to your everyday look.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 8,
    name: 'Samba OG Black',
    price: 100,
    category: 'Sneakers',
    color: 'Black',
    image: '/images/image-9-samba-og-black.jpg',
    description: 'Futuristic design meets everyday comfort. The Samba OG Black stands out with its unique aesthetic.',
    sizes: ['M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 9,
    name: 'Gazelle Black CQ',
    price: 95,
    category: 'Sneakers',
    color: 'Black',
    image: '/images/image-7-gazelle-black-cq.jpg',
    description: 'Premium materials and innovative design come together in the Gazelle Black CQ. A statement piece for the modern sneaker enthusiast.',
    sizes: ['S', 'M', 'L'],
    inStock: true
  },
  {
    id: 10,
    name: 'Campus 00s Grey',
    price: 85,
    category: 'Sneakers',
    color: 'Grey',
    image: '/images/image-10-campus-00s-grey.jpg',
    description: 'Advanced design meets retro-inspired style. Maximum comfort, maximum style with the Campus 00s Grey.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 11,
    name: 'Gazelle Blue',
    price: 90,
    category: 'Sneakers',
    color: 'Blue',
    image: '/images/image-1-gazelle-blue.jpg',
    description: 'Sleek and modern, the Gazelle Blue offers a unique silhouette with premium comfort.',
    sizes: ['M', 'L'],
    inStock: true
  },
  {
    id: 12,
    name: 'Samba OG White',
    price: 100,
    category: 'Sneakers',
    color: 'White',
    image: '/images/image-8-samba-og-white.jpg',
    description: 'Classic tennis-inspired design with contemporary updates. The Samba OG White delivers timeless style.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  }
];

export const getProductById = (id) => products.find(p => p.id === Number(id));

export const getProductsByCategory = (category) => products.filter(p => p.category === category);
