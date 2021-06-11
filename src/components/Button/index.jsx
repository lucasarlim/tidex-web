import PropTypes from 'prop-types';
import { Container, Loading, Label } from './styles';

function Button({ label, loading, onClick, type, mode }) {
	return (
		<Container mode={mode} type={type} onClick={onClick}>
			{loading ? <Loading /> : <Label>{label}</Label>}
		</Container>
	);
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	loading: PropTypes.bool,
	onClick: PropTypes.func,
	type: PropTypes.string,
	mode: PropTypes.oneOf(['default', 'empty', 'cancel', 'next']),
};

Button.defaultProps = {
	loading: false,
	onClick: undefined,
	type: 'button',
	mode: 'default',
};

export default Button;
