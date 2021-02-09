import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NewCategory from './components/newCategory/newCategory';
import CategoryList from './components/categoryList/CategoryList';
import CategoryDetails from './components/categoryDetails/categoryDetails';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes, MyLocationState } from './types';
import EditCategory from './components/editCategory/editCategory';

function App() {
  const categories = useSelector<MyLocationState>(state => state.categories) as Array<string>;
  const categorySelected = useSelector<MyLocationState>(state => state.categorySelected) as string;
  const dispatch = useDispatch();

  const removeCategory = (categorySelected: string) => {
    let tempCategories = categories.filter(category => category !== categorySelected)
    dispatch({ type: ActionTypes.setCategory, categories: tempCategories })
  }

  return (
    <div className="m-3 App">
      <Router>
        <h2>My Locations</h2>
        <nav className=" d-flex align-items-center justify-content-center navbar navbar-light bg-light">
          <ul className="navbar-nav flex-row ">
            <Link className="nav-link mr-3" to="/newCategory">Create category</Link>
            <Link className="nav-link mr-3" onClick={() => { removeCategory(categorySelected) }} to='/'>Delete category</Link>
            <Link className="nav-link mr-3" to="/categoryDetails">View category</Link>
            <Link className="nav-link mr-3" to="/editCategory">Edit category</Link>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/' component={() => { return <CategoryList /> }} />
          <Route exact path='/newCategory' component={() => { return <NewCategory /> }} />
          <Route exact path='/categoryDetails' component={() => { return <CategoryDetails /> }} />
          <Route exact path='/editCategory' component={() => { return <EditCategory /> }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
