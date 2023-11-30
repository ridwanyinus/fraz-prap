import React from "react";
import logo from "/assets/logo.svg";
import { footerLinks } from "../constants/data";
import { FaArrowRight } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="padding-y md:padding-x max-sm:px-6 bg-white ">
         <div className="max-xs:flex-col max-sm:gap-10 gap-5 flex justify-around  flex-wrap pb-6 ">
            {footerLinks.map((section) => (
               <div className="max-xl:flex-1 sm:w-fit" key={section.id}>
                  <h2 className="text-[#0A142F] text-[19px] font-bold leading-[28px] pb-3">{section.title}</h2>
                  {section.links.map((link) => (
                     <div className="flex" key={link.id}>
                        <a href={link.link} className="text-[#0A142F] text-base sm:text-lg leading-normal opacity-[0.5] hover:opacity-100 hover:text-primary pb-1">
                           {link.name}
                        </a>
                     </div>
                  ))}
               </div>
            ))}
            <div className="footer-card rounded h-full px-5 max-sm:py-5 sm:pb-5">
               <div className="w-fit lg:px-10 mt-2 mb-5 h-full">
                  <h2 className="text-[#0A142F] text-[19px] font-bold leading-[28px] pb-3">Subscribe</h2>
                  <div className="flex bg-white justify-center items-center rounded-[6px] border-mail w-fit mb-4  ">
                     <input
                        type="email"
                        placeholder="Email address"
                        className="placeholder:text-[14px] placeholder:text-[#0A142F] placeholder:opacity-[0.5] pl-3 max-md:w-[180px]border-none placeholder:border-none outline-none text-[14px]"
                     />

                     <div className="bg-primary py-4 px-4 rounded-r-[6px] text-white cursor-pointer">
                        <FaArrowRight />
                     </div>
                  </div>
                  <p className="text-[#0A142F] text-[13px] h-full  leading-[20.4px] opacity-[0.6] lg:w-[254px]">
                     Get the latest exclusive real estate updates. Join our subscription and be the first to know about your dream home. Sign up now!
                  </p>
               </div>
            </div>
         </div>
         <div className="flex justify-center items-center mt-8 mb-10">
            <div className="bg-[#0A142F] opacity-[0.3] h-[1px] md:w-[80%] w-full"></div>
         </div>

         <div className="flex max-sm:flex-col-reverse justify-start  sm:justify-around sm:items-center flex-wrap gap-5 ">
            <img src={logo} alt="logo" className="max-lg:w-[150px] max-sm:mt-5" />
            <div className="flex text-[#0A142F] text-[15px] gap-8">
               <a href="#">Terms</a>
               <a href="#">Privacy</a>
               <a href="#">Cookies</a>
            </div>
            <div className="flex gap-5 text-[#0A142F]">
               <FaLinkedinIn className="text-[#0A142F]  hover:cursor-pointer hover:text-primary" />
               <FaFacebookF className="text-[#0A142F] hover:cursor-pointer hover:text-primary" />
               <FaTwitter className="text-[#0A142F] hover:cursor-pointer hover:text-primary" />
               <FaInstagram className="text-[#0A142F] hover:cursor-pointer hover:text-primary" />
            </div>
         </div>
      </footer>
   );
};

export default Footer;
