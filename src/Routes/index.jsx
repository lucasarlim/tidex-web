import { Redirect, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Accidents from '../pages/Accidents';
import Statistics from '../pages/Statistics';
import Users from '../pages/Users';
import Route from './Route';

function Routes() {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="/acidentes" component={Accidents} />
			<Route exact path="/estatisticas" component={Statistics} />
			<Route exact path="/usuarios" component={Users} />
			<Route exact path="/*" component={() => <Redirect to="/acidentes" />} />
		</Switch>
	);
}

export default Routes;
