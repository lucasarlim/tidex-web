/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom';
import { isAuthenticated } from '../services/storage';

function Route({ isPrivate, component: Component, ...rest }) {
	if (isPrivate && !isAuthenticated())
		return (
			<ReactDOMRoute
				{...rest}
				render={({ location }) => (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)}
			/>
		);

	return <ReactDOMRoute {...rest} render={() => <Component />} />;
}

Route.propTypes = {
	isPrivate: PropTypes.bool,
	component: PropTypes.func.isRequired,
};

Route.defaultProps = {
	isPrivate: false,
};

export default Route;
