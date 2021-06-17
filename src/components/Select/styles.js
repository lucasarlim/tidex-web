import styled from 'styled-components';
import { useTheme } from '../../styles/theme';

export const selectStyles = {
	control: (styles) => ({
		...styles,
		backgroundColor: 'transparent',
		border: 'solid 1px #BDBDBD',
		boxShadow: 'none',
		'&:hover': {
			border: 'solid 1px #A6A6A6',
		},
	}),
	input: (styles) => ({
		...styles,
		height: 36,
		display: 'flex',
		alignItems: 'center',
	}),
	option: (styles, { isFocused }) => ({
		...styles,
		backgroundColor: isFocused ? '#00cca729' : 'white',
		color: '#242424',
	}),
};

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
