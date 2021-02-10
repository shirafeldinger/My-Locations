
import React from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { MyLocationState } from '../../types';


const CategoryDetails = () => {
    const categories = useSelector<MyLocationState>(state => state.categories) as Array<string>;
    const categorySelected = useSelector<MyLocationState>(state => state.categorySelected) as string;
    let findCategory = categories.find(category => category === categorySelected)

    return (
        <div className="list-group">
            <h3>{findCategory}</h3>
            <Link className='btn btn-secondary' to="/">Back </Link>
        </div>
    );
}

export default CategoryDetails;