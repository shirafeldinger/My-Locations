
import React from "react";
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom";
import { MyLocationState, Location, ParamTypes } from '../../types';


function CategoryDetails() {
    const locations = useSelector<MyLocationState>(state => state.locations) as Array<Location>;
    const categorySelected = useSelector<MyLocationState>(state => state.categorySelected) as string;
    const CategoryLocations = locations.filter(location => location.category === categorySelected)

    return (
        <div className="list-group">
            {CategoryLocations.map(location => {
                return (
                    <div key={location.name}>
                        <h3>{location.category}</h3>
                        <li className="list-group-item">Location name: {location.name}</li>
                        <li className="list-group-item">Location address: {location.address}</li>
                        <li className="list-group-item">Location coordinates: {location.coordinates}</li>
                    </div>
                )
            })}
            <Link to="/">Back </Link>
        </div>
    );
}

export default CategoryDetails;