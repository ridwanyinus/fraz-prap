import React from "react";
import { news } from "../constants/data";

const News = () => {
   return (
      <section className="padding-x py-8 max-xs:py-2 bg-white">
         <div className="flex justify-between">
            <h1 className="text-2xl xs:text-3xl font-semibold leading-normal pb-8 lg:pb-12 capitalize flex items-center">News & Tips</h1>
            <a href="/" className="text-black opacity-[75%] leading-normal text-[11px] max-md:hidden">
               see all articles
            </a>
         </div>

         <div>
            <div className="grid gap-6 xs:grid-cols-2 xs:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:gap-10 md:gap-4">
               {news.map((items) => (
                  <div key={items.author} className="border-[1px] border-opacity-[0.50] border-black rounded-[15px] p-2 w-fit pb-6">
                     <img src={items.imgUrl} alt={items.id} />
                     <div className="px-4">
                        <div className="flex items-center gap-4 py-3 ">
                           <p className="text-[10px] font-normal text-primary leading-none capitalize ">{items.title}</p>
                           <svg xmlns="http://www.w3.org/2000/svg" width="2" height="11" viewBox="0 0 2 11" fill="none">
                              <path d="M1 1L1 10" stroke="black" strokeWidth="0.5" strokeLinecap="round" />
                           </svg>
                           <p className="text-[10px]  text-black font-light leading-none capitalize ">{items.date}</p>
                        </div>

                        <p className="text-[15px] leading-normal font-medium capitalize max-w-[234px] mb-6 pt-1">{items.label}</p>

                        <div className="flex justify-between items-end">
                           <p className="text-[10px]  text-black font-light leading-none capitalize ">{items.author}</p>

                           <svg xmlns="http://www.w3.org/2000/svg" width="2" height="11" viewBox="0 0 2 11" fill="none">
                              <path d="M1 1L1 10" stroke="black" strokeWidth="0.5" strokeLinecap="round" />
                           </svg>

                           <p className="text-[10px]  text-black font-light leading-none capitalize ">{items.views}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default News;
