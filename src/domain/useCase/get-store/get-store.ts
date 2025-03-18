import { StoreRepository } from "../../../infra/repositories";

export class GetStore {
  constructor(private readonly storeRepository: StoreRepository) {}
  async load({ id }: GetStore.Params) {
    const store = await this.storeRepository.getStore({ id });

    return store;
  }
}

export namespace GetStore {
  export type Params = {
    id: string;
  };
}
