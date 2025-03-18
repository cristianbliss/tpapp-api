import { StoreRepository } from "../../../infra/repositories";

export class GetStores {
  constructor(private readonly storeRepository: StoreRepository) {}
  async load() {
    const store = await this.storeRepository.getStores();

    return store;
  }
}
