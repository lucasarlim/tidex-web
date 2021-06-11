import { useEffect } from 'react';
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
} from './styles';
import users from '../../assets/icons/users.svg';
import alert from '../../assets/icons/alert-triangle.svg';
import chart from '../../assets/icons/bar-chart-2.svg';
import logoutImg from '../../assets/icons/log-out.svg';

function Menu({ children }) {
	const location = useLocation();
	const { user } = useAuthContext();

	useEffect(() => {
		console.log(location.pathname, location.pathname === '/acidentes');
	}, [location.pathname]);

	return (
		<Container>
			<Content>{children}</Content>

			<Aside>
				<NameBox>
					<Name>{user?.nome || 'Davi'}</Name>
				</NameBox>

				<Pages>
					<Page to="/usuarios" isCurrent={location.pathname === '/usuarios'}>
						<Icon src={users} alt="Usuários" />
						<PageName>Usuários</PageName>
					</Page>

					<Page to="/acidentes" isCurrent={location.pathname === '/acidentes'}>
						<Icon src={alert} alt="Acidentes" />
						<PageName>Acidentes</PageName>
					</Page>

					<Page
						to="/estatisticas"
						isCurrent={location.pathname === '/estatisticas'}
					>
						<Icon src={chart} alt="Estatísticas" />
						<PageName>Estatísticas</PageName>
					</Page>
				</Pages>

				<Logout>
					<LogoutBtn>
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
