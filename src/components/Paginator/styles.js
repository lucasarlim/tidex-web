import styled from 'styled-components';
import { useTheme } from '../../styles/theme';

export const Container = styled.div`
	display: flex;
	align-items: center;
	margin-top: 3vh;
`;

export const Button = styled.button`
	border: none;
	background-color: ${useTheme.grayLighter};
	border-radius: 8px;
	margin: 0 16px;
`;

export const Label = styled.span`
	color: ${useTheme.dark};
	font-weight: bold;
`;
