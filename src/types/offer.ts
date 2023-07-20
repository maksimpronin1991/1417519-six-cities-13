type Offer = {
    id: string;
    title: string;
    type: string;
    price: number;
    previewImage: string;
    city: City;
    location: Location;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
};

type City = {
    name: string;
    location: Location;
}

type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
}

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type Offers = Offer[]

type FullOffer = {
    id: string;
    title: string;
    description: string;
    type: string;
    price: number;
    images: string[];
    city: City;
    location: Location;
    goods: string[];
    host: Host;
    isPremium: boolean;
    isFavorite: boolean;
    rating: number;
    bedrooms: number;
    maxAdults: number;
    reviews: string[];
}

type FullOffers = FullOffer[]

export type {Offers,Offer,FullOffers,FullOffer,Host};
