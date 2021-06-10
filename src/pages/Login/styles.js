import styled from 'styled-components';
import { useTheme } from '../../styles/theme';

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: row;
`;

export const Banner = styled.section`
	flex: 0.5;
	display: flex;
	flex-direction: column;
	background-color: ${useTheme.primary};
`;

export const TopRow = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 20px;

	& > img {
		width: 144px;
	}
`;

export const Message = styled.div``;

export const City = styled.div`
	width: 100%;

	& > img:nth-child(1) {
		width: 50%;
		display: block;
		z-index: 1;
		position: absolute;
	}

	& > img:nth-child(2) {
		width: 100%;
		display: block;
	}
`;

export const FormWrapper = styled.div`
	flex: 0.5;
`;

export const Title = styled.h1``;
