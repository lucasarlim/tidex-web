import PropTypes from 'prop-types';
import Button from '../Button';
import { Container, Wrapper } from './styles';

function BtnFooter({ onConfirm, confirmLabel, onCancel, cancelLabel }) {
	return (
		<Container>
			<Wrapper>
				<Button
					setMargin
					label={confirmLabel}
					onClick={onConfirm}
					mode="next"
				/>

				<Button
					setMargin
					label={cancelLabel}
					onClick={onCancel}
					mode="cancel"
				/>
			</Wrapper>
		</Container>
	);
}

BtnFooter.propTypes = {
	onConfirm: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	confirmLabel: PropTypes.string.isRequired,
	cancelLabel: PropTypes.string.isRequired,
};

export default BtnFooter;
