export type Location = {
  name: string;
  address: string;
  coordinates: string;
  category: string;
};

export type MyLocationState = {
  locations: Array<Location>;
  categories: Array<string>;
  categorySelected: string;
};

export enum ActionTypes {
  setCategory = "SET_CATEGORY",
  setLocations = "SET_LOCATION",
  setCategorySelected = "SET_CATEGORY_SELECTED",
}
export type ParamTypes = {
  name: string;
};
export type LocationActions =
  | {
      type: ActionTypes.setCategory;
      categories: Array<string>;
    }
  | {
      type: ActionTypes.setLocations;
      locations: Array<Location>;
    }
  | {
      type: ActionTypes.setCategorySelected;
      categorySelected: string;
    };
