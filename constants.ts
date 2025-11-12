import { Product, Review } from './types';

export const WHATSAPP_NUMBER = '918439988051';
export const WHATSAPP_SUPPORT_NUMBER = '919654314000';
export const EMAIL_ADDRESS = 'yadukul_dairy@proton.me';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Buffalo Milk",
    price: 82,
    unit: "/ Ltr",
    image: "https://res.cloudinary.com/dxbugufks/image/upload/v1762931921/WhatsApp_Image_2025-11-12_at_5.58.14_AM_li7dup.jpg"
  },
  {
    id: 2,
    name: "Cow Milk",
    price: 77,
    unit: "/ Ltr",
    image: "https://res.cloudinary.com/dxbugufks/image/upload/v1762931883/WhatsApp_Image_2025-11-12_at_5.58.13_AM_axqhut.jpg"
  },
  {
    id: 3,
    name: "Curd (Dahi)",
    price: 130,
    unit: "/ Kg",
    image: "https://res.cloudinary.com/dxbugufks/image/upload/v1762729189/pexels-nuruddin-bharmal-1923263-3547176_aemrac.jpg"
  },
  {
    id: 4,
    name: "Butter Milk (Chaach)",
    price: 40,
    unit: "/ Ltr",
    image: "https://res.cloudinary.com/dxbugufks/image/upload/v1762729435/pexels-marta-dzedyshko-1042863-6341422_jmdjni.jpg"
  },
  {
    id: 5,
    name: "Buffalo Ghee",
    price: 1300,
    unit: "/ Kg",
    image: "https://res.cloudinary.com/dxbugufks/image/upload/v1762729912/Screenshot_2025-11-10_044112_teqgtu.png"
  },
  {
    id: 6,
    name: "Cow Ghee",
    price: 1600,
    unit: "/ Kg",
    image: "https://res.cloudinary.com/dxbugufks/image/upload/v1762730267/Screenshot_2025-11-10_044733_ptfato.png"
  },
  {
    id: 7,
    name: "Paneer",
    price: 440,
    unit: "/ Kg",
    image: "https://res.cloudinary.com/dxbugufks/image/upload/v1762730461/Screenshot_2025-11-10_045046_mqh5hn.png"
  },
  {
    id: 8,
    name: "Butter (Desi Makhan)",
    price: 1000,
    unit: "/ Kg",
    image: "https://res.cloudinary.com/dxbugufks/image/upload/v1762730651/pexels-markusspiske-94443_rrbfy0.jpg"
  },
  {
    id: 9,
    name: "Farm Mustard Oil",
    price: 220,
    unit: "/ Ltr",
    image: "https://res.cloudinary.com/dxbugufks/image/upload/v1762730864/pexels-kristina-snowasp-81019562-8978879_sxftse.jpg"
  },
  {
    id: 10,
    name: "Mawa",
    price: 480,
    unit: "/ Kg",
    image: "https://res.cloudinary.com/dxbugufks/image/upload/v1762731120/Screenshot_2025-11-10_050140_rm3jwq.png"
  },
  {
    id: 11,
    name: "Lassi",
    price: 80,
    unit: "/ Ltr",
    image: "https://res.cloudinary.com/dxbugufks/image/upload/v1762731250/Screenshot_2025-11-10_050335_k6u5mx.png"
  },
  {
    id: 12,
    name: "Green Pea",
    price: 180,
    unit: "/ Kg",
    image: "https://res.cloudinary.com/dxbugufks/image/upload/v1762931848/WhatsApp_Image_2025-11-12_at_12.46.48_PM_jg7omr.jpg"
  },
  {
    id: 13,
    name: "Chaap",
    price: 140,
    unit: "/ Kg",
    image: "https://res.cloudinary.com/dxbugufks/image/upload/v1762931905/WhatsApp_Image_2025-11-12_at_12.46.48_PM_1_qtyzwv.jpg"
  }
];


export const REVIEWS: Review[] = [
  { id: 1, name: "Anjali S.", comment: "The best buffalo milk in Noida! So creamy and fresh. My kids love it.", rating: 5 },
  { id: 2, name: "Rajat K.", comment: "Yadukul's ghee reminds me of my village. The aroma and taste are just authentic.", rating: 5 },
  { id: 3, name: "Priya M.", comment: "Their paneer is so soft and delicious. Makes the perfect paneer tikka.", rating: 5 },
  { id: 4, name: "Vikram R.", comment: "Consistently great quality and always delivered on time. Highly recommended.", rating: 5 },
  { id: 5, name: "Sunita G.", comment: "The curd is thick and tasty, just like homemade. I'm a permanent customer now.", rating: 5 },
  { id: 6, name: "Amit B.", comment: "I tried their cow milk and it's fantastic. Much better than packaged milk.", rating: 5 },
  { id: 7, name: "Neha D.", comment: "The desi makhan is pure bliss. It's rich and full of flavor.", rating: 5 },
  { id: 8, name: "Karan T.", comment: "Excellent customer service and top-notch products. Keep up the good work!", rating: 5 },
  { id: 9, name: "Deepika V.", comment: "The chaach is so refreshing, especially in the summer. A must-try!", rating: 5 },
  { id: 10, name: "Manish P.", comment: "Finally, a dairy that delivers on its promise of purity. You can taste the difference.", rating: 5 },
  { id: 11, name: "Swati J.", comment: "The mustard oil has a strong, authentic flavor. Great for cooking.", rating: 5 },
  { id: 12, name: "Arjun S.", comment: "Their subscription model is so convenient. I never have to worry about running out of milk.", rating: 5 },
  { id: 13, name: "Pooja A.", comment: "Lassi from Yadukul is thick, creamy, and perfectly sweet. A real treat!", rating: 5 },
  { id: 14, name: "Rohit N.", comment: "Impressed with the hygiene and quality standards. Trustworthy and reliable.", rating: 5 },
  { id: 15, name: "Meera C.", comment: "The Mawa is perfect for making sweets at home. Its quality is unmatched.", rating: 5 },
  { id: 16, name: "Sahil G.", comment: "I order a mix of products every week and have never been disappointed. Five stars!", rating: 5 },
  { id: 17, name: "Isha K.", comment: "Their cow ghee is incredible. You can tell it's made with care.", rating: 5 },
  { id: 18, name: "Gaurav M.", comment: "The delivery is always prompt and the products are always fresh. What more can you ask for?", rating: 5 },
  { id: 19, name: "Ritika B.", comment: "I was skeptical about trying a new dairy, but Yadukul has won me over completely.", rating: 5 },
  { id: 20, name: "Sanjay V.", comment: "My entire family loves Yadukul products. From milk to ghee, everything is perfect.", rating: 5 },
  { id: 21, name: "Tina S.", comment: "The quality of the paneer is consistently excellent. So fresh and soft.", rating: 5 },
  { id: 22, name: "Harish T.", comment: "Their butter is the real deal. Tastes amazing on parathas.", rating: 5 },
  { id: 23, name: "Divya R.", comment: "A brand that truly stands for purity and quality. I trust them completely.", rating: 5 },
  { id: 24, name: "Nitin K.", comment: "The ordering process via WhatsApp is so simple and efficient.", rating: 5 },
  { id: 25, name: "Preeti S.", comment: "The buffalo milk is rich and creamy, perfect for my morning chai.", rating: 5 },
  { id: 26, name: "Vivek G.", comment: "Absolutely love the freshness. It feels like getting produce straight from a farm.", rating: 5 },
  { id: 27, name: "Anu P.", comment: "Their customer support is very responsive and helpful. Great experience overall.", rating: 5 },
  { id: 28, name: "Rajesh D.", comment: "I've recommended Yadukul Dairy to all my friends and family. They are the best.", rating: 5 },
  { id: 29, name: "Shikha M.", comment: "The lassi and chaach are my favorites. Incredibly refreshing and natural.", rating: 5 },
  { id: 30, name: "Alok J.", comment: "Finally found a dairy in Noida that provides pure, unadulterated products. Thank you!", rating: 5 },
];
