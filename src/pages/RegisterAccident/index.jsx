import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAccidents } from '../../contexts/AccidentsContext';
import Menu from '../../components/Menu';
import FormHeader from '../../components/FormHeader';
import { InitialForm, LastForm } from './forms';
import { Container } from './styles';

function RegisterAccident() {
	const history = useHistory();
	const [isInitial, setIsInitial] = useState(true);
	const [accidentData, setAccidentData] = useState(null);
	const { addAccident } = useAccidents();

	const initialAdvance = (data) => {
		setAccidentData(data);
		setIsInitial(false);
	};

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
					subtitle="Informações do acidente"
				/>

				{isInitial ? (
					<InitialForm onAdvance={initialAdvance} onCancel={initialCancel} />
				) : (
					<LastForm
						data={accidentData}
						onAdvance={lastAdvance}
						onCancel={lastCancel}
					/>
				)}
			</Container>
		</Menu>
	);
}

export default RegisterAccident;
