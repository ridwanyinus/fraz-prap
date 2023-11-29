import React from "react";
import { FaLocationDot } from "react-icons/fa6";
const Hero = () => {
   return (
      <section className="px-6 py-16 md:py-16 sm:padding-x flex flex-col">
         <h1 className="font-bold max-xs:text-[29px] text-4xl md:text-5xl md:leading-normal lg:text-[50px] lg:leading-[140%] capitalize max-sm:pb-6  pb-4 w-full z-order">
            Turning Your <span className="italic">Dreams</span> <br /> Into Reality.
         </h1>

         <p className="max-w-[480px] max-xs:text-base text-lg capitalize leading-normal z-order">
            Committed to Crafting Your Homeownership Dreams Into Vibrant, Lasting Realities Through Unwavering Dedication and Expertise.
         </p>

         <div className="max-sm:pt-10 pt-6 w-fit z-order">
            <div className="flex">
               <a href="#" className="bg-primary text-white text-[13px] font-medium capitalize leading-normal text-center py-2 px-4 rounded-tl-[10.785px]  input-box-shadow">
                  Buy
               </a>
               <a href="#" className="bg-white text-primary text-[13px] font-medium capitalize leading-normal text-center py-2 px-4 rounded-tr-[10.785px]  input-box-shadow">
                  Rent
               </a>
            </div>

            <div className="input-box-shadow flex items-center justify-between gap-10 xs:gap-32 px-4 py-6 input-border bg-white space">
               <p className="text-[#696969] leading-normal capitalize text-[17px] flex text-center items-center max-xs:text-xs md:text-base w-full location">
                  <FaLocationDot color="#FA2646" className="w-5 h-[26px] mr-4" />
                  Search By Location
               </p>
               <button className="bg-primary text-white font-medium text-[15px] leading-normal rounded-[6px] max-sm:px-3 max-xs:py-1 py-2 px-6 text-center z-10 outline-none border-transparent hover:bg-transparent hover:text-primary hover:border-primary hover:border-2 search max-sm:text-[13px]">
                  Search
               </button>
            </div>
         </div>
      </section>
   );
};

export default Hero;
