import './categoryList.css';
import { useSelector, useDispatch } from "react-redux"
import { MyLocationState } from '../../types';

function CategoryList() {
    const categorys = useSelector<MyLocationState>(state => state.category) as Array<string>;
    const dispatch = useDispatch();
    return (
        <ul className="list-group">
            {categorys.map(category => {
                return <li className="list-group-item">{category}</li>
            })}
        </ul>
    );
}

export default CategoryList;