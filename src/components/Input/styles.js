import styled from 'styled-components';

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
	background: none;
	border: solid 1px #cecece;
	border-radius: 5px;
	display: flex;
	align-items: center;

	& > img {
		margin-left: 10px;
	}

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

	&:hover {
		border: solid 1px #a6a6a6;
	}
`;

export const Flag = styled.span`
	color: red;
`;
