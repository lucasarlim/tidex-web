import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import THEME from './styles/theme';

function Container({ children }) {
	return (
		<ThemeProvider theme={THEME}>
			<BrowserRouter>{children}</BrowserRouter>
		</ThemeProvider>
	);
}

Container.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Container;
