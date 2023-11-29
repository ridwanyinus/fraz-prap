import React from "react";
import { About, ContactUs, Footer, News, NumberThing, PopularResidence, Property } from "./sections";
import Head from "./sections/Head";
import "./index.css";

const App = () => {
   return (
      <main className="font-popping">
         <Head />
         <NumberThing />
         <Property />
         <PopularResidence />
         <News />
         <About />
         <ContactUs />
         <Footer />
      </main>
   );
};

export default App;
