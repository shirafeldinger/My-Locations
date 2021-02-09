import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NewCategory from './components/newCategory/newCategory';
import CategoryList from './components/categoryList/CategoryList';
import CategoryDetails from './components/categoryDetails/categoryDetails';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes, MyLocationState } from './types';

function App() {
  const categories = useSelector<MyLocationState>(state => state.categories) as Array<string>;
  const categorySelected = useSelector<MyLocationState>(state => state.categorySelected) as string;
  const dispatch = useDispatch();

  const removeCategory = (categorySelected: string) => {
    let tempCategories = categories.filter(category => category !== categorySelected)
    dispatch({ type: ActionTypes.setCategory, categories: tempCategories })
  }

  return (
    <div className="App">
      <h1>My Locations</h1>
      <Router>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Link to="/newCategory">Create new category</Link>
          <Link onClick={() => { removeCategory(categorySelected) }} to='/'>Delete category</Link>
          <Link to="/categoryDetails">View category</Link>
          <Link to="/categoryDetails">Edit category</Link>
        </div>

        <Switch>
          <Route exact path='/' component={() => { return <CategoryList /> }} />
          <Route exact path='/newCategory' component={() => { return <NewCategory /> }} />
          <Route exact path='/categoryDetails' component={() => { return <CategoryDetails /> }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
