import { StoreRepository } from "../../../infra/repositories";
import { GetStores } from "./get-stores";

export const makeGetStores = () => {
  const storeRepository = new StoreRepository();
  return new GetStores(storeRepository);
};
