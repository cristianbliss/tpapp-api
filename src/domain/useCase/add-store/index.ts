import { StoreRepository } from "../../../infra/repositories";
import { AddStore } from "./add-store";


export const makeAddStore = () => {
  const storeRepository = new StoreRepository();
  return new AddStore(storeRepository);
};
