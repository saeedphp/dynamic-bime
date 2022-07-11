// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { configureStore, ThunkAction } from '@reduxjs/toolkit';


import * as reducers from './reducers';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
const initialState = {};
const middleware = [thunk];




const makeStore = () => configureStore({
  reducer: combineReducers(reducers),
  devTools: true
});



export const wrapper = createWrapper(makeStore);
