
import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom";
import { ActionTypes, MyLocationState, Location, ParamTypes } from '../../types';


function CategoryDetails() {
    const locations = useSelector<MyLocationState>(state => state.locations) as Array<Location>;
    const dispatch = useDispatch();
    const { name } = useParams<ParamTypes>();

    const CategoryLocations = locations.filter(location => location.category === name)

    return (
        <div className="list-group">
            {CategoryLocations.map(location => {
                return (
                    <div key={location.name}>
                        <h3>{location.category}</h3>
                        <li className="list-group-item">{location.name}</li>
                        <li className="list-group-item">{location.address}</li>
                        <li className="list-group-item">{location.coordinates}</li>
                    </div>
                )
            })}
            <Link to="/">Back </Link>
        </div>
    );
}

export default CategoryDetails;