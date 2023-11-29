/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      extend: {
         screens: {
            xs: "480px",
         },

         fontFamily: {
            inter: ["inter", "sans-serif"],
            popping: ["Poppins", "sans-serif"],
         },

         colors: {
            primary: "#FA2646",
            footer: "#0A142F",
         },

         backgroundImage: {
            heroBG: "url('assets/heroBG.png')",
         },
      },
   },
   plugins: [],
};
