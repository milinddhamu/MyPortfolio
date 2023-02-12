module.exports = {
  mode:"jit",
  content:['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        slate50:'rgb(248 250 252 /20%)',
        slate400:'rgb(148 163 184 /20%)',
        white700:'rgb(255 255 255 /40%)',
        slate800:'rgb(148 163 184 /60%)',


        
      },
      screens:{
        'sm':'430px',
        'md':'640px',
        'xl':'850px',
        'xlg':'1350px',
        'xxlg':'1530px',
      },
      variants:{
        animation: ["motion-safe"]
      },
      fontFamily:{
        Oswald:['DM Serif Display', 'serif'],
        Roboto:['Roboto Serif','serif'],
        Mono:['Roboto Mono', 'monospace'], 
      },
      backgroundImage:{
        'walli': "url('/public/background.jpg')",
      },
      animation: {
        text: 'text 4s ease infinite',
        fadeIn: "fadeIn 1.5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '25%': {
            'background-size': '200% 200%',
            'background-position': 'bottom',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right',
          },
          '75%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
  },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
