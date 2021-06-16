import styled from 'styled-components';
import { useTheme } from '../../styles/theme';

export const Container = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export const Title = styled.h1`
	font-size: 44px;
`;

export const Subtitle = styled.h3`
	font-size: 28px;
	font-weight: normal;
	color: ${useTheme.grayDarker};
`;
