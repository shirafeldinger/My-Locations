import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { ActionTypes, MyLocationState, Location } from '../../types';

function NewCategory() {
    const categories = useSelector<MyLocationState>(state => state.categories) as Array<string>;
    const locations = useSelector<MyLocationState>(state => state.locations) as Array<Location>;
    const dispatch = useDispatch();
    const [category, setCategory] = useState('')
    const [inputAddress, setInputAddress] = useState('')
    const [inputCoordinates, setInputCoordinates] = useState('')
    const [inputName, setInputName] = useState('')

    const addCategory = () => {
        let newCategories = [...categories]
        newCategories.push(category)
        dispatch({ type: ActionTypes.setCategory, categories: newCategories })
    };

    const addCategoryDetails = () => {
        let newCategoryLocation = [...locations]
        newCategoryLocation.push({ name: inputName, address: inputAddress, coordinates: inputCoordinates, category })
        dispatch({ type: ActionTypes.setLocations, locations: newCategoryLocation })
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="m-3 form-group">
                <input placeholder='category name' className="form-control" type="text" onChange={(e) => { setCategory(e.target.value) }} />
                {/* <label >Address</label>
                <input className="form-control" type="text" onChange={(e) => { setInputAddress(e.target.value) }} />
                <label >Coordinates</label>
                <input className="form-control" type="text" onChange={(e) => { setInputCoordinates(e.target.value) }} />
                <label >Location Name</label>
                <input className="form-control" type="text" onChange={(e) => { setInputName(e.target.value) }} /> */}
                <button className='m-1 btn btn-info' onClick={() => { addCategory(); addCategoryDetails() }}>Add</button>
                <Link className='btn btn-secondary' to="/">Back </Link>
            </div>
        </div>
    );
}

export default NewCategory;