import { useHistory } from 'react-router-dom';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import { Container } from './styles';

function Accidents() {
	const history = useHistory();

	return (
		<Menu>
			<Container>
				<Header
					label="Listagem de acidentes"
					addLabel="Registrar acidente"
					onAdd={() => history.push('/acidentes/registrar')}
				/>
			</Container>
		</Menu>
	);
}

export default Accidents;
