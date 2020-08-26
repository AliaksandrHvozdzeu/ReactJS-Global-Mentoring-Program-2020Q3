module.exports = Object.freeze({
  DEFAULT: [
    { label: 'Comedy', value: 'Comedy' },
    { label: 'Documentary', value: 'Documentary' },
    { label: 'Horror', value: 'Horror' },
    { label: 'Crime', value: 'Crime' },
  ],
  MAPPING: {
    'release date': 'release',
    runtime: 'runtime',
    budget: 'budget',
    revenue: 'revenue',
    'vote average': 'vote_average',
  },
  FILTERS: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'],
  SORTING: ['Release', 'Runtime'],
  NOT_FOUND_POSTER: '/images/not-found.jpg',
  ARROWS: ['/images/arrow_up.png', '/images/arrow_down.png'],
  PASSWORD_HANDLE: ['/images/eye-hide.png', '/images/eye-show.png']
});
