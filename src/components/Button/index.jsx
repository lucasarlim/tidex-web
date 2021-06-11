import PropTypes from 'prop-types';
import { Container, Loading, Label } from './styles';

function Button({ label, loading, onClick, type }) {
	return (
		<Container type={type} onClick={onClick}>
			{loading ? <Loading /> : <Label>{label}</Label>}
		</Container>
	);
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	loading: PropTypes.bool,
	onClick: PropTypes.func,
	type: PropTypes.string,
};

Button.defaultProps = {
	loading: false,
	onClick: undefined,
	type: 'button',
};

export default Button;
