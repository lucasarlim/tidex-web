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
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;

	& > img {
		width: 144px;
	}
`;

export const Message = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	& > h1 {
		font-size: 52px;
		color: ${useTheme.light};
		max-width: 448px;
		margin-bottom: 32px;
	}

	& > span {
		font-size: 28px;
		color: ${useTheme.primaryDarker};
		max-width: 448px;
	}
`;

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

export const FormWrapper = styled.section`
	flex: 0.5;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Form = styled.form`
	width: 448px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Title = styled.h1`
	font-weight: bold;
	font-size: 44px;
	line-height: 110%;
	margin-bottom: 30px;
`;

export const Button = styled.button`
	border: none;
	background-color: ${useTheme.primary};
	border-radius: 50px;
	margin-top: 56px;
	width: 100%;
	height: 56px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	color: ${useTheme.light};
	box-shadow: 0px 4px 4px rgba(0, 165, 136, 0.25);
	font-size: 28px;
`;
