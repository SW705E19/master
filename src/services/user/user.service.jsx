import { authHeader } from '../../helpers/auth-header';
import { handleResponse } from '../../helpers/handle-response';

export const userService = {
	getAll,
	getById
};

function getAll() {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(
		`${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/users/`,
		requestOptions
	).then(handleResponse);
}

function getById(id) {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(
		`${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/users/${id}`,
		requestOptions
	).then(handleResponse);
}

export default userService;
