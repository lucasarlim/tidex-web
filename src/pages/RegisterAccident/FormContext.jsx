import { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useApiHandler } from '../../contexts/ApiHandlerContext';

const FormContext = createContext();

export function FormProvider({ children }) {
	const { request } = useApiHandler();

	const [sequence, setSequence] = useState('');
	const [origin, setOrigin] = useState('');
	const [type, setType] = useState('');
	const [description, setDescription] = useState('');
	const [victim, setVictim] = useState('');

	const [place, setPlace] = useState('');
	const [neighbourhood, setNeighbourhood] = useState('');
	const [date, setDate] = useState(undefined);
	const [crossing, setCrossing] = useState('');
	const [trafficLight, setTrafficLight] = useState('');
	const [pavement, setPavement] = useState('');

	const handleSubmit = async () => {
		await request('/accidents', 'POST', {
			id: sequence,
			origem: origin,
			tipo: type,
			local: place,
			bairro: neighbourhood,
			data: date,
			cruzamento: crossing,
			semaforo: trafficLight,
			pavimento: pavement,
			vitima: victim,
			observacao: description,
		});
	};

	return (
		<FormContext.Provider
			value={{
				sequence,
				setSequence,
				origin,
				setOrigin,
				type,
				setType,
				description,
				setDescription,
				victim,
				setVictim,
				place,
				setPlace,
				neighbourhood,
				setNeighbourhood,
				date,
				setDate,
				crossing,
				setCrossing,
				trafficLight,
				setTrafficLight,
				pavement,
				setPavement,
				handleSubmit,
			}}
		>
			{children}
		</FormContext.Provider>
	);
}

FormProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export function useForm() {
	const context = useContext(FormContext);
	return context;
}
