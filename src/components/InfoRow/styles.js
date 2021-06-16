import styled from 'styled-components';
import { useTheme } from '../../styles/theme';

export const Container = styled.div`
	width: 100%;
	display: flex;
	padding: 10px 24px;
	background: ${useTheme.light};
	box-shadow: 0px 4px 16px rgba(92, 92, 92, 0.15);
	border-radius: 4px;
	margin-bottom: 16px;
`;

export const InfosBox = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: flex-start;
`;

export const ActionBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export const Info = styled.div`
	margin: 0 2vw;
	text-align: center;
`;

export const Label = styled.span`
	font-weight: bold;
`;

export const Value = styled.p`
	color: ${useTheme.grayDarker};
	margin-top: 10px;
`;

export const Button = styled.button`
	margin: 0 12px;
	background: none;
	border: none;
`;
