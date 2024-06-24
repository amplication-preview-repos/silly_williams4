import { ReviewUpdateManyWithoutCustomersInput } from "./ReviewUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  name?: string | null;
  reviews?: ReviewUpdateManyWithoutCustomersInput;
};
