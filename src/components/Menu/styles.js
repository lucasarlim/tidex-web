import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from '../../styles/theme';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100vw;
	height: 100vh;
`;

export const Main = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.header`
	padding: 3vh;
	width: 100%;

	& > img {
		width: 15vh;
		max-width: 144px;
	}
`;

export const Content = styled.main`
	flex: 1;
`;

export const Aside = styled.aside`
	background-color: ${useTheme.primary};
	width: 256px;
	color: ${useTheme.light};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 5vh;
`;

export const NameBox = styled.div`
	margin-bottom: 10vh;
`;

export const Name = styled.h3`
	font-size: 28px;
`;

export const Pages = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const Page = styled(Link)`
	color: white;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 12px 0;
	padding-bottom: 2px;

	${(props) => (props.isCurrent ? `border-bottom: solid 1px white;` : '')}
`;

export const Icon = styled.img`
	margin-right: 8px;
`;

export const PageName = styled.p`
	font-size: 24px;
	font-weight: 700;
`;

export const Logout = styled.div`
	margin-bottom: 5vh;
`;

export const LogoutBtn = styled.button`
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background: none;
`;
