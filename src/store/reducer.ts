import { createReducer } from '@reduxjs/toolkit';
import { FullOffer, Offers } from '../types/offer';
import {
  changeCity,
  dropOffer,
  loadNearPlaces,
  loadOffer,
  loadOffers,
  requireAuthorization,
  setAuthData,
  setOffersDataLoadingStatus
} from './action';

import { AuthorizationStatus } from '../consts';
import { Reviews } from '../types/reviews';
import { UserData } from '../types/user-data';

type InitialState = {
  currentCity: string | undefined;
  offers: Offers;
  offer:FullOffer | null;
  nearPlaces:Offers | undefined;
  rewiews: Reviews;
  favorites: [];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  userData: UserData | null;
}

const initialState: InitialState = {
  currentCity:  'Paris',
  offers: [],
  offer:null,
  nearPlaces: [],
  rewiews: [],
  favorites: [],
  userData: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading:false,
};


const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(changeCity,(state,action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffers,(state,action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer,(state,action) => {
      state.offer = action.payload;
    })
    .addCase(loadNearPlaces,(state,action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(requireAuthorization,(state,action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
    })
    .addCase(setAuthData, (state, action) => {
      state.userData = action.payload;
    });
});

export {reducer};
