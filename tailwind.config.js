module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./compos/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f0f0f0",
        bgSec: "#e3e3e3",
        pri: "#171717",
        priActive: "#292929",
        sec: "#1c1c24",
        secActive: "#2e2e3b",
        acs: "#4c70ff",
        acsActive: "#3156e0",
        sideItem: "#ecf0f3",
        font: "#afafaf",
        fontActive: "#ffffff",
        side: "#141e27",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        "open-sans-condensed": ["Open Sans Condensed", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
        "roboto-mono-condensed": ["Roboto Mono Condensed", "monospace"],
        lato: ["Lato", "sans-serif"],
        "lato-condensed": ["Lato Condensed", "sans-serif"],
        "lato-bold": ["Lato Bold", "sans-serif"],
        "lato-bold-condensed": ["Lato Bold Condensed", "sans-serif"],
        "lato-bold-italic": ["Lato Bold Italic", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        "scale-in": {
          "0%": {
            scale: "0.8",
          },
          "100%": {
            scale: 1,
          },
        },
        "scale-out": {
          "0%": {
            scale: 1,
          },
          "100%": {
            scale: "0.8",
          },
        },
      },
      animation: {
        fadein: "fade-in 0.2s forwards ease-in-out",
        fadeout: "fade-out 0.2s forwards ease-in-out",
        scalein: "scale-in 0.2s forwards ease-in-out",
        scaleout: "scale-out 0.2s forwards ease-in-out",
      },
    },
    plugins: [],
  },
};
