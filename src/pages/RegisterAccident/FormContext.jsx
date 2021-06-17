import { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const FormContext = createContext();

export function FormProvider({ children }) {
	const [sequence, setSequence] = useState('');
	const [origin, setOrigin] = useState('');
	const [type, setType] = useState('');
	const [description, setDescription] = useState('');
	const [victim, setVictim] = useState('');

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
