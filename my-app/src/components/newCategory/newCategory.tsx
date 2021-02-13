import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { ActionTypes } from '../../types';
import useValidation from "../../useValidation";

const NewCategory = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('');
    const [textStyle, setTextStyle] = useState('');
    const [formText, setFormText] = useState('');
    const { validateCategory, categories } = useValidation(category, setFormText, setTextStyle)

    const addCategory = () => {
        let newCategories = [...categories]
        validateCategory()
        newCategories.push(category);
        dispatch({ type: ActionTypes.setCategory, categories: newCategories });
        dispatch({ type: ActionTypes.setCategorySelected, categorySelected: '' });
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="m-3 form-group">
                <input placeholder='category name' className="form-control" type="text" onChange={(e) => { setCategory(e.target.value) }} />
                <button className='m-2 btn btn-info' onClick={() => { addCategory() }}>Add</button>
                <Link className='btn btn-secondary' to='/'>Go Back</Link>
                <div className={textStyle}>{formText}</div>
            </div>
        </div>
    );
}

export default NewCategory;