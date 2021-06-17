import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 80vh;
	padding: 0 5vw;
	overflow-y: scroll;
`;

export const Title = styled.h1`
	font-size: 36px;
	font-weight: bold;
	width: 427px;
	margin-bottom: 40px;
`;

export const ChartWrapper = styled.div`
	display: ${(props) => (props.$show ? 'flex' : 'none')};
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-height: 400px;
`;

export const ChartTitle = styled.h2``;
