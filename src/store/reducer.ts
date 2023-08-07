import { createReducer } from '@reduxjs/toolkit';
import { rentingOffers } from '../mocks/offers';
import { Offers } from '../types/offer';
import { changeCity, loadOffers } from './action';

type InitialState = {
  currentCity: string | undefined;
  offers: Offers;
}

const initialState: InitialState = {
  currentCity:  'Paris',
  offers: rentingOffers,
};


const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(changeCity,(state,action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffers,(state) => {
      state.offers = rentingOffers;
    });
});


export {reducer};
