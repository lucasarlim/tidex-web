import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AlertContext = createContext({
	alert: null,
	setAlert: () => {},
});

export function AlertProvider({ children }) {
	const [alert, setAlert] = useState(null);

	return (
		<AlertContext.Provider value={{ alert, setAlert }}>
			{children}
		</AlertContext.Provider>
	);
}

AlertProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export function useAlert() {
	const context = useContext(AlertContext);
	return context;
}
