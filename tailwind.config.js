/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        coffee1: "#C67C4E",
        coffee2: "#EDD6C8",
        coffee3: "#313131",
        coffee4: "#E3E3E3",
        coffee5: "#F9F2ED",
      },
      fontFamily: {
        sora: ["Sora_400Regular", "Sora_600SemiBold"]
      },
      borderRadius: {
        xl: "12px"
      }
    }
  },

  plugins: [],
};
