import {
	Container,
	Banner,
	TopRow,
	Message,
	City,
	FormWrapper,
	Title,
} from './styles';
import logo from '../../assets/brand/logo-light.svg';
import bgCity from '../../assets/images/bg-city.svg';
import frontCity from '../../assets/images/front-city.svg';

function Login() {
	return (
		<Container>
			<Banner>
				<TopRow>
					<img src={logo} alt="TideX" />
				</TopRow>

				<Message>
					<h1>
						<strong>Um acidente, uma vida.</strong> E se fosse você?
					</h1>
					<span>Trânsito seguro: um desafio possível.</span>
				</Message>

				<City>
					<img src={frontCity} alt="Cidade" />
					<img src={bgCity} alt="Fundo da cidade" />
				</City>
			</Banner>

			<FormWrapper>
				<Title>Login</Title>

				<input type="text" />
				<input type="text" />
			</FormWrapper>
		</Container>
	);
}

export default Login;
