import PropTypes from 'prop-types';
import { Container, Button, Label } from './styles';
import left from '../../assets/icons/chevron-left.svg';
import right from '../../assets/icons/chevron-right.svg';

function Paginator({ currentPage, onNext, onPrevious }) {
	return (
		<Container>
			<Button onClick={onPrevious}>
				<img src={left} alt="Página anterior" />
			</Button>

			<Label>Página {currentPage}</Label>

			<Button onClick={onNext}>
				<img src={right} alt="Próxima página" />
			</Button>
		</Container>
	);
}

Paginator.propTypes = {
	currentPage: PropTypes.number.isRequired,
	onNext: PropTypes.func.isRequired,
	onPrevious: PropTypes.func.isRequired,
};

export default Paginator;
