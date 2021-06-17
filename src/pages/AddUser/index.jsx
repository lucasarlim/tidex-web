import Menu from '../../components/Menu';
import FormHeader from '../../components/FormHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import BtnFooter from '../../components/BtnFooter';
import { Container, Form, Wrapper, Column } from './styles';

function AddUser() {
	return (
		<Menu>
			<Container>
				<FormHeader title="Cadastrar Usuário" />

				<Form>
					<Wrapper>
						<Column>
							<Select
								label="Tipo de Usuário"
								placeholder="Selecione"
								isRequired
							/>

							<Input label="Nome" placeholder="Ex: Matheus" isRequired />

							<Input label="Sobrenome" placeholder="Ex: Silva" />
						</Column>

						<Column>
							<Input label="CPF" placeholder="Digite o seu CPF" isRequired />

							<Input label="Senha" placeholder="Digite sua senha" isRequired />
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

export default AddUser;
