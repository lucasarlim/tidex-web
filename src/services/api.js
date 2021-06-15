/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getToken } from './storage';

const api = axios.create({
	baseURL: process.env.REACT_APP_BACKEND,
});

api.interceptors.request.use((config) => {
	const token = getToken();

	if (token) {
		config.headers.authorization = `Bearer ${token}`;
	}

	return config;
});

export default api;
