import Modal from 'react-modal';
import GlobalStyles from './styles/global';
import Container from './Container';
import Routes from './Routes';

Modal.setAppElement('#root');

function App() {
	return (
		<Container>
			<GlobalStyles />
			<Routes />
		</Container>
	);
}

export default App;
