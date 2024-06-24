import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Review = {
  comment: string | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  product?: Product | null;
  rating: number | null;
  updatedAt: Date;
};
