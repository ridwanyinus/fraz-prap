import property1 from "/assets/private.svg";
import property3 from "/assets/property3.svg";
import property4 from "/assets/property4.svg";

import popular1 from "/assets/popular1.png";
import popular2 from "/assets/popular2.png";
``;
import popular3 from "/assets/popular3.png";
import popular4 from "/assets/popular4.png";

import news1 from "/assets/news1.png";
import news2 from "/assets/news2.png";
import news3 from "/assets/news3.png";
import news4 from "/assets/news4.png";

export const navLinks = [
   { href: "#popular", label: "For Sale" },
   { href: "#property", label: "For Rent" },
   { href: "#contact", label: "Sell" },
   { href: "#aboutUs", label: "About Us" },
   { href: "#contact", label: "Contact" },
];

export const property = [
   {
      imgUrl: property3,
      title: "Shop",
      label: "81 Property",
   },
   {
      imgUrl: property4,
      title: "Office",
      label: "231 Property",
   },
   {
      imgUrl: property1,
      title: "Villa",
      label: "423 Property",
   },
];
export const popular = [
   {
      imgUrl: popular1,
      title: "Safira magesti raya",
      label: "Jl. Mangesti Raya Gentan Sukoharjo",
      price: "40.424",
      id: "house-1",
   },
   {
      imgUrl: popular2,
      title: "Solo Urbana Residence",
      label: "Jl. Mojo, Gulon, Mojosongo, Kec. Jebres, Kota Surakarta.",
      price: "23.692",
      id: "house-2",
   },
   {
      imgUrl: popular3,
      title: "Brentwood Residence",
      label: "Grogol, Dusun I, Telukan, Kec. Grogol.",
      price: " 159.475",
      id: "house-3",
   },
   {
      imgUrl: popular4,
      title: "Solo paragon residence",
      label: "Banjarsari, Surakarta, Jawa Tengah",
      price: "34.656",
      id: "house-4",
   },
];

export const news = [
   {
      imgUrl: news1,
      title: "MARKET",
      date: "25 sep 2023",
      label: "Latest Property Price Trends: Up or Down?.",
      author: "by : Jane Cooper",
      views: "53K views",
   },
   {
      imgUrl: news2,
      title: "TIPS",
      date: "07 apr 2023",
      label: "L5 Important Tips for Buying Your First Property.",
      author: "By : Jenny Wilson",
      views: "43K views",
   },
   {
      imgUrl: news3,
      title: "MARKET",
      date: "13 may 2023",
      label: "The Best Strategies for Selling Your Property in a Competitive Market.",
      author: "by : Jerome Bell",
      views: "13K views",
   },
   {
      imgUrl: news4,
      title: "NEWS",
      date: "28 dec 2023",
      label: "New Government Policies Impacting the Property Market.",
      author: "by : Theresa",
      views: "78K views",
   },
];
export const footerLinks = [
   {
      title: "Product",
      links: [
         { name: "For Sale", link: "/", id: "i" },
         { name: "For Rent", link: "/", id: "j" },
         { name: "Sell", link: "/", id: "k" },
      ],
      id: "a",
   },
   {
      title: "Pages",
      links: [
         { name: "Information", link: "/", id: "e" },
         { name: "FAQ", link: "/", id: "f" },
         { name: "Blog", link: "/", id: "g" },
         { name: "Support", link: "/", id: "h" },
      ],
      id: "b",
   },
   {
      title: "Company",
      links: [
         { name: "About us", link: "#aboutUS", id: "a" },
         { name: "Careers", link: "/", id: "b" },
         { name: "Contact us", link: "/", id: "c" },
         { name: "Vista Property", link: "/", id: "d" },
      ],
      id: "c",
   },
];
