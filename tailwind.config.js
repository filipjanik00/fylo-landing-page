/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      main: ["Open Sans", "sans-serif"],
      secondary: ["Raleway", "sans-serif"],
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkBlue: "hsl(243, 87%, 12%)",
        desaturedBlue: "hsl(238, 22%, 44%)",
        brightBlue: "hsl(224, 93%, 58%)",
        brighterBlue: "hsl(224, 99%, 67%)",
        cyan: "hsl(170, 45%, 43%)",
        lightCyan: "hsl(170, 59%, 57%)",
        lightGrayishBlue: "hsl(240, 75%, 98%)",
        lightGray: "hsl(0, 0%, 75%)",
      },
    },
  },
  plugins: [],
};
