export type Location = {
  name: string;
  address: string;
  coordinates: string;
  category: string;
};

export type MyLocationState = {
  location: Location;
  category: Array<string>;
};

export enum ActionTypes {
  setCategory = "SET_CATEGORY",
}

export type LocationActions = {
  type: ActionTypes.setCategory;
  category: Array<string>;
};
