
import { combineReducers } from 'redux';

import { bookReducer } from './book';

export const rootReducers = combineReducers({
  book: bookReducer,
});
