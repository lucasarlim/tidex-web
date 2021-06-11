import PropTypes from 'prop-types';
import { Container, Button, Label, Title } from './styles';
import plus from '../../assets/icons/plus.svg';

function Header({ label, addLabel, onAdd }) {
	return (
		<Container onClick={onAdd}>
			<Title>{label}</Title>

			<Button>
				<img src={plus} alt={addLabel} />

				<Label>{addLabel}</Label>
			</Button>
		</Container>
	);
}

Header.propTypes = {
	label: PropTypes.string.isRequired,
	addLabel: PropTypes.string.isRequired,
	onAdd: PropTypes.func.isRequired,
};

export default Header;
