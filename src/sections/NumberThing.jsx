import React from "react";

const NumberThing = () => {
   return (
      <section className="flex max-lg:justify-around flex-wrap justify-evenly lg:gap-20 items-center py-10">
         <div className="flex items-center gap-2 sm:gap-4">
            <p className="sm:text-5xl font-semibold leading-normal text-4xl">
               2K<span className="text-primary">+</span>
            </p>
            <p className="text-lg max-sm:text-base leading-[114%] capitalize">
               premium <br />
               product.
            </p>
         </div>

         <div className="flex items-center gap-2 sm:gap-4">
            <p className="sm:text-5xl font-semibold leading-normal  text-4xl">
               6K<span className="text-primary">+</span>
            </p>
            <p className="text-lg max-sm:text-base leading-[114%] capitalize">
               Happy <br />
               Customer.
            </p>
         </div>

         <div className="flex items-center gap-2 sm:gap-4 max-xs:mt-4">
            <p className="sm:text-5xl font-semibold leading-normal text-4xl ">
               100K<span className="text-primary">+</span>
            </p>
            <p className="text-lg max-sm:text-base leading-[114%] capitalize ">
               Awards <br />
               Winning.
            </p>
         </div>
      </section>
   );
};

export default NumberThing;
