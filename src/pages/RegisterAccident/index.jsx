import Menu from '../../components/Menu';
import FormHeader from '../../components/FormHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { Container, Form, Wrapper, Column } from './styles';

function RegisterAccident() {
	return (
		<Menu>
			<Container>
				<FormHeader
					title="Registrar Acidente"
					subtitle="Informações do acidente"
				/>

				<Form>
					<Wrapper>
						<Column>
							<Input label="Sequência" placeholder="Ex: 6432" isRequired />

							<Select label="Origem" isRequired />

							<Select label="Tipo" isRequired />
						</Column>

						<Column>
							<Input
								label="Observação"
								placeholder="Observações sobre o acidente"
								isTextArea
							/>

							<Select label="C/S vítima" isRequired />
						</Column>
					</Wrapper>
				</Form>
			</Container>
		</Menu>
	);
}

export default RegisterAccident;
