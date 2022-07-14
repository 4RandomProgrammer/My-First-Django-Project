
module.exports = {
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
  mode: 'jit',
  
    content: [
        '../**/templates/*.html',
        '../**/templates/**/*.html'
    ],

  theme: {
      extend: {},
  },
  variants: {},
  plugins: [],
}