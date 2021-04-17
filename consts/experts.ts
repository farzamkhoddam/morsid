export interface Expert {
  slug: string;
  name: string;
  title: string;
  cartDesc: string;
  fullDesc: string;
  imageUrl: string;
  price: string;
  linkdinAddress?: string;
  websiteAddress?: string;
}

export const EXPERT_LIST: Expert[] = [
  {
    slug: "saeed_ramazany",
    name: "Saeed Ramazany",
    title: "Seo Expert",
    cartDesc:
      "I am Director of SEO in Torob (>500k daily clicks) with several years of experience in Digital Marketing. I can help you with Organic Growth of your business.",
    fullDesc:
      "I am Director of SEO in Torob (>500k daily clicks) with several years of experience in Digital Marketing. I can help you with Organic Growth of your business.",
    imageUrl: "/images/experts/saeed_ramazany.jpg",
    price: "$120",
    linkdinAddress: "http://www.linkedin.com/in/saeed-ramazany",
  },
  {
    slug: "iman_nazari",
    name: "Iman Nazari",
    title: "Front End Developer",
    cartDesc:
      "I've been the CEO of Dropbox for more than 3 years now. I can help you to grow your business.",
    fullDesc:
      "I've been the CEO of Dropbox for more than 3 years now. I can help you to grow your business. I've been the CEO of Dropbox for more than 3 years now. I can help you to grow your business.",
    imageUrl: "/images/experts/hamid.jpg",
    price: "$300",
    linkdinAddress: "https://www.linkedin.com/in/navid-goalpure",
  },
  {
    slug: "navid_goalpure",
    name: "Navid Goalpure",
    title: "Front End Developer",
    cartDesc:
      "I've been the CEO of Dropbox for more than 3 years now. I can help you to grow your business.",
    fullDesc:
      "I've been the CEO of Dropbox for more than 3 years now. I can help you to grow your business. I've been the CEO of Dropbox for more than 3 years now. I can help you to grow your business.",
    imageUrl: "/images/experts/hamid.jpg",
    price: "$300",
    linkdinAddress: "https://www.linkedin.com/in/navid-goalpure",
    websiteAddress: "https://react-resume.ir/",
  },
];
