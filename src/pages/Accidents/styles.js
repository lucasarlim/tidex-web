import styled from 'styled-components';
// import { useTheme } from '../../styles/theme';

export const Container = styled.div`
	width: 100%;
	padding: 0 5vw;
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
`;

export const Filters = styled.form`
	width: 256px;
	margin-top: 3vh;
`;

export const ListWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 5vh 1vw;
`;

export const List = styled.div`
	width: 100%;
	height: 60vh;
	overflow-y: scroll;
	padding: 1vh 2vw;
`;
