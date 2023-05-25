import { combineReducers, createStore } from 'redux';
import categoryReducer from './categories/index';
import productReducer from './products';

const mainReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer
});

function store() {
  return createStore(mainReducer);
}

export default store;