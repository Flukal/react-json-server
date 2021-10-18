import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import PostForm from "./pages/PostForm"
import PostList from './pages/PostList.js'; 
import "./assets/App.css"


function App() {
  return (
    <Router>
			<div className="body">
				<Navbar />
				<Switch>
					<Route exact path="/post-form" component={PostForm} />
					<Route path="/post-list" component={PostList} />
				</Switch>
			</div>
    </Router>
  );
}

export default App;
