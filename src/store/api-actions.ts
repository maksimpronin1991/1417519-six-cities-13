import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { Offers, FullOffer, Offer } from '../types/offer.js';
import { loadEmail, loadFavorites, loadNearPlaces, loadOffer, loadOffers,loadReviews,redirectToRoute,requireAuthorization,setAuthData,setOffersDataLoadingStatus } from './action';
import { saveToken,dropToken } from '../services/token.js';
import { AppRoute,APIRoute,AuthorizationStatus, NameSpace } from '../consts';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { Reviews } from '../types/reviews.js';


export const fetchOffersAction = createAsyncThunk<void,undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offers}/fetchOffers`,
  async(_arg,{dispatch,extra:api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/fetchOffer`,
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${offerId}`);
    dispatch(loadOffer(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const fetchNeigbourhoodOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.NearPlaces}/fetchOffer`,
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${offerId}`);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadNearPlaces(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.NearPlaces}/fetchOffer`,
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Reviews>(`${APIRoute.Offers}/${offerId}`);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadReviews(data));
  }
);

// export const postReview = createAsyncThunk<Review,Extra,
//   {reviewData: ReviewData; offerId: Offer['id']},

// >(
//   `${NameSpace.Reviews}/postReview`,
//   async({ reviewData, offerId }, { extra: api }) => {
//     const { data } = await api.post<Review>(
//       `${APIRoute.Reviews}/${offerId}`);
//     dispatch(loadReview(data));
//   },
// );


export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FAVORITES/fetch',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer>(APIRoute.Favorites);
      dispatch(loadFavorites(data));
    } catch {
      throw new Error();
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'USER/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setAuthData(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/login`,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(loadEmail(email));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
