import styled from 'styled-components';
import { useTheme } from '../../styles/theme';

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
	align-items: center;
	padding: 5vh 1vw 0 1vw;
`;

export const CardsWrapper = styled.div`
	width: 100%;
	height: 8vh;
	padding: 0px 32px;
	display: flex;
	flex-direction: row;
	align-items: space-between;
	justify-content: center;
	margin: 16px 0px;
`;

export const List = styled.div`
	width: 100%;
	height: 45vh;
	overflow-y: scroll;
	padding: 1vh 2vw;
`;

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 16px;
`;

export const Card = styled.div`
	min-width: 200px;
	width: 20%;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0px 32px;
	border: 1px solid #bfbfbf;
	border-radius: 8px;
	padding: 8px 16px;
`;
export const Label = styled.p`
	font-size: 16px;
	font-weight: 700;
	color: ${useTheme.grayDarker};
`;
export const Message = styled.h6`
	font-size: 20px;
	font-weight: 700;
	color: ${useTheme.dark};
`;
