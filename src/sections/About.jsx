import React from "react";
import about from "/assets/about.svg";

const About = () => {
   return (
      <section id="aboutUs" className="padding-x py-10 flex max-lg:flex-col-reverse max-lg:gap-10 justify-center items-center bg-white">
         <div className="flex-1 items-center justify-center">
            <img src={about} alt="about" className="w-[90%] object-contain" />
         </div>

         <div className=" flex-1 ">
            <h1 className="text-3xl font-semibold capitalize leading-normal">Who We Are</h1>

            <div className="mt-16 lg:mt-3 xl:mt-16 mb-10 xl:mb-10 lg:mb-4">
               <h2 className="text-[22px] capitalize leading-normal font-medium pb-3">A Trace of Success in the Property World.</h2>
               <p className="text-base font-normal leading-normal capitalize xl:w-[602px]">
                  Vista Property is your trusted partner on an unforgettable real estate journey. With the experience we have developed over the years, we have become one of the major players in this
                  industry. We proudly provide our customers with a high-quality experience in all aspects of property, including buying and selling, leasing, management and consulting.
               </p>
            </div>

            <h2 className="text-[22px] capitalize leading-normal font-medium pb-3">vision and mission.</h2>
            <p className="text-base font-normal leading-normal capitalize xl:w-[602px] lg:mb-3 xl:mb-12 mb-12">
               Our vision is to be a leader in providing superior and innovative property solutions. We are determined to provide the best service to our clients, keeping integrity, professionalism
               and innovation as our main foundation.
            </p>

            <button className="text-primary font-semibold text-lg leading-normal rounded-[5px] py-2 px-6 text-center border-primary border-[2px]  outline-none  bg-transparent w-fit capitalize">
               details company
            </button>
         </div>
      </section>
   );
};

export default About;
