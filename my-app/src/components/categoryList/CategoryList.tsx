import './categoryList.css';
import { useSelector, useDispatch } from "react-redux"
import { ActionTypes, MyLocationState } from '../../types';
import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
    const categories = useSelector<MyLocationState>(state => state.categories) as Array<string>;
    const categorySelected = useSelector<MyLocationState>(state => state.categorySelected) as string;
    const dispatch = useDispatch();

    return (
        <ul className="list-group">
            {categories.map((category, index) => {
                return <div onClick={() => dispatch({ type: ActionTypes.setCategorySelected, categorySelected: category })}
                    key={index} className={category == categorySelected ? 'categorySelected m-3 card' : "m-3 card"}>
                    <h5 className="card-title">{category}</h5></div>
            })}
        </ul>
    );
}

export default CategoryList;