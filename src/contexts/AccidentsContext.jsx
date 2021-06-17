import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useApiHandler } from './ApiHandlerContext';
import usePaginator from '../hooks/usePaginator';

const AccidentsContext = createContext({
	accidents: [],
	currentPage: 1,
	neighbourhood: '',
	getAccidents: async () => {},
	addAccident: async () => {},
	editAccident: async () => {},
	removeAccident: async () => {},
	nextPage: () => {},
	previousPage: () => {},
	setNeighbourhood: () => {},
});

export function AccidentsProvider({ children }) {
	const { request } = useApiHandler();
	const { currentPage, nextPage, previousPage } = usePaginator();

	const [accidents, setAccidents] = useState([]);
	const [neighbourhood, setNeighbourhood] = useState('');

	const getAccidents = async () => {
		const { data, statusCode } = await request(
			`/accidents?pag=${currentPage}`,
			'GET'
		);

		if (statusCode === 200) {
			setAccidents(data);
		}
	};

	const addAccident = async (accident) => {
		const { statusCode } = await request('/accidents', 'POST', accident);

		if (statusCode === 200) {
			setAccidents([]);
			await getAccidents();
		}
	};

	const editAccident = async (accident) => {
		const { statusCode } = await request(
			`/accidents/${accident._id}`,
			'PUT',
			accident
		);

		if (statusCode === 200) {
			setAccidents([]);
			await getAccidents();
		}
	};

	const removeAccident = async (accident) => {
		const { statusCode } = await request(
			`/accidents/${accident._id}`,
			'DELETE'
		);

		if (statusCode === 200) {
			setAccidents([]);
			await getAccidents();
		}
	};

	useEffect(() => {
		getAccidents();
	}, [currentPage]);

	return (
		<AccidentsContext.Provider
			value={{
				currentPage,
				neighbourhood,
				accidents,
				getAccidents,
				addAccident,
				editAccident,
				removeAccident,
				setNeighbourhood,
				nextPage,
				previousPage,
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
