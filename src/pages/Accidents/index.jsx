import { useHistory } from 'react-router-dom';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Filters, List } from './styles';

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

				<Content>
					<Filters>
						<Input label="Sequência" placeholder="Ex: 3310091" />
						<Input label="Sequência" placeholder="Ex: 3310091" />
						<Input label="Sequência" placeholder="Ex: 3310091" />
						<Input label="Sequência" placeholder="Ex: 3310091" />

						<Button label="Limpar" mode="empty" />
						<Button label="Buscar" />
					</Filters>

					<List />
				</Content>
			</Container>
		</Menu>
	);
}

export default Accidents;
