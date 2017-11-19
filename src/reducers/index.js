import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import postsReducer from "./posts_reducer";
import projectsReducer from "./project_reducer";
import chatReducer from "./chat_reducer";

const rootReducer = combineReducers({
	posts: postsReducer,
	form: formReducer,
	contents: projectsReducer,
	chat: chatReducer
});

export default rootReducer;
