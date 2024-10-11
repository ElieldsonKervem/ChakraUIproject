import { extendTheme } from "@chakra-ui/react";



//include all custom themes in here, like colors, fonts, etc

const customTheme = {
    colors: {
        brand: {
          50: "#f5f7ff",
          100: "#ebedff",
          200: "#d6d9ff",
          300: "#a1aaff",
          400: "#707eff",
          500: "#3b52ff",
          600: "#2a3ed9",
          700: "#202fb3",
          800: "#171f8c",
          900: "#0e1266",
        },
      },
      fonts: {
        heading: "'Roboto', sans-serif",
        body: "'Open Sans', sans-serif",
      },
      styles: {
        global: {
          "html, body": {
            backgroundColor: "#000",
            color: "gray.700",
          },
        },
      }
}

const theme = extendTheme(customTheme);


export default theme;