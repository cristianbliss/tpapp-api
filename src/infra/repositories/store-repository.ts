import {
  addDoc,
  collection,
  doc,
  GeoPoint,
  getDoc,
  getDocs,
} from "@firebase/firestore";
import { db, resourses } from "../db/firebaseConfig";
import { randomUUID } from "crypto";

export class StoreRepository {
  async getStores(): Promise<StoreRepository.GetStoresResult> {
    let storesResult = [];
    const stores = await getDocs(collection(db, resourses.STORES_COLLECTION));
    stores.docs.forEach((item) => {
      const data = item.data();
      if (data) {
        storesResult.push({ ...data, id: item.id });
      }
    });
    return storesResult as unknown as StoreRepository.GetStoresResult;
  }

  async getStore({
    id,
  }: StoreRepository.GetStore): Promise<StoreRepository.GetStoreResult> {
    let storesResult = {};
    const store = await getDoc(
      doc(collection(db, resourses.STORES_COLLECTION), id)
    );
    const data = store.data();
    if (data) {
      storesResult = {
        ...data,
        id: store.id,
      };
    }

    return storesResult as unknown as StoreRepository.GetStoreResult;
  }
  async createStore(params: StoreRepository.CreateStore) {
    const docToAdd = {
      uid: randomUUID(),
      ...params,
    };
    const stores = await addDoc(
      collection(db, resourses.STORES_COLLECTION),
      docToAdd
    );

    return { id: stores.id };
  }
}

export namespace StoreRepository {
  export type CreateStore = Omit<Omit<Store, "id">, "uid">;

  export type GetStoresResult = Store[];
  export type Store = {
    uid: string;
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

  export type GetStoreResult = Store;
  export type GetStore = { id: string };
}
