import {   configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import noteSlice from "./feature/noteSlice";
 
const rootReducer = combineReducers({
   note:noteSlice
});

//configure store
const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export default store; 