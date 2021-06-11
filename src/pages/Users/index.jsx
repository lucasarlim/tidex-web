import { useHistory } from 'react-router-dom';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import { Container } from './styles';

function Users() {
	const history = useHistory();

	return (
		<Menu>
			<Container>
				<Header
					label="Listagem de usuários"
					addLabel="Cadastrar usuário"
					onAdd={() => history.push('/usuarios/criar')}
				/>
			</Container>
		</Menu>
	);
}

export default Users;
