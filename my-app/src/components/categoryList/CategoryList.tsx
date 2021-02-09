import './categoryList.css';
import { useSelector, useDispatch } from "react-redux"
import { MyLocationState } from '../../types';
import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
    const categories = useSelector<MyLocationState>(state => state.categories) as Array<string>;
    const dispatch = useDispatch();
    const passCategory = (name: string) => {

    }
    return (
        <ul className="list-group">
            {categories.map((catName, index) => {
                return <Link to={'/category/' + catName} key={index} className="list-group-item">{catName}</Link>
            })}
        </ul>
    );
}

export default CategoryList;