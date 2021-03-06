import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import reduxThunk from "redux-thunk";

import NavBar from "./components/navbar";
import HomePage from "./components/homepage";
import AboutMe from "./components/aboutme";
import Footer from "./components/footer";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";
import Projects from "./components/projects";
import Chat from "./components/chat";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(
  createStore
);

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
          <Route path="/projects" component={Projects} />
          <Route path="/chat" component={Chat} />
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".app")
);
