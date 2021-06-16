import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

const ApiHandlerContext = createContext({
	error: null,
	setError: () => {},
	loading: false,
	setLoading: () => {},
	request: async () => {},
});

export function ApiHandlerProvider({ children }) {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	async function request(url, method, data) {
		setLoading(true);

		try {
			const response = await api({
				url,
				method,
				data,
			});
			setError(null);
			setLoading(false);

			return {
				data: response.data,
				statusCode: response.status,
			};
		} catch (err) {
			setLoading(false);

			if (err.response) {
				setError(err.response.data.message);

				return {
					data: err.response.data,
					statusCode: err.response.status,
				};
			}

			setError(
				'Ocorreu algum erro de conexão com o servidor, tente novamente mais tarde!'
			);
			return {
				data: null,
				statusCode: 500,
			};
		}
	}

	return (
		<ApiHandlerContext.Provider
			value={{ error, setError, loading, setLoading, request }}
		>
			{children}
		</ApiHandlerContext.Provider>
	);
}

ApiHandlerProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export function useApiHandler() {
	const context = useContext(ApiHandlerContext);
	return context;
}
