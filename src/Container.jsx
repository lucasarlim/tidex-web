import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ApiHandlerProvider } from './contexts/ApiHandlerContext';
import { UserProvider } from './contexts/UserContext';
import THEME from './styles/theme';

function Container({ children }) {
	return (
		<ApiHandlerProvider>
			<UserProvider>
				<ThemeProvider theme={THEME}>
					<BrowserRouter>{children}</BrowserRouter>
				</ThemeProvider>
			</UserProvider>
		</ApiHandlerProvider>
	);
}

Container.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Container;
