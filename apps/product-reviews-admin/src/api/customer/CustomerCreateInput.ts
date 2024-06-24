import { ReviewCreateNestedManyWithoutCustomersInput } from "./ReviewCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  name?: string | null;
  reviews?: ReviewCreateNestedManyWithoutCustomersInput;
};
