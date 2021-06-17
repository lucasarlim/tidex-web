import PropTypes from 'prop-types';
import { Container, Button, Label, Title } from './styles';
import plus from '../../assets/icons/plus.svg';
import chart from '../../assets/icons/pie-chart.svg';

function Header({ label, addLabel, onAdd, isVisualization }) {
	return (
		<Container>
			<Title>{label}</Title>

			<Button $isVisualization={isVisualization} onClick={onAdd}>
				<img src={isVisualization ? chart : plus} alt={addLabel} />

				<Label>{addLabel}</Label>
			</Button>
		</Container>
	);
}

Header.propTypes = {
	label: PropTypes.string.isRequired,
	addLabel: PropTypes.string.isRequired,
	onAdd: PropTypes.func.isRequired,
	isVisualization: PropTypes.bool,
};

Header.defaultProps = {
	isVisualization: false,
};

export default Header;
