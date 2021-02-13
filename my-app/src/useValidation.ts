import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { MyLocationState } from "./types";

const useValidation = (
  catagoryToCheck: string,
  setFormText: Dispatch<SetStateAction<string>>,
  setTextStyle: Dispatch<SetStateAction<string>>
): { validateCategory: () => void; categories: string[] } => {
  const categories = useSelector<MyLocationState>(
    (state) => state.categories
  ) as Array<string>;

  const validateCategory = () => {
    if (catagoryToCheck.length == 0) {
      setFormText("Please enter a valid category name");
      setTextStyle("form-text alert alert-danger");
    } else if (categories.includes(catagoryToCheck)) {
      setFormText("Category already exists");
      setTextStyle("form-text alert alert-danger");
    } else {
      setFormText("category added");
      setTextStyle("form-text alert alert-success");
    }
  };
  return { validateCategory, categories };
};

export default useValidation;
