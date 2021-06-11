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
	font-size: 20px;
	margin-bottom: 8px;
`;

export const Wrapper = styled.div`
	height: 44px;
	background-color: ${useTheme.grayLighter};
	border-radius: 5px;
	display: flex;
	align-items: center;

	& > input {
		background: none;
		border: none;
		font-size: 18px;
		height: 100%;
		padding-left: 10px;
		flex: 1;
	}

	& > button {
		border: none;
		margin-right: 10px;
	}
`;

export const Flag = styled.span`
	color: red;
`;
