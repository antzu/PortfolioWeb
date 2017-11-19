import Firebase from 'firebase';
import axios from "axios";
export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_post";
export const FETCH_POST = "fetch_post";
export const DELETE_POST = "delete_post";
export const FETCH_PROJECTS = "fetch_projects";
export const FETCH_CHAT_POSTS = "fetch_chat_posts";
export const CREATE_CHAT_POST = "create_chat_post";
export const DELETE_CHAT_POST = "delete_chat_post";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=AAVA1234";


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


const SERVER_URL = "http://localhost:3090";

export function fetchProjects() {
	return function(dispatch) {
		axios
			.get(`${SERVER_URL}/projects`)
			.then(response => {
				dispatch({
					type: FETCH_PROJECTS,
					payload: response.data
				});

				browserHistory.push("/projects");
			})
			.catch(() => {
				console.log("Error on fetching Projects...");
			});
	};
}

const ChatPosts = new Firebase("https://portfolioweb-a8493.firebaseio.com/chat");

export function fetchChatPosts() {
	return dispatch => {
		ChatPosts.on('value', snapshot => {
			dispatch({
				type: FETCH_CHAT_POSTS,
				payload: snapshot.val()
			});
		});
	};
}

export function createChatPost(post) {
	return dispatch => ChatPosts.push(post);
}

export function deleteChatPost(key){
	return dispatch => ChatPosts.child(key).remove();
}