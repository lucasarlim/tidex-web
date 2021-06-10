import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AlertProvider } from './contexts/AlertContext';
import THEME from './styles/theme';

function Container({ children }) {
	return (
		<AlertProvider>
			<ThemeProvider theme={THEME}>
				<BrowserRouter>{children}</BrowserRouter>
			</ThemeProvider>
		</AlertProvider>
	);
}

Container.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Container;
