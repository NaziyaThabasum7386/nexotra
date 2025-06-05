/** @type {import('tailwindcss').Config} */
export default {
  content:['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
     
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(246,0,254,1) 20%, rgba(201,0,254,1) 31%, rgba(161,54,255,1) 43%, rgba(81,66,240,1) 66%, rgba(0,51,217,1) 100%)',
         'custom-profile':' linear-gradient(90deg, rgba(252, 92, 255, 1) 20%, rgba(218, 120, 245, 1) 31%, rgba(197, 137, 250, 1) 43%, rgba(151, 142, 250, 1) 66%, rgba(0, 60, 255, 1) 96%);'
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 3s linear infinite',
      },
      
    },
    
  },
  plugins: [],
};