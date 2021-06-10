import api from '../services/api';
import { useAlert } from '../contexts/AlertContext';

function useApi(url, method, data) {
	const { setAlert } = useAlert();

	try {
		const response = api({
			url,
			method,
			data,
		});

		return {
			data: response.data,
			statusCode: response.status,
		};
	} catch (error) {
		if (error.response) {
			setAlert(error.response.data.message);

			return {
				data: error.response.data,
				statusCode: error.response.status,
			};
		}

		setAlert(
			'Ocorreu algum erro de conexão com o servidor, tente novamente mais tarde!'
		);
		return {
			data: null,
			statusCode: 500,
		};
	}
}

export default useApi;
