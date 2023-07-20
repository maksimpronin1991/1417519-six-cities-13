type Review = {
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

type Reviews = Review[];
export type {Review,Reviews};
