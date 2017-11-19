import _ from "lodash";
import {
	FETCH_PROJECTS
} from '../actions';

export default function(state = { projects: []}, action) {
	switch(action.type) {
		case FETCH_PROJECTS:
			return { ...state, projects: action.payload};
	}

	return state;
}