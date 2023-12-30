module.exports = {
  mode: "jit",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/components/**/*.js',
    './src/components/**/*.ts',
    './src/components/**/*.tsx',
    './pages/**/*.js',
    './pages/**/*.ts',
    './pages/**/*.tsx',
  ],
  theme: {
    extend: {
      screens: {
        xm: '320px',
      },
      height: {
        'almost-screen': 'calc(-16rem + 100vh)',
        '225px': '14.063rem',
        '338px': '21.125rem',
      },
      width: {
        '400px': '25rem',
        '600px': '37.5rem',
      },
      minHeight: {
        'almost-screen': 'calc(-16rem + 100vh)',
        '42px': '2.625rem',
        '500': '500px'
      },
      minWidth: {
        '300': '300px',
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer'),
  ],
};
