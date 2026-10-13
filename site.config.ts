import type { SiteConfig } from "@/lib/types";

// The ONLY file a builder edits (plus images in /public).
// Empty or missing optional fields hide their section automatically.
// Use real facts only: the leads JSON, the IG profile, and posts. Never invent hours, prices, or reviews.
// No double hyphens anywhere in copy; the build fails if one slips in.

export const site: SiteConfig = {
  name: "Kurly Cakes",
  tagline: "Gourmet custom and wedding cakes in Brampton. Crafting moments, baking memories.",
  category: "Custom cakes",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://kurly-cakes.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#c07878" }, // rose gold from logo ring and sparkles
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Cake artist in Brampton",
    headline: "Custom cakes made for your moment",
    subhead: "Gourmet cakes, wedding tiers, and celebration designs, made to order. DM or call with your date, size, flavour, and design idea to get started.",
    images: [
      { src: "/images/post-2.jpg", alt: "Two tier lavender butterfly birthday cake by Kurly Cakes" },
      { src: "/images/post-1.jpg", alt: "Custom racing themed birthday cake by Kurly Cakes" },
      { src: "/images/post-6.jpg", alt: "Custom gourmet cake by Kurly Cakes" },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Made to order",
    "Weddings and celebrations",
    "Orders by DM or phone",
    "Brampton, Ontario",
  ],

  about: {
    title: "Crafting moments, baking memories",
    body: [
      "Kurly Cakes is a Brampton cake studio creating gourmet custom cakes and wedding cakes for birthdays, anniversaries, baby showers, bridal showers, and every celebration in between.",
      "Share your date, servings or size, flavour, and a design idea, and we will craft a cake that feels like yours.",
    ],
    image: { src: "/images/post-3.jpg", alt: "Custom celebration cake by Kurly Cakes" },
  },

  menu: {
    title: "What we bake",
    intro: "Every cake is custom. Quotes are given when you reach out with your date and design.",
    variant: "cards",
    groups: [
      {
        title: "Celebration cakes",
        note: "Quoted by DM or phone",
        items: [
          {
            name: "Custom gourmet cakes",
            description: "Birthday, anniversary, and themed designs made for your guest list.",
            image: { src: "/images/post-1.jpg", alt: "Custom themed birthday cake" },
          },
          {
            name: "Wedding cakes",
            description: "Elegant tiers for your day, sized to your celebration.",
            image: { src: "/images/post-5.jpg", alt: "Wedding cake by Kurly Cakes" },
          },
          {
            name: "Shower cakes",
            description: "Baby shower and bridal shower cakes with a personal touch.",
            image: { src: "/images/post-2.jpg", alt: "Floral butterfly celebration cake" },
          },
        ],
      },
    ],
    footnote: "Final quotes depend on size, flavour, design, and date.",
  },

  gallery: {
    title: "A look at the cakes",
    items: [
      {
        src: "/images/post-1.jpg",
        width: 1080,
        height: 1334,
        alt: "Racing themed birthday cake",
        caption: "Custom birthday cake",
        href: "https://www.instagram.com/p/DeYOP1LNAZN/",
      },
      {
        src: "/images/post-2.jpg",
        width: 960,
        height: 1200,
        alt: "Lavender butterfly birthday cake",
        caption: "Butterfly celebration cake",
        href: "https://www.instagram.com/p/DeYOB5UtDXm/",
      },
      {
        src: "/images/post-3.jpg",
        width: 1080,
        height: 1334,
        alt: "Custom gourmet cake",
        caption: "Custom cake design",
        href: "https://www.instagram.com/p/DeYN5-uN0SM/",
      },
      {
        src: "/images/post-6.jpg",
        width: 1080,
        height: 1350,
        alt: "Custom cake by Kurly Cakes",
        caption: "Made to order",
        href: "https://www.instagram.com/p/DeYN0fRt9X-/",
      },
      {
        src: "/images/post-7.jpg",
        width: 1080,
        height: 1350,
        alt: "Celebration cake",
        caption: "Celebration cake",
        href: "https://www.instagram.com/p/DeYNy2kNhz2/",
      },
      {
        src: "/images/post-8.jpg",
        width: 1080,
        height: 1350,
        alt: "Gourmet custom cake",
        caption: "Gourmet custom cake",
        href: "https://www.instagram.com/p/DeYNxG8t7GY/",
      },
      {
        src: "/images/post-5.jpg",
        width: 640,
        height: 1136,
        alt: "Wedding cake",
        caption: "Wedding cakes",
        href: "https://www.instagram.com/p/DM4PeO_MxbM/",
      },
      {
        src: "/images/post-4.jpg",
        width: 640,
        height: 1136,
        alt: "Cake design detail",
        caption: "Cake art",
        href: "https://www.instagram.com/p/DUVvphLDRX4/",
      },
    ],
  },

  instagram: {
    handle: "kurly.cakes",
    embeds: [
      "https://www.instagram.com/p/DeYOP1LNAZN/",
      "https://www.instagram.com/p/DeYOB5UtDXm/",
      "https://www.instagram.com/p/DM4PeO_MxbM/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are taken by Instagram DM or phone. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage:
      "Hi Kurly Cakes! I would like to order a custom cake.\nDate needed:\nServings or size:\nFlavour:\nDesign idea:",
    links: [],
    note: "You can also call +1 647-766-3992 to place an order.",
  },

  reviews: {
    title: "What guests say",
    items: [
      {
        quote:
          "The cake was butterscotch flavored, musical themed and was done beautifully. It tasted great and was not too heavy on the pallete.",
        source: "Google",
      },
      {
        quote:
          "KURLY CAKES was amazing and very attentive to what I wanted the cake to look like and taste like as per flavor.",
        source: "Google",
      },
    ],
  },

  faq: [
    {
      q: "How do I order?",
      a: "Send a DM on Instagram or call +1 647-766-3992 with your date, servings or size, flavour, and design idea. You will get a quote back from there.",
    },
    {
      q: "What kinds of cakes do you make?",
      a: "Gourmet custom cakes and wedding cakes, plus birthday, anniversary, baby shower, and bridal shower designs.",
    },
    {
      q: "Where are you based?",
      a: "Kurly Cakes is based in Brampton, Ontario.",
    },
  ],

  contact: {
    area: "Brampton, Ontario",
    phone: "+1 647-766-3992",
    socials: [
      { label: "Instagram @kurly.cakes", href: "https://www.instagram.com/kurly.cakes/" },
    ],
  },

  seo: {
    title: "Kurly Cakes | Custom and wedding cakes in Brampton",
    description:
      "Gourmet custom and wedding cakes in Brampton, Ontario. Order by Instagram DM or phone for birthdays, weddings, and celebrations.",
    keywords: [
      "custom cakes Brampton",
      "wedding cakes Brampton",
      "gourmet cakes Brampton",
      "birthday cakes Brampton",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
