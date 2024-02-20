/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens:{
      'xl': {'max': '1400px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
    colors: {
      dashboardbg:'rgba(199, 199, 199, 0.209)',
      taskySkyblue: '#4FC2E1',
      taskyPink: '#E75480',
      bgTransparent: "transparent",
      bgCurrent: "curenGoly",
      bgWhite: "#fff",
      bgGray100: "#f7fafc",
      bgGray200: "#edf2f7",
      bgGray300: "#e2e8f0",
      bgGray400: "#cbd5e0",
      bgGray500: "#a0aec0",
      bgGray600: "#718096",
      bgGray700: "#4a5568",
      bgGray800: "#2d3748",
      bgGray900: "#1a202c",
      bgRed100: "#fff5f5",
      bgRed200: "#fed7d7",
      bgRed300: "#feb2b2",
      bgRed400: "#fc8181",
      bgRed500: "#f56565",
      bgRed600: "#e53e3e",
      bgRed700: "#c53030",
      bgRed800: "#9b2c2c",
      bgRed900: "#742a2a",
      bgOrange100: "#fffaf0",
      bgOrange200: "#feebc8",
      bgOrange300: "#fbd38d",
      bgOrange400: "#f6ad55",
      bgOrange500: "#ed8936",
      bgOrange600: "#dd6b20",
      bgOrange700: "#c05621",
      bgOrange800: "#9c4221",
      bgOrange900: "#7b341e",
      bgYellow100: "#fffff0",
      bgYellow200: "#fefcbf",
      bgYellow300: "#faf089",
      bgYellow400: "#f6e05e",
      bgYellow500: "#ecc94b",
      bgYellow600: "#d69e2e",
      bgYellow700: "#b7791f",
      bgYellow800: "#975a16",
      bgYellow900: "#744210",
      bgGreen100: "#f0fff4",
      bgGreen200: "#c6f6d5",
      bgGreen300: "#9ae6b4",
      bgGreen400: "#68d391",
      bgGreen500: "#48bb78",
      bgGreen600: "#38a169",
      bgGreen700: "#2f855a",
      bgGreen800: "#276749",
      bgGreen900: "#22543d",
      bgTeal100: "#e6fffa",
      bgTeal200: "#b2f5ea",
      bgTeal300: "#81e6d9",
      bgTeal400: "#4fd1c5",
      bgTeal500: "#38b2ac",
      bgTeal600: "#319795",
      bgTeal700: "#2c7a7b",
      bgTeal800: "#285e61",
      bgTeal900: "#234e52",
      bgTlue100: "#ebf8ff",
      bgBlue200: "#bee3f8",
      bgBlue300: "#90cdf4",
      bgBlue400: "#63b3ed",
      bgBlue500: "#4299e1",
      bgBlue600: "#3182ce",
      bgBlue700: "#2b6cb0",
      bgBlue800: "#2c5282",
      bgBlue900: "#2a4365",
      bgIndigo100: "#ebf4ff",
      bgIndigo200: "#c3dafe",
      bgIndigo300: "#a3bffa",
      bgIndigo400: "#7f9cf5",
      bgIndigo500: "#667eea",
      bgIndigo600: "#5a67d8",
      bgIndigo700: "#4c51bf",
      bgIndigo800: "#434190",
      bgIndigo900: "#3c366b",
      bgPurple100: "#faf5ff",
      bgPurple200: "#e9d8fd",
      bgPurple300: "#d6bcfa",
      bgPurple400: "#b794f4",
      bgPurple500: "#9f7aea",
      bgPurple600: "#805ad5",
      bgPurple700: "#6b46c1",
      bgPurple800: "#553c9a",
      bgPurple900: "#44337a",
      bgPink100: "#fff5f7",
      bgPink200: "#fed7e2",
      bgPink300: "#fbb6ce",
      bgPink400: "#f687b3",
      bgPink500: "#ed64a6",
      bgPink600: "#d53f8c",
      bgPink700: "#b83280",
      bgPink800: "#97266d",
      bgPink900: "#702459",
      bgText: "rgb(231 84 128)",
      bgBackground: "rgb(99, 226, 209)",
      bgHover:"rgb(65 179 163)"

    }
  },
  plugins: [],
}
