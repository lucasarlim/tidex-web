import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAccidents } from '../../contexts/AccidentsContext';
import { FormProvider } from './FormContext';
import Menu from '../../components/Menu';
import FormHeader from '../../components/FormHeader';
import { InitialForm, LastForm } from './forms';
import { Container } from './styles';

function RegisterAccident() {
	const history = useHistory();
	const [isInitial, setIsInitial] = useState(true);
	const { addAccident } = useAccidents();

	const initialAdvance = () => setIsInitial(false);

	const initialCancel = () => history.push('/acidentes');

	const lastAdvance = async (data) => {
		await addAccident(data);
	};

	const lastCancel = () => setIsInitial(true);

	return (
		<Menu>
			<Container>
				<FormHeader
					title="Registrar Acidente"
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
			</Container>
		</Menu>
	);
}

export default RegisterAccident;
