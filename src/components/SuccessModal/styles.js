import styled from 'styled-components';
import { useTheme } from '../../styles/theme';

export const customStyles = {
	content: {
		width: '445px',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: '16px',
	},
};

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Banner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > img {
		margin: 24px 0;
	}
`;

export const Label = styled.h3`
	font-size: 44px;
	font-weight: 700;
	color: ${useTheme.dark};
`;

export const Message = styled.p`
	width: 350px;
	text-align: center;
	font-size: 20px;
	margin: 16px 0;
	color: ${useTheme.gray};
`;
