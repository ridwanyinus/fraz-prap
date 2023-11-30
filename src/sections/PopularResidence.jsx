import React from "react";
import { popular } from "../constants/data";
const PopularResidence = () => {
   return (
      <section id="popular" className="padding-x py-16 bg-white">
         <div className="flex justify-between">
            <h2 className="text-2xl xs:text-3xl font-semibold leading-normal pb-8 lg:pb-12 capitalize">Popular Residences</h2>
            <a href="/" className="text-black opacity-[75%] leading-normal text-[11px] max-md:hidden">
               see all residences
            </a>
         </div>

         <div>
            <div className="grid gap-6 xs:grid-cols-2 xs:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:gap-10 md:gap-4">
               {popular.map((items) => (
                  <div key={items.id} className="border-[1px] border-opacity-[0.50] border-black rounded-[15px] p-1 w-fit">
                     <img src={items.imgUrl} alt={items.id} />
                     <div className="px-4">
                        <h2 className="max-sm:text-sm text-base font-medium leading-none capitalize pt-4 pb-1">{items.title}</h2>
                        <p className="text-[10px] leading-[14px] capitalize max-w-[139px] pb-1">{items.label}</p>
                        <p className="text-[15px] leading-normal font-semibold  capitalize pb-4">
                           <span className="text-primary">$</span>
                           {items.price}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default PopularResidence;
