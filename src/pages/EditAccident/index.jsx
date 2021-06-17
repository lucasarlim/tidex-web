import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormProvider } from './FormContext';
import Menu from '../../components/Menu';
import FormHeader from '../../components/FormHeader';
import SuccessModal from '../../components/SuccessModal';
import { InitialForm, LastForm } from './forms';
import { Container } from './styles';

function RegisterAccident() {
	const history = useHistory();
	const [isInitial, setIsInitial] = useState(true);
	const [success, setSuccess] = useState(false);

	const initialAdvance = (e) => {
		e.preventDefault();
		setIsInitial(false);
	};

	const initialCancel = () => history.push('/acidentes');

	const lastAdvance = async (e) => {
		e.preventDefault();
		setSuccess(true);
	};

	const lastCancel = () => setIsInitial(true);

	return (
		<Menu>
			<Container>
				<FormHeader
					title="Editar Acidente"
					subtitle={
						isInitial ? 'Informações do acidente' : 'Localização do acidente'
					}
				/>

				<FormProvider>
					{isInitial ? (
						<InitialForm onAdvance={initialAdvance} onCancel={initialCancel} />
					) : (
						<LastForm onAdvance={lastAdvance} onCancel={lastCancel} />
					)}
				</FormProvider>

				<SuccessModal visible={success} onClose={() => setSuccess(false)} />
			</Container>
		</Menu>
	);
}

export default RegisterAccident;
