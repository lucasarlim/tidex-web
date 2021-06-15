import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useApiHandler } from './ApiHandlerContext';

const AccidentsContext = createContext({
	accidents: [],
	loading: false,
	getAccidents: () => {},
	addAccident: () => {},
	editAccident: () => {},
	removeAccident: () => {},
});

export function AccidentsProvider({ children }) {
	const { request } = useApiHandler();
	const [accidents, setAccidents] = useState([]);
	const [loading, setLoading] = useState(false);

	const getAccidents = async () => {
		setLoading(true);
		const { data, statusCode } = await request('/accidents', 'GET');

		if (statusCode === 200) {
			setAccidents(data);
		}
		setLoading(false);
	};

	const addAccident = async (accident) => {
		setLoading(true);
		const { statusCode } = await request('/accidents', 'POST', accident);

		if (statusCode === 200) {
			setAccidents([]);
			await getAccidents();
		}
		setLoading(false);
	};

	const editAccident = async (accident) => {
		setLoading(true);
		const { statusCode } = await request(
			`/accidents/${accident._id}`,
			'PUT',
			accident
		);

		if (statusCode === 200) {
			setAccidents([]);
			await getAccidents();
		}
		setLoading(false);
	};

	const removeAccident = async (accident) => {
		setLoading(true);
		const { statusCode } = await request(
			`/accidents/${accident._id}`,
			'DELETE'
		);

		if (statusCode === 200) {
			setAccidents([]);
			await getAccidents();
		}
		setLoading(false);
	};

	return (
		<AccidentsContext.Provider
			value={{
				accidents,
				loading,
				getAccidents,
				addAccident,
				editAccident,
				removeAccident,
			}}
		>
			{children}
		</AccidentsContext.Provider>
	);
}

AccidentsProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export function useAccidents() {
	const context = useContext(AccidentsContext);
	return context;
}
