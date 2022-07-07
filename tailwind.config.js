/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@ashleynexvelsolutions/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'test-one': '#D3D3D3',
        'test-two': 'teal'
      },
    },
  },
}
