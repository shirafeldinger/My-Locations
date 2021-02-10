import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { ActionTypes, MyLocationState } from '../../types';

const NewCategory = () => {
    const categories = useSelector<MyLocationState>(state => state.categories) as Array<string>;
    const dispatch = useDispatch();
    const [category, setCategory] = useState('')
    const [formText, setFormText] = useState('')

    const addCategory = () => {
        let newCategories = [...categories]
        if (category.length == 0) {
            setFormText('Please enter a valid category name')
            return;
        }
        newCategories.push(category)
        dispatch({ type: ActionTypes.setCategory, categories: newCategories })
        dispatch({ type: ActionTypes.setCategorySelected, categorySelected: '' })
        alert('category added')

    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="m-3 form-group">
                <input placeholder='category name' className="form-control" type="text" onChange={(e) => { setCategory(e.target.value) }} />
                <button className='m-2 btn btn-info' onClick={() => { addCategory() }}>Add</button>
                <Link className='btn btn-secondary' to='/'>Go Back</Link>
                <div className='form-text'>{formText}</div>
            </div>
        </div>
    );
}

export default NewCategory;