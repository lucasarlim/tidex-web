import styled from 'styled-components';
import { useTheme } from '../../styles/theme';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
`;

export const Title = styled.h1`
	font-size: 36px;
	font-weight: bold;
	width: 427px;
`;

export const Button = styled.button`
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${useTheme.primaryDarker};
	padding: 12px 16px;
	height: 48px;
	border-radius: 50px;

	& > img {
		margin-right: 8px;
		${(props) => (props.$isVisualization ? 'width: 26px;' : '')}
	}
`;

export const Label = styled.span`
	color: white;
	font-size: 20px;
	font-weight: bold;
`;
