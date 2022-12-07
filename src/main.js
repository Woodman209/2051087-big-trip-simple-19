import NewFilterView from './view/filters-view.js';
import NewSortView from './view/sort-view.js';
import NewAddFormView from './view/add-new-point.js';
import NewAEditFormView from './view/edit-point.js';
import NewAddPointWithoutOfferView from './view/add-new-point-without-offers.js';
import {render} from './render.js';
import NewWaypointView from './view/waypoint.js';
import Presenter from './presenter/presenter.js';

const controlFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const presenter = new Presenter({container: tripEvents});

render(new NewFilterView(), controlFilters);
// render(new NewSortView(), tripEvents);
// render(new NewAddFormView(), tripEvents);
// render(new NewAEditFormView(), tripEvents);
// render(new NewAddPointWithoutOfferView(), tripEvents);
// render(new NewWaypointView(), tripEvents);

presenter.init();
