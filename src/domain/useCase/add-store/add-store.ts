import { StoreRepository } from "../../../infra/repositories";

export class AddStore {
  constructor(private readonly storeRepository: StoreRepository) {}

  async create(params: AddStore.Params) {
    const store = await this.storeRepository.createStore(params);

    return store;
  }
}

export namespace AddStore {
  export type Params = {
    store: {
      name: string;
      contact?: string;
      location: {
        latitude: number;
        longitude: number;
      };
      additionalInfo?: string;
      tpa: boolean;
      mb: boolean | null;
      acquirer?: string[];
      notes?: string;
    };
  };
}
