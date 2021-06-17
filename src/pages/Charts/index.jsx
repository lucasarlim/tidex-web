import { useHistory } from 'react-router-dom';
import NEIGHBOURHOODS from '../../data/neighbourhoods';
import ACCIDENTS_TYPES from '../../data/accidentsTypes';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Select from '../../components/Select';
import { Container, Content, Filters, ListWrapper } from './styles';

function Charts() {
	const history = useHistory();

	return (
		<Menu>
			<Container>
				<Header
					label="Estatísticas - Gráficos"
					addLabel="Ver Gráficos"
					isVisualization
					onAdd={() => history.push('/acidentes')}
				/>

				<Content>
					<Filters>
						<Select
							label="Tipo"
							placeholder="Selecione"
							options={ACCIDENTS_TYPES}
						/>

						<Select
							label="Bairro"
							placeholder="Selecione"
							options={NEIGHBOURHOODS}
						/>

						<Button label="Limpar" mode="empty" />
						<Button label="Buscar" />
					</Filters>

					<ListWrapper />
				</Content>
			</Container>
		</Menu>
	);
}

export default Charts;
