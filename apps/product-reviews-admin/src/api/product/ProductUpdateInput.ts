import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  title?: string | null;
};
