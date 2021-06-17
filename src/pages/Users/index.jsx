import { useHistory } from 'react-router-dom';
import { useUsers } from '../../contexts/UsersContext';
import { getUserInfos } from '../../utils/data';
import USERS from '../../data/users';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import InfoRow from '../../components/InfoRow';
import Paginator from '../../components/Paginator';
import {
	Container,
	Content,
	Filters,
	List,
	ListWrapper,
	ButtonWrapper,
} from './styles';

function Users() {
	const history = useHistory();
	const { currentPage, nextPage, previousPage } = useUsers();

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
						<Input isSearch label="Nome" placeholder="Pesquise por nome/CPF" />

						<ButtonWrapper>
							<Button label="Limpar" mode="empty" />
							<Button label="Buscar" />
						</ButtonWrapper>
					</Filters>

					<ListWrapper>
						<List>
							{USERS.map((user) => (
								<InfoRow item={user} infos={getUserInfos(user)} />
							))}
						</List>

						<Paginator
							currentPage={currentPage}
							nextPage={nextPage}
							previousPage={previousPage}
						/>
					</ListWrapper>
				</Content>
			</Container>
		</Menu>
	);
}

export default Users;
