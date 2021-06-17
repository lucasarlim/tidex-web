import NEIGHBOURHOODS from '../../data/neighbourhoods';
import ACCIDENTS_TYPES from '../../data/accidentsTypes';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Select from '../../components/Select';
import { Container, Content, Filters, ListWrapper } from './styles';

function Statistics() {
	return (
		<Menu>
			<Container>
				<Header label="Estatísticas" addLabel="Ver Gráficos" isVisualization />

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

export default Statistics;
