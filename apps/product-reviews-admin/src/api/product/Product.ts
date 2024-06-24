import { Review } from "../review/Review";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  reviews?: Array<Review>;
  title: string | null;
  updatedAt: Date;
};
