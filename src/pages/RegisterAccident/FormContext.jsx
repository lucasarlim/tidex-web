import { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const FormContext = createContext();

export function FormProvider({ children }) {
	const [sequence, setSequence] = useState('');
	const [origin, setOrigin] = useState('');
	const [type, setType] = useState('');
	const [description, setDescription] = useState('');
	const [victim, setVictim] = useState('');

	const [place, setPlace] = useState('');
	const [neighbourhood, setNeighbourhood] = useState('');
	const [date, setDate] = useState('');
	const [crossing, setCrossing] = useState('');
	const [trafficLight, setTrafficLight] = useState('');
	const [pavement, setPavement] = useState('');

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
