import { Heart, ShoppingBag, User } from "lucide-react";

export  const TopNavIcon : IconWithUrl[] = [
    {
        url: '/cart',
        Icon: ShoppingBag
    },
    {
        url: '/',
        Icon: Heart
    },
    {   
        url:  '/register',
        Icon : User
    }
]

export const ButtonNavLinks : BottomNavLinks[] = [
    {
        title: 'Fresh',
        url: '/collections/rudraksha-wood-mala'
    },
    {
        title: 'Exclusive',
        url: '/'
    },
    {
        title: 'Drinks',
        url: '/'
    },
    {
        title: 'Grocery',
        url: '/collections/mukhi-combination'
    },
    {
        title: 'Vegetables',
        url: '/collections/stone-crystal-mala'
      },   
      {
        title: 'Seasonals',
        url: '/'
      },
    {
      title:"Contact Us",
      url:"/"
    },
    {
        title: 'More',
        url: '/'
    },
]

export const slides : Slides[] = [
    {
      title: "Mountain Paradise",
      description: "Discover breathtaking mountain views",
      image: "/images/banners/banner_1.png" 
    },
    {
      title: "Beach Retreat",
      description: "Relax by the crystal clear waters",
      image: "/images/banners/banner_1.png"
    },
    {
      title: "Urban Adventure",
      description: "Explore vibrant city life",
      image: "/images/banners/banner_1.png"
    },
    {
      title: "Forest Escape",
      description: "Get lost in nature's embrace",
      image: "/images/banners/banner_1.png"
    }
];

export const collections : CollectionItems[] = [
    {
      id: 1,
      title: 'Milk Products',
      image: '/images/listings/milk_products.jpg',
      href: '/collections/stone-crystal-mala'
    },
    {
      id: 2,
      title: 'Fresh Products',
      image: '/images/listings/vegetables_fruits.jpg',
      href: '/collections/rudraksha-wood-mala',
      badge: 'BEST OFFER'
    },
    {
      id: 4,
      title: 'Grocery',
      image: '/images/listings/grocery.jpg',
      href: '/collections/mukhi-combination'
    },
    {
      id: 3,
      title: 'Drinks',
      image: '/images/listings/cold_drinks.jpg',
      href: '/collections/bracelets'
  },
]; 

export const rudrakshaItems: ProductShow[] = [
  {
    id: 1,
    name: "Bitter Gourd",
    description: "Medicinal Vegetable",
    originalPrice: "Rs. 50.00",
    currentPrice: "Rs. 45.00",
    orgprice : 50.00,
    price: 45.00,
    image: "/images/Collections/Rudraksha/karela.jpg"
  },
  {
    id: 2,
    name: "Tomatoes",
    description: "Juicy & Fresh",
    originalPrice: "Rs. 100",
    currentPrice: "Rs. 70/kg",
    orgprice : 100.00,
    price: 70.00,
    image: "/images/Collections/Rudraksha/tomatoes.jpg"
  },
  {
    id: 3,
    name: "Onion",
    description: "Crisp & Fresh",
    originalPrice: "Rs. 100",
    currentPrice: "Rs. 80/kg",
    orgprice : 80.00,
    price : 100.00,
    image: "/images/Collections/Rudraksha/omion1.jpg"
  },
  {
    id: 4,
    name: "Carrot",
    description: " Crruncy Root",
    originalPrice: "Rs. 70.00",
    currentPrice: "Rs. 50.00",
    orgprice : 70.00,
    price : 50.00,
    image: "/images/Collections/Rudraksha/carrot.jpg"
  },
  {
    id: 5,
    name: "Capsicum",
    description: "Bell , Pepper",
    originalPrice: "Rs. 50.00",

    currentPrice: "Rs. 40.00",
    orgprice : 50.00,
    price: 40.00,
    image: "/images/Collections/Rudraksha/capsigum.jpg"
  },
  {
    id: 6,
    name: "Bringle",
    description: "Cool, Crunch",
    originalPrice: "Rs. 120.00",
    currentPrice: "Rs. 100.00",
    orgprice : 120.00,
    price : 100.00,
    image: "/images/Collections/Rudraksha/bringles.jpg"
  },
  {
    id: 7,
    name: "cabbage",
    description: "Layered, Leaf",
    originalPrice: "Rs. 180.00",
    currentPrice: "Rs. 160.00", 
    orgprice : 180.00,
    price: 160.00, 
    image: "/images/Collections/Rudraksha/cabbage.jpg"
  },
  {
    id: 8,
    name: "Kukumber",
    description: "Crisp , Crunchy",
    originalPrice: "Rs. 120.00",
    currentPrice: "Rs. 100.00",
    orgprice : 120.00,
    price : 100.00,
    image: "/images/Collections/Rudraksha/kukumber.jpg"
  },
  {
    id: 9,
    name: "Lemons",
    description: "Sour, Tasty",
    originalPrice: "Rs. 40.00",
    currentPrice: "Rs. 36.00",
    orgprice : 40.00,
    price:  36.00,
    image: "/images/Collections/Rudraksha/lemon.jpg"
  },
  {
    id: 10,
    name: "Pumpkin",
    description: "Freshy, Sweet",
    originalPrice: "Rs. 60.00",
    currentPrice: "Rs. 54.00",
    orgprice : 60.00,
    price: 54.00,
    image: "/images/Collections/Rudraksha/pumpkin.jpg"
  },
  // You can add Mukhi 11 to 21 similarly with their descriptions.
];

// export const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Anant P.",
//     location: "San Jose, CA",
//     rating: 5,
//     timeAgo: "9 hours ago",
//     comment: "Highly recommended! Exceptional Quality",
//     avatarColor: "bg-purple-200",
//     avatarInitial: "A",
//   },
//   {
//     id: 2,
//     name: "Yohan S.",
//     location: "Unknown",
//     rating: 5,
//     timeAgo: "8 days ago",
//     comment: "It was a great experience, very good customer service, and smooth delivery",
//     avatarColor: "bg-teal-500",
//     avatarInitial: "Y",
//   },
//   {
//     id: 3,
//     name: "Vyshnavl B.",
//     location: "Unknown",
//     rating: 5,
//     timeAgo: "2 days ago",
//     comment:
//       "Very much impressed with the packaging...authentic Rudrakshas...really happy with the order. Har har mahadev Om namah parvathi pathaye har har mahadev🙏",
//     avatarColor: "bg-purple-500",
//     avatarInitial: "V",
//   },
//   {
//     id: 4,
//     name: "Rahul M.",
//     location: "Mumbai, India",
//     rating: 5,
//     timeAgo: "1 week ago",
//     comment: "The Rudraksha beads are of excellent quality. I can feel the positive energy. Thank you!",
//     avatarColor: "bg-amber-500",
//     avatarInitial: "R",
//   },
//   {
//     id: 5,
//     name: "Priya K.",
//     location: "Delhi, India",
//     rating: 5,
//     timeAgo: "3 days ago",
//     comment: "Fast shipping and beautiful packaging. The Rudraksha has brought peace to my life.",
//     avatarColor: "bg-emerald-500",
//     avatarInitial: "P",
//   },
// ]

// export const blogPosts: BlogPost[] = [
//   {
//     id: "5",
//     title: "How to Choose the Right Rudraksha for Yourself?",
//     excerpt: "Choosing the right Rudraksha depends on your needs and spiritual goals. Learn how to select the best Rudraksha bead based on your zodiac sign and energy requirements...",
//     image: "/images/blogs/best.webp",
//     slug: "choose-right-rudraksha"
//   },
//   {
//     id: "1",
//     title: "Different Types of Rudraksha and Their Significance",
//     excerpt: "Rudraksha beads come in various types, each with unique benefits and spiritual significance. From one Mukhi to twenty-one Mukhi, discover the hidden power...",
//     image: "/images/blogs/types.webp",
//     slug: "different-types-of-rudraksha"
//   },
//   {
//     id: "2",
//     title: "Why Should You Wear a Rudraksha? The Spiritual and Scientific Reasons",
//     excerpt: "Wearing a Rudraksha is believed to enhance spiritual growth, mental clarity, and physical well-being. But what does science say? Explore the reasons why...",
//     image: "/images/blogs/choose.webp",
//     slug: "why-wear-rudraksha"
//   },
//   {
//     id: "3",
//     title: "The Mysteries of Rudraksha: Unveiling Ancient Legends",
//     excerpt: "Rudraksha beads are steeped in myths and ancient legends. From Lord Shiva’s tears to their mystical healing powers, dive deep into the fascinating mysteries...",
//     image: "/images/blogs/whatev.webp",
//     slug: "mysteries-of-rudraksha"
//   },
//   {
//     id: "4",
//     title: "Amazing Benefits of Rudraksha: Health, Wealth, and Spirituality",
//     excerpt: "Rudraksha beads are known to bring balance, reduce stress, and promote spiritual growth. Learn about the profound benefits of wearing Rudraksha in daily life...",
//     image: "/images/blogs/benefits.webp",
//     slug: "benefits-of-rudraksha"
//   },
// ];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Neha S.",
    location: "Bengaluru, India",
    rating: 5,
    timeAgo: "3 hours ago",
    comment: "Fresh veggies delivered right to my doorstep! Loved the quality and packaging.",
    avatarColor: "bg-green-200",
    avatarInitial: "N",
  },
  {
    id: 2,
    name: "Ravi T.",
    location: "Hyderabad, India",
    rating: 4,
    timeAgo: "1 day ago",
    comment: "Great prices and very fresh produce. The mangoes were delicious!",
    avatarColor: "bg-orange-400",
    avatarInitial: "R",
  },
  {
    id: 3,
    name: "Anjali M.",
    location: "Pune, India",
    rating: 5,
    timeAgo: "5 days ago",
    comment:
      "Smooth delivery and high quality groceries. My family loved the organic spinach and tomatoes!",
    avatarColor: "bg-yellow-400",
    avatarInitial: "A",
  },
  {
    id: 4,
    name: "Karan J.",
    location: "Delhi, India",
    rating: 4,
    timeAgo: "1 week ago",
    comment: "User-friendly site and great deals on fruits. Highly recommended!",
    avatarColor: "bg-blue-300",
    avatarInitial: "K",
  },
  {
    id: 5,
    name: "Meera L.",
    location: "Chennai, India",
    rating: 5,
    timeAgo: "2 days ago",
    comment: "Loved the freshness and the eco-friendly packaging. Will shop again!",
    avatarColor: "bg-rose-300",
    avatarInitial: "M",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 10 Healthy Vegetables You Should Add to Your Diet",
    excerpt: "Eating fresh vegetables is key to a healthy lifestyle. Discover the top ten veggies packed with nutrients and health benefits.",
    image: "/images/blogs/blog1.jpg",
    slug: "healthy-vegetables-top10"
  },
  {
    id: "2",
    title: "How to Store Fruits and Vegetables the Right Way",
    excerpt: "Reduce waste and keep your produce fresher for longer with these simple storage tips.",
    image: "/images/blogs/blog2.jpg",
    slug: "store-fruits-vegetables"
  },
  {
    id: "3",
    title: "Easy and Delicious Recipes Using Seasonal Produce",
    excerpt: "Make the most of seasonal fruits and vegetables with these quick and easy recipes your family will love.",
    image: "/images/blogs/blog3.jpg",
    slug: "seasonal-recipes"
  },
  {
    id: "4",
    title: "Benefits of Buying Organic: Is It Worth It?",
    excerpt: "Learn the differences between organic and conventional produce and decide if it's the right choice for you.",
    image: "/images/blogs/blog4.jpg",
    slug: "organic-produce-benefits"
  },
  {
    id: "5",
    title: "Sustainable Grocery Shopping: Tips for Eco-Conscious Consumers",
    excerpt: "Explore how you can make environmentally-friendly choices while shopping for daily groceries.",
    image: "/images/blogs/blog5.jpg",
    slug: "eco-friendly-grocery-tips"
  },
];


export const products: ProductShow[] = [
  {
    id: 1,
    name: "Bitter Gourd",
    description: "Medicinal Vegetable",
    originalPrice: "Rs. 50.00",
    currentPrice: "Rs. 45.00",
    orgprice : 50.00,
    price: 45.00,
    image: "/images/Collections/Rudraksha/karela.jpg"
  },
  {
    id: 2,
    name: "Tomatoes",
    description: "Juicy & Fresh",
    originalPrice: "Rs. 100",
    currentPrice: "Rs. 70/kg",
    orgprice : 100.00,
    price: 70.00,
    image: "/images/Collections/Rudraksha/tomatoes.jpg"
  },
  {
    id: 3,
    name: "Onion",
    description: "Crisp & Fresh",
    originalPrice: "Rs. 100",
    currentPrice: "Rs. 80/kg",
    orgprice : 80.00,
    price : 100.00,
    image: "/images/Collections/Rudraksha/omion1.jpg"
  },
  {
    id: 4,
    name: "Carrot",
    description: " Crruncy Root",
    originalPrice: "Rs. 70.00",
    currentPrice: "Rs. 50.00",
    orgprice : 70.00,
    price : 50.00,
    image: "/images/Collections/Rudraksha/carrot.jpg"
  },
  {
    id: 5,
    name: "Pomogranate",
    originalPrice: "Rs. 220.00",
    currentPrice: "Rs. 180.00",
    price : 180.00,
    orgprice : 220.00,
    image: "/images/Blogs/pomogranate.jpg",
    // description: "Lab-certified Indonesian Rudraksha mala",
  },
  {
    id: 6,
    name: "Water Melons",
    originalPrice: "Rs. 100.00",
    currentPrice: "Rs. 89.00",
    price : 100.00,
    orgprice : 89.00,
    image: "/images/Blogs/melons.jpg",
    // description: "Lab-certified Indonesian Rudraksha mala",
  },
  {
    id: 7,
    name: "Mangoes",
    originalPrice: "Rs. 250.00",
    currentPrice: "Rs. 200.00",
    price : 200.00,
    orgprice : 250.00,
    image: "/images/Blogs/mangoes.jpg",
    // description: "Lab-certified Indonesian Rudraksha mala",
  },
  {
    id: 8,
    name: "Banana",
    originalPrice: "Rs. 100.00",
    currentPrice: "Rs. 80.00",
    price : 80.00,
    orgprice : 100.00,
   image: "/images/Blogs/banana.jpg",
    // description: "Lab-certified Indonesian Rudraksha mala",
  },
]
