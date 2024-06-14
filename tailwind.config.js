/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.js.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
      primary: {
        DEFAULT: "#e4336a",
        pink: "#e64577"
      },
      cusgray :"#333",
      secondary: {
        DEFAULT: "#134dcf"
      }
      },
      screens:{
        'smd': '960px'
      }
    },
  },
  plugins: [],
  important: true,
  corePlugins: {
    preflight: false
  }
}

