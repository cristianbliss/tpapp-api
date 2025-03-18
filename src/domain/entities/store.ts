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
