const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

if (!createGlobPatternsForDependencies(__dirname).length)
  throw Error('GRAPH ISSUE: No dependency found when many are expected.');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(
      __dirname,
      '/**/!(*.stories|*.spec).{ts,tsx,html}'
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.overflow-initial': { overflow: 'initial' },
        '.overflow-inherit': { overflow: 'inherit' },
      });
    },
    require('@tailwindcss/forms'),
  ],
};
