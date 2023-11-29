import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
const Head = () => {
   return (
      <section className="relative bg-[#F1F1F1] h-full text-black bg-no-repeat">
         <Navbar className="relative" />
         <Hero />
         <div className="absolute max-lg:-top-1 right-0 top-0 h-full ">
            <img src="./assets/heroBG.png" className="object-contain max-sm:h-full max-sm:object-cover  h-screen max-lg:w-full -z-10 " />
         </div>
      </section>
   );
};

export default Head;
