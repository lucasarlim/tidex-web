import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ApiHandlerProvider } from './contexts/ApiHandlerContext';
import { AuthProvider } from './contexts/AuthContext';
import { AccidentsProvider } from './contexts/AccidentsContext';
import { UsersProvider } from './contexts/UsersContext';
import THEME from './styles/theme';

function Container({ children }) {
	return (
		<ApiHandlerProvider>
			<AuthProvider>
				<AccidentsProvider>
					<UsersProvider>
						<ThemeProvider theme={THEME}>
							<BrowserRouter>{children}</BrowserRouter>
						</ThemeProvider>
					</UsersProvider>
				</AccidentsProvider>
			</AuthProvider>
		</ApiHandlerProvider>
	);
}

Container.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Container;
