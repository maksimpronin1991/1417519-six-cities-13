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

type Offers = Offer[]

export type {Offers};
