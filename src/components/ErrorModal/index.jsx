import Modal from 'react-modal';
import Button from '../Button';
import { useApiHandler } from '../../contexts/ApiHandlerContext';
import { Container, Banner, Label, Message, customStyles } from './styles';
import errorImg from '../../assets/images/error.svg';

function ErrorModal() {
	const { error, setError } = useApiHandler();

	const closeModal = () => setError(null);

	return (
		<Modal
			isOpen={!!error}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Mensagem de alerta"
		>
			<Container>
				<Banner>
					<img src={errorImg} alt="Erro" />

					<Label>Erro!</Label>
				</Banner>

				<Message>{error}</Message>

				<Button label="Voltar" onClick={closeModal} />
			</Container>
		</Modal>
	);
}

export default ErrorModal;
