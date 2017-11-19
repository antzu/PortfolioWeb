import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";
import projectsReducer from './project_reducer';

const rootReducer = combineReducers({
	posts: PostsReducer,
	form: formReducer,
	contents: projectsReducer
});

export default rootReducer;
