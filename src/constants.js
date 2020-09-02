module.exports = Object.freeze({
  DEFAULT: [
    { label: 'Comedy', value: 'Comedy' },
    { label: 'Documentary', value: 'Documentary' },
    { label: 'Horror', value: 'Horror' },
    { label: 'Crime', value: 'Crime' },
  ],
  FILTER_DEFAULT : [
    {label: 'release', value: 'release'},
    {label: 'runtime', value: 'runtime'}
  ],
  MAPPING: {
    'release date': 'release',
    runtime: 'runtime'
  },
  FILTERS: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'],
  SORTING: ['Release', 'Runtime'],
  NOT_FOUND_POSTER: '/images/not-found.jpg',
  ARROWS: ['/images/arrow_up.png', '/images/arrow_down.png'],
  PASSWORD_HANDLE: ['/images/eye-hide.png', '/images/eye-show.png']
});
