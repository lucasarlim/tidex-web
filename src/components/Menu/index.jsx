import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import {
	Container,
	Content,
	Aside,
	NameBox,
	Icon,
	Logout,
	Name,
	Page,
	PageName,
	Pages,
	LogoutBtn,
	Main,
	Header,
} from './styles';
import users from '../../assets/icons/users.svg';
import alert from '../../assets/icons/alert-triangle.svg';
import chart from '../../assets/icons/bar-chart-2.svg';
import logoutImg from '../../assets/icons/log-out.svg';
import logo from '../../assets/brand/logo-dark.svg';

function Menu({ children }) {
	const location = useLocation();
	const { user, logout } = useAuthContext();

	return (
		<Container>
			<Main>
				<Header>
					<img src={logo} alt="TideX" />
				</Header>

				<Content>{children}</Content>
			</Main>

			<Aside>
				<NameBox>
					<Name>{user?.nome || 'Usuário'}</Name>
				</NameBox>

				<Pages>
					<Page
						to="/acidentes"
						$isCurrent={location.pathname.includes('/acidentes')}
					>
						<Icon src={alert} alt="Acidentes" />
						<PageName>Acidentes</PageName>
					</Page>

					<Page
						to="/estatisticas"
						$isCurrent={location.pathname.includes('/estatisticas')}
					>
						<Icon src={chart} alt="Estatísticas" />
						<PageName>Estatísticas</PageName>
					</Page>

					{user?.admin ? (
						<Page
							to="/usuarios"
							$isCurrent={location.pathname.includes('/usuarios')}
						>
							<Icon src={users} alt="Usuários" />
							<PageName>Usuários</PageName>
						</Page>
					) : (
						''
					)}
				</Pages>

				<Logout>
					<LogoutBtn onClick={logout}>
						<Icon src={logoutImg} alt="Sair" />
						<PageName>Sair</PageName>
					</LogoutBtn>
				</Logout>
			</Aside>
		</Container>
	);
}

Menu.propTypes = {
	children: PropTypes.element.isRequired,
};

export default Menu;
