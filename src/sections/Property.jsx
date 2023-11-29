import React from "react";
import { property } from "../constants/data";

const Property = () => {
   return (
      <section className="padding">
         <h1>Property Type</h1>
         <div>
            {property.map((item) => (
               <div key={item.title}>
                  <img src={item.imgUrl} alt={item.title} />
               </div>
            ))}
         </div>
      </section>
   );
};

export default Property;
