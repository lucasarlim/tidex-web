import styled from 'styled-components';
import { useTheme } from '../../styles/theme';

export const Container = styled.button`
	border-radius: 5px;
	width: 256px;
	height: 48px;
	background-color: ${useTheme.dark};
	border: none;
`;

export const Loading = styled.img``;

export const Label = styled.p`
	font-size: 24px;
	font-weight: 700;
	color: ${useTheme.light};
`;
