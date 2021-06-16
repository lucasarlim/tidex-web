import Menu from '../../components/Menu';
import FormHeader from '../../components/FormHeader';
import { Container } from './styles';

function RegisterAccident() {
	return (
		<Menu>
			<Container>
				<FormHeader
					title="Registrar Acidente"
					subtitle="Informações do acidente"
				/>
			</Container>
		</Menu>
	);
}

export default RegisterAccident;
