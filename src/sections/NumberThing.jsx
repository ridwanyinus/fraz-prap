import React from "react";

const NumberThing = () => {
   return (
      <section className="flex max-lg:justify-around flex-wrap justify-evenly lg:gap-20 items-center py-10 bg-white">
         <div className="flex items-center gap-2 sm:gap-4 z-10">
            <p className="sm:text-5xl font-semibold leading-normal text-4xl z-10">
               2K<span className="text-primary">+</span>
            </p>
            <p className="text-lg max-sm:text-base leading-[114%] capitalize z-10">
               premium <br />
               product.
            </p>
         </div>

         <div className="flex items-center gap-2 sm:gap-4">
            <p className="sm:text-5xl font-semibold leading-normal  text-4xl z-10">
               6K<span className="text-primary">+</span>
            </p>
            <p className="text-lg max-sm:text-base leading-[114%] capitalize z-10">
               Happy <br />
               Customer.
            </p>
         </div>

         <div className="flex items-center gap-2 sm:gap-4 max-xs:mt-4">
            <p className="sm:text-5xl font-semibold leading-normal text-4xl  z-10">
               100K<span className="text-primary">+</span>
            </p>
            <p className="text-lg max-sm:text-base leading-[114%] capitalize  z-10">
               Awards <br />
               Winning.
            </p>
         </div>
      </section>
   );
};

export default NumberThing;
