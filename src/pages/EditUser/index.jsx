import Menu from '../../components/Menu';
import FormHeader from '../../components/FormHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import BtnFooter from '../../components/BtnFooter';
import { Container, Form, Wrapper, Column } from './styles';

function EditUser() {
	return (
		<Menu>
			<Container>
				<FormHeader title="Editar Usuário" />

				<Form>
					<Wrapper>
						<Column>
							<Select label="Tipo de Usuário" placeholder="Admin" isRequired />

							<Input label="Nome" placeholder="Carlos" isRequired />

							<Input label="Sobrenome" placeholder="Arthur" />
						</Column>

						<Column>
							<Input label="CPF" placeholder="765.323.555-12" isRequired />

							<Input
								label="Senha"
								placeholder="*********"
								password
								isRequired
							/>
						</Column>
					</Wrapper>

					<BtnFooter
						confirmLabel="Concluir"
						cancelLabel="Cancelar"
						onConfirm={() => console.log('concluir')}
						onCancel={() => console.log('cancelar')}
					/>
				</Form>
			</Container>
		</Menu>
	);
}

export default EditUser;
