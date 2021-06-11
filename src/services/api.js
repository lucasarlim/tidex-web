import axios from 'axios';
import { getToken } from './storage';

const api = axios.create({
	baseURL: process.env.REACT_APP_BACKEND,
});

api.interceptors.request.use(async (config) => {
	const token = getToken();

	if (token) {
		// eslint-disable-next-line no-param-reassign
		config.headers.authorization = `Bearer ${token}`;
	}

	return config;
});

export default api;
