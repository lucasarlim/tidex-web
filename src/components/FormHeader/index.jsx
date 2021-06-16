import PropTypes from 'prop-types';
import { Container, Title, Subtitle } from './styles';

function FormHeader({ title, subtitle }) {
	return (
		<Container>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
		</Container>
	);
}

FormHeader.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};

export default FormHeader;
