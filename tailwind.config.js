module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
         'head': "url('./assets/images/bg-stars.svg')",
         'footer': "url('./assets/images/pattern-hills.svg')",
         'facebook': "url('./assets/images/icon-facebook.svg')",
         'instagram':"url('./assets/images/icon-pinterest.svg')",
         'pintrest':"url('./assets/images/icon-instagram.svg')"
        }),

    backgroundColor: theme => ({
       'gray-blue': 'hsl(237, 18%, 60%)',
       'light-blue': 'hsl(237, 19%, 50%)',
       'soft-red': 'hsl(345, 95%, 68%)',
       'dark-blue': 'hsl(236, 21%, 26%)',
       'med-dark-blue':'hsl(235, 16%, 14%)',
       'very-dark-blue':'hsl(234, 17%, 12%)'
      }),

      fontFamily:{
        body: ['Red Hat Text']
      },
      textColor: {
        'white': 'hsl(0, 0%,100%)',
        'gray-blue': 'hsl(237, 18%, 59%)',
         'soft-red': 'hsl(345, 95%, 68%)',
         'dark-blue': 'hsl(236, 21%, 26%)',
         'med-dark-blue':'hsl(235, 16%, 14%)',
         'very-dark-blue':'hsl(234, 17%, 12%)'
      }
        
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
