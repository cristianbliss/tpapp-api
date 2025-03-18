import { StoreRepository } from "../../../infra/repositories";
import { GetStore } from "./get-store";

export const makeGetStore = () => {
  const storeRepository = new StoreRepository();
  return new GetStore(storeRepository);
};
