import styled from 'styled-components';
import { useTheme } from '../../styles/theme';

export const Container = styled.div`
	width: 100%;
	height: 80vh;
	padding: 0 5vw;
`;

export const Title = styled.h1`
	font-size: 36px;
	font-weight: bold;
	width: 427px;
	margin-bottom: 40px;
`;

export const ChartWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-height: 400px;
	margin: 50px 0;

	& > div > img {
		-webkit-animation: spin 4s linear infinite;
		-moz-animation: spin 4s linear infinite;
		animation: spin 4s linear infinite;
		fill: ${useTheme.dark};
		width: 96px;
	}
`;

export const ChartTitle = styled.h2``;
