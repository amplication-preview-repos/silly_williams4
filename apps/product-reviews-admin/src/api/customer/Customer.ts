import { Review } from "../review/Review";

export type Customer = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  reviews?: Array<Review>;
  updatedAt: Date;
};
