/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    /*
    main color 지정

    @since 2024.02.24
    @author 김유빈
     */
    extend: {
      colors: {
        'main-color': {
          '50': '#f5f8f6',
          '100': '#dfe8e3',
          '200': '#bed1c6',
          '300': '#96b2a4',
          '400': '#709182',
          '500': '#557767',
          '600': '#49675a', // default
          '700': '#384d44',
          '800': '#303f39',
          '900': '#2b3632',
          '950': '#151e1b',
        },
        'main-text-color': {
          '50': '#f2f7f4',
          '100': '#deede3',
          '200': '#c0daca',
          '300': '#96bfa9',
          '400': '#689f83',
          '500': '#478265',
          '600': '#34674f',
          '700': '#2e5a47', // default
          '800': '#234234',
          '900': '#1e362c',
          '950': '#101e19',
        },
      },
    },
  },
  plugins: [],
}