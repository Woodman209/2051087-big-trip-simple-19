import Presenter from './presenter/presenter.js';
import PointsModel from './model/point-model.js';

const controlFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const pointModel = new PointsModel();
const presenter = new Presenter({ container: tripEvents, pointModel });
const filter = new Presenter({container: controlFilters});

filter.initFilter();
presenter.init();
