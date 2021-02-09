export type Location = {
  name: string;
  address: string;
  coordinates: string;
  category: string;
};

export type MyLocationState = {
  location: Location;
  categories: Array<string>;
};

export enum ActionTypes {
  setCategory = "SET_CATEGORY",
}

export type LocationActions = {
  type: ActionTypes.setCategory;
  categories: Array<string>;
};
