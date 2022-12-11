import Presenter from './presenter/presenter.js';

const controlFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const presenter = new Presenter({ container: tripEvents });
const filter = new Presenter({container: controlFilters});

filter.initFilter();
presenter.init();
