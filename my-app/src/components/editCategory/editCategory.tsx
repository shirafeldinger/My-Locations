import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { ActionTypes, MyLocationState } from '../../types';


function EditCategory() {
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
                <button className='m-1 btn btn-info' onClick={() => updateCategory()}>Update</button>
                <Link className='btn btn-secondary' to="/">Back </Link>
            </div>

        </div>
    );
}

export default EditCategory;