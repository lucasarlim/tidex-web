import { Redirect, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Accidents from '../pages/Accidents';
import RegisterAccident from '../pages/RegisterAccident';
import EditAccident from '../pages/EditAccident';
import Statistics from '../pages/Statistics';
import Users from '../pages/Users';
import AddUser from '../pages/AddUser';
import EditUser from '../pages/EditUser';
import Route from './Route';

function Routes() {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="/acidentes" component={Accidents} />
			<Route exact path="/acidentes/registrar" component={RegisterAccident} />
			<Route exact path="/acidentes/editar" component={EditAccident} />
			<Route exact path="/usuarios" component={Users} />
			<Route exact path="/usuarios/criar" component={AddUser} />
			<Route exact path="/usuarios/editar" component={EditUser} />
			<Route exact path="/estatisticas" component={Statistics} />
			<Route exact path="/*" component={() => <Redirect to="/acidentes" />} />
		</Switch>
	);
}

export default Routes;
