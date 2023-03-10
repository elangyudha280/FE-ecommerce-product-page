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
        
      },
      animation:{
        showTransform:'showTransform 1s cubic-bezier(1,-0.36,.02,1.36) forwards',
        show:'show 0.6s cubic-bezier(1,-0.36,.02,1.36) forwards'
      },
      keyframes: {
        showTransform: {
          '0%': { opacity:'0', transform: 'translateY(-20px)' },
          '100%':{ opacity:'1', transform: 'translateY(0px)'},
        },
        show: {
          '0%': { opacity:'0'},
          '100%':{ opacity:'1'},
        }
      },
      screens:{
        'xs':'500px'
      }
    },
  },
  plugins: [],
}
