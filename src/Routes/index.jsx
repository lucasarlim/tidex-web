import { Redirect, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Accidents from '../pages/Accidents';
import RegisterAccident from '../pages/RegisterAccident';
import EditAccident from '../pages/EditAccident';
import Statistics from '../pages/Statistics';
import Charts from '../pages/Charts';
import Users from '../pages/Users';
import AddUser from '../pages/AddUser';
import EditUser from '../pages/EditUser';
import Route from './Route';

function Routes() {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route isPrivate exact path="/acidentes" component={Accidents} />
			<Route
				isPrivate
				exact
				path="/acidentes/registrar"
				component={RegisterAccident}
			/>
			<Route
				isPrivate
				exact
				path="/acidentes/editar"
				component={EditAccident}
			/>
			<Route isPrivate exact path="/usuarios" component={Users} />
			<Route isPrivate exact path="/usuarios/adicionar" component={AddUser} />
			<Route isPrivate exact path="/usuarios/editar" component={EditUser} />
			<Route isPrivate exact path="/estatisticas" component={Statistics} />
			<Route isPrivate exact path="/estatisticas/graficos" component={Charts} />
			<Route exact path="/*" component={() => <Redirect to="/acidentes" />} />
		</Switch>
	);
}

export default Routes;
