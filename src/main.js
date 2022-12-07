import NewFilterView from './view/filters-view.js';
import {render} from './render.js';

import Presenter from './presenter/presenter.js';

const controlFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const presenter = new Presenter({container: tripEvents});

render(new NewFilterView(), controlFilters);

presenter.init();
