module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        "custom-100": "5bb9ec",
        "custom-200": "#48b1ea",
        "custom-300": "#36a9e7",
        "custom-400": "#24a2e5",
        "custom-500": "#1992d4",
        "custom-600": "#188bc9",
        "custom-700": "#157eb7",
        "custom-800": "#1372a4",
        "custom-900": "#116592"
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
}
