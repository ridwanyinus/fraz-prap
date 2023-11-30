import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { PiPhoneDuotone } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import contact from "/assets/contact.svg";

const ContactUs = () => {
   return (
      <section id="contact" className="padding-x py-10 bg-white flex gap-16 max-lg:flex-col">
         <div className="flex-1">
            <h1 className="text-3xl font-semibold leading-normal capitalize mb-10 feel">Feel Free to Reach Out</h1>
            <p className="max-sm:text-base text-[17px] lg:text-[19px] leading-normal capitalize  xl:w-[573px]">
               We are always ready to listen to you and help you with your real estate needs. Feel free to contact us at:
            </p>
            <div className="grid xl:grid-cols-2 mt-8 xl:mt-16 gap-12 pb-10 xl:pb-20">
               <div className="flex gap-5">
                  <div className="bg-primary rounded-full h-[49px] w-[49px] flex items-center justify-center">
                     <IoMailOutline className="w-[23px] h-[18px] text-white" />
                  </div>
                  <div>
                     <h3 className="text-base font-medium capitalize leading-normal ">email : </h3>
                     <p className="text-base font-normal capitalize leading-normal">VistaProp@gmail.com</p>
                  </div>
               </div>

               <div className="flex gap-5">
                  <div className="bg-primary rounded-full h-[49px] w-[49px] flex items-center justify-center">
                     <PiPhoneDuotone className="w-[23px] h-[18px] text-white" />
                  </div>
                  <div>
                     <h3 className="text-base font-medium capitalize leading-normal ">phone number : </h3>
                     <p className="text-base font-normal capitalize leading-normal">(+234) 816-631-9747</p>
                  </div>
               </div>

               <div className="flex gap-5">
                  <div className="bg-primary rounded-full h-[49px] w-[49px] flex items-center justify-center">
                     <IoLocationOutline className="w-[23px] h-[18px] text-white" />
                  </div>
                  <div>
                     <h3 className="text-base font-medium capitalize leading-normal ">email : </h3>
                     <p className="text-base font-normal capitalize leading-normal">VistaProp@gmail.com</p>
                  </div>
               </div>
            </div>

            <h3 className="max-sm:text-base  text-[19px] leading-normal capitalize xl:w-[573px]">
               Thank you for your trust in Vista Property. We are committed to being your trusted partner in all your property needs.
            </h3>
         </div>

         <div className="flex-1">
            <img src={contact} alt="building" />
         </div>
      </section>
   );
};

export default ContactUs;
