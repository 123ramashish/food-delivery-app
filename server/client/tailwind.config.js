import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      boxShadow: {
        sm: "0 5px 30px -15px #fecaca",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
