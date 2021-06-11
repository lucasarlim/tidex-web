import styled, { css } from 'styled-components';
import { useTheme } from '../../styles/theme';

function getStyleByMode(mode) {
	switch (mode) {
		case 'default': {
			return css`
				color: ${useTheme.light};
				background-color: ${useTheme.dark};
				border: none;
			`;
		}
		case 'empty': {
			return css`
				color: ${useTheme.dark};
				background: none;
				border: none;
			`;
		}
		case 'cancel': {
			return css`
				color: ${useTheme.danger};
				border: solid 1px ${useTheme.danger};
				background: none;
			`;
		}
		case 'next': {
			return css`
				color: ${useTheme.light};
				background-color: ${useTheme.success};
				border: none;
			`;
		}
		default: {
			return css`
				color: ${useTheme.light};
				background-color: ${useTheme.dark};
				border: none;
			`;
		}
	}
}

export const Container = styled.button`
	border-radius: 5px;
	width: 256px;
	height: 48px;
	${(props) => getStyleByMode(props.mode)}
`;

export const Loading = styled.img``;

export const Label = styled.p`
	font-size: 24px;
	font-weight: 700;
`;
