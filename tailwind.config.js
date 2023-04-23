/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
       lightBlue: '#273549',
       specialGray: '#CCC1FF',
       navyBlue: '#1F29389',
       specialBrown: '#3D3D3D',
       specialBlue: '#6943FF',
       specialColor: '#1F4567',
       specialWhite: '#08433'
    },
    },
  },
  plugins: [],
}
