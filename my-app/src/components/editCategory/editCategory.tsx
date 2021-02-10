import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { ActionTypes, MyLocationState } from '../../types';


const EditCategory = () => {
    const categorySelected = useSelector<MyLocationState>(state => state.categorySelected) as string;
    const categories = useSelector<MyLocationState>(state => state.categories) as Array<string>;
    const dispatch = useDispatch();
    const [editiedCategory, setEditiedCategory] = useState(categorySelected)


    const updateCategory = () => {
        let newCategories = [...categories]
        let editiedCategoryIndex = newCategories.indexOf(categorySelected);
        newCategories[editiedCategoryIndex] = editiedCategory;
        dispatch({ type: ActionTypes.setCategory, categories: newCategories })
        dispatch({ type: ActionTypes.setCategorySelected, categorySelected: editiedCategory })
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="m-3 form-group">
                <input className="form-control" value={editiedCategory} type="text" onChange={(e) => { setEditiedCategory(e.target.value) }} />
                <Link to="/" className='m-2 btn btn-info' onClick={() => updateCategory()}>Update</Link>
            </div>

        </div>
    );
}

export default EditCategory;