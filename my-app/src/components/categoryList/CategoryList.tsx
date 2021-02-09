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
                return <button onClick={() => dispatch({ type: ActionTypes.setCategorySelected, categorySelected: category })}
                    key={index} className={category == categorySelected ? 'categorySelected m-3 list-group-item' : "m-3 list-group-item"}>{category}</button>
            })}
        </ul>
    );
}

export default CategoryList;