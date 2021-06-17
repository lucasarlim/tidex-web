import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Button from '../Button';
import { Container, Banner, Label, Message, customStyles, ButtonWrapper } from './styles';
import alertImg from '../../assets/images/alert.svg';

function AlertModal({ onClose, visible }) {
	return (
		<Modal
			isOpen={visible}
			onRequestClose={onClose}
			style={customStyles}
			contentLabel="Mensagem de alerta!"
		>
			<Container>
				<Banner>
					<img src={alertImg} alt="Alerta!" />

					<Label>Alerta!</Label>
				</Banner>

				<Message>
                    Tem certeza que deseja remover esse usuário ?
				</Message>
                <ButtonWrapper>
                    <Button label="Não" mode="empty" onClick={onClose} />
                    <Button label="Sim" onClick={onClose} />
                </ButtonWrapper>
			</Container>
		</Modal>
	);
}

AlertModal.propTypes = {
	onClose: PropTypes.func.isRequired,
	visible: PropTypes.bool.isRequired,
};

export default AlertModal;
