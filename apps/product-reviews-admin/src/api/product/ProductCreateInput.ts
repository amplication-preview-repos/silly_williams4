import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  title?: string | null;
};
