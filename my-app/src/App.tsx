import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NewCategory from './components/newCategory/newCategory';
import CategoryList from './components/categoryList/CategoryList';
import CategoryDetails from './components/categoryDetails/categoryDetails';

function App() {
  return (
    <div className="App">
      <h1>My Location</h1>
      <Router>

        <Link className="nav-link" to="/newCategory">create new category</Link>

        <Switch>
          <Route exact path='/' component={() => { return <CategoryList /> }} />
          <Route exact path='/newCategory' component={() => { return <NewCategory /> }} />
          <Route exact path='/category/:name' component={() => { return <CategoryDetails /> }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
