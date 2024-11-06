import { Rating } from "./product";

export interface Data {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface LikesState {
  likedItems: Data[];
  toggleLike: (product: Data) => void;
}
