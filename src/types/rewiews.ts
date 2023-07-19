type Rewiew = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
}

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type Rewiews = Rewiew[];
export type {Rewiew,Rewiews};
