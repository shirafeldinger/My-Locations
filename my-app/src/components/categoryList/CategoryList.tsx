import './categoryList.css';
import { useSelector, useDispatch } from "react-redux"
import { MyLocationState } from '../../types';

function CategoryList() {
    const categories = useSelector<MyLocationState>(state => state.categories) as Array<string>;
    const dispatch = useDispatch();
    return (
        <ul className="list-group">
            {categories.map(category => {
                return <li key={category} className="list-group-item">{category}</li>
            })}
        </ul>
    );
}

export default CategoryList;