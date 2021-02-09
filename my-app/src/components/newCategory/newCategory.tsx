import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { ActionTypes, MyLocationState, Location } from '../../types';

function NewCategory() {
    const categories = useSelector<MyLocationState>(state => state.categories) as Array<string>;
    const categorylocation = useSelector<MyLocationState>(state => state.location) as Array<Location>;
    const dispatch = useDispatch();
    const [category, setCategory] = useState('')
    const [inputAddress, setInputAddress] = useState('')
    const [inputCoordinates, setInputCoordinates] = useState('')
    const [inputName, setInputName] = useState('')

    const addCategory = () => {
        let newCategories = [...categories]
        newCategories.push(category)
        console.log(newCategories);

        dispatch({ type: ActionTypes.setCategory, categories: newCategories })
    };

    const addCategoryDetails = () => {
        let newCategoryLocation = [...categorylocation]
        newCategoryLocation.push({ name: inputName, address: inputAddress, coordinates: inputCoordinates, category })
    }

    return (
        <div className="">
            <label> add new category</label>
            <input type="text" onChange={(e) => { setCategory(e.target.value) }} />
            <label >Address</label>
            <input type="text" onChange={(e) => { setInputAddress(e.target.value) }} />
            <label >Coordinates</label>
            <input type="text" onChange={(e) => { setInputCoordinates(e.target.value) }} />
            <button onClick={addCategory}>add</button>
            <Link to="/">Back </Link>
        </div>
    );
}

export default NewCategory;