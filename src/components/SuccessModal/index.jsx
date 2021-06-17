import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Button from '../Button';
import { Container, Banner, Label, Message, customStyles } from './styles';
import successImg from '../../assets/images/success.svg';

function SuccessModal({ onClose, visible }) {
	return (
		<Modal
			isOpen={visible}
			onRequestClose={onClose}
			style={customStyles}
			contentLabel="Mensagem de sucesso!"
		>
			<Container>
				<Banner>
					<img src={successImg} alt="Sucesso!" />

					<Label>Sucesso!</Label>
				</Banner>

				<Message>
					Parabéns! Continue colaborando para a segurança do trânsito na sua
					região.
				</Message>

				<Button label="Voltar" onClick={onClose} />
			</Container>
		</Modal>
	);
}

SuccessModal.propTypes = {
	onClose: PropTypes.func.isRequired,
	visible: PropTypes.bool.isRequired,
};

export default SuccessModal;
