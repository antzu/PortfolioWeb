import axios from "axios";
export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_post";
export const FETCH_POST = "fetch_post";
export const DELETE_POST = "delete_post";
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=AAVA1234";

export const FETCH_PROJECTS = 'fetch_projects';
const SERVER_URL = 'http://localhost:3090';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(values, callback) {
	const request = axios
		.post(`${ROOT_URL}/posts${API_KEY}`, values)
		.then(() => callback());

	return {
		type: CREATE_POST,
		payload: request
	};
}

export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_POST,
		payload: request
	};
}

export function deletePost(id, callback) {
	const request = axios
		.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
		.then(() => callback());

	return {
		type: DELETE_POST,
		payload: id
	};
}

export function fetchProjects(){
	return function(dispatch) {
		axios.get(`${SERVER_URL}/projects`)
		.then(response => {
			dispatch({ 
				type: FETCH_PROJECTS,
				payload: response.data
			});

			browserHistory.push('/projects');
		})
		.catch(() => {
			console.log('Error on fetching Projects...');
		});
	}
}
