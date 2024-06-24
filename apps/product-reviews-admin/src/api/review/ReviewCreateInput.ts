import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
};
