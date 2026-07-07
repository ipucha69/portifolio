/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1420",
          soft: "#121E2E",
          line: "#22303F",
        },
        cloud: {
          DEFAULT: "#F2F4F3",
          dim: "#E6E9E6",
        },
        signal: {
          DEFAULT: "#12836B",
          bright: "#1AA486",
          dim: "#0D5F4E",
        },
        amber: {
          DEFAULT: "#E2A63B",
          bright: "#F0B94F",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};
