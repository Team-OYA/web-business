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
        'gray-text-color': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '150': '#ECECEC',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#535353', // default
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#262626',
        },
        'black-text-color': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#1e1e1e', // default
        },
        'main-blue': {
          '50': '#f2f7f9',
          '100': '#dfe8ec',
          '200': '#bed1da',
          '300': '#96b2c3',
          '400': '#7091ac',
          '500': '#557695',
          '600': '#0E1345',
          '700': '#384d62',
          '800': '#303f54',
          '900': '#2b363f',
          '950': '#151e20',
        },
        'updated-button-text-color': '#29597A',
        'updated-button-color': '#CFE1EC',
        'withdrawn-button-text-color': '#A3292B',
        'withdrawn-button-color': '#FEDED9',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}