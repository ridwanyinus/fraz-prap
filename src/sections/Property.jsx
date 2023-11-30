import React from "react";
import { property } from "../constants/data";
import property1 from "/assets/private.svg";
import property2 from "/assets/property2.svg";

const Property = () => {
   return (
      <section id="property" className="padding bg-white">
         <h1 className="text-2xl xs:text-3xl font-semibold leading-normal pb-8 capitalize">Property Type</h1>
         <div className="max-xs:flex flex-col items-center justify-center   grid  xs:grid-cols-2  lg:grid-cols-3  xl:grid-cols-5 pt-3 gap-12 ">
            <div className="max-xs:w-[80%] h-[204px]  border-[1.3px] border-black rounded-[15px] flex flex-col justify-center items-center text-center bg-white">
               <img src={property1} alt="property" className="w-[45px] h-[44px] mb-5" />
               <h2 className="text-base font-medium capitalize leading-normal">Private House</h2>
               <p className="text-[#323232] text-[11.5px] capitalize leading-normal">523 Property</p>
            </div>

            <div className="max-xs:w-[80%] h-[204px]  flex flex-col justify-center items-center text-center bg-white rounded-[15px] apartment">
               <img src={property2} alt="property" className="w-[45px] h-[44px] mb-5" />
               <h2 className="text-base font-medium capitalize leading-normal">Apartment</h2>
               <p className="text-[#323232] text-[11.5px] capitalize leading-normal">142 Property</p>
            </div>

            {property.map((items) => (
               <div className="max-xs:w-[80%] h-[204px]  border-[1.3px] border-black rounded-[15px] flex flex-col justify-center items-center text-center bg-white" key={items.title}>
                  <img src={items.imgUrl} alt={items.title} className="w-[45px] h-[44px] mb-5" />
                  <h2 className="text-base font-medium capitalize leading-normal">{items.title}</h2>
                  <p className="text-[#323232] text-[11.5px] capitalize leading-normal">{items.label}</p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Property;
