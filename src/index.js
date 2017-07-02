import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import NavBar from './components/navbar';
import HomePage from './components/homepage';
import AboutMe from './components/aboutme';
import Footer from './components/footer';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div className="app-container">
    <NavBar />   	
    	<Switch>
	    	<Route path="/posts/new" component={PostsNew} />  
        <Route path="/posts/:id" component={PostsShow} />
	    	<Route path="/posts" component={PostsIndex} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/" component={HomePage} />         	
    	</Switch>
      <Footer />
    </div>

    </BrowserRouter>
    
  </Provider>
  , document.querySelector('.app'));
