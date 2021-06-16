import { useHistory } from 'react-router-dom';
import { getUserInfos } from '../../utils/data';
import NEIGHBOURHOODS from '../../data/neighbourhoods';
import USERS from '../../data/users';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import InfoRow from '../../components/InfoRow';
import Paginator from '../../components/Paginator';
import { Container, Content, Filters, List, ListWrapper } from './styles';

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

				<Content>
					<Filters>
						<Select
							label="Bairro"
							placeholder="Selecione"
							options={NEIGHBOURHOODS.map((item) => ({
								label: item,
								value: item,
							}))}
						/>
						<Input label="Sequência" placeholder="Ex: 3310091" />

						<Button label="Limpar" mode="empty" />
						<Button label="Buscar" />
					</Filters>

					<ListWrapper>
						<List>
							{USERS.map((user) => (
								<InfoRow item={user} infos={getUserInfos(user)} />
							))}
						</List>

						<Paginator />
					</ListWrapper>
				</Content>
			</Container>
		</Menu>
	);
}

export default Users;
