module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Questrial':['Questrial']
    },
    extend: {
      colors: {
        green: {      
          DEFAULT: '#00f260',
        },
        primary: {
          DEFAULT: '#0000ff ',
        }
      }
    },
  },
  plugins: [],
}