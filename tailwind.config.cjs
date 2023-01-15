/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Kumbh-Sans': ["'Kumbh Sans'"],
      },
      colors:{
        'ecommerce-orange':"hsl(26, 100%, 55%)",
        'ecommerce-pale-orange':'hsl(25, 100%, 94%)',
        'ecommerce-very-dark-blue':'hsl(220, 13%, 13%)',
        'ecommerce-dark-grayish-blue':'hsl(219, 9%, 45%)',
        'ecommerce-grayish-blue':'hsl(220, 14%, 75%)',
        'ecommerce-light-grayish-blue':'hsl(223, 64%, 98%)',
        
      }
    },
  },
  plugins: [],
}
