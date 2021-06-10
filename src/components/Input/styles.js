import styled from 'styled-components';
import { useTheme } from '../../styles/theme';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 10px 0;
`;

export const Label = styled.label`
	font-weight: bold;
	font-size: 32px;
	margin-bottom: 8px;
`;

export const Wrapper = styled.div`
	height: 64px;
	background-color: ${useTheme.grayLighter};
	border-radius: 5px;

	& > input {
		background: none;
		border: none;
		font-size: 20px;
		height: 100%;
		padding-left: 10px;
	}
`;

export const Flag = styled.span`
	color: red;
`;
