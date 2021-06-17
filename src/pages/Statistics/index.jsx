import { useEffect } from 'react';
import { useAccidents } from '../../contexts/AccidentsContext';
import { getAccidentInfos } from '../../utils/data';
import NEIGHBOURHOODS from '../../data/neighbourhoods';
import ACCIDENTS_TYPES from '../../data/accidentsTypes';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Select from '../../components/Select';
import InfoRow from '../../components/InfoRow';
import Paginator from '../../components/Paginator';
import { Container, Content, Filters, List, ListWrapper } from './styles';

function Statistics() {
	const {
		accidents,
		getAccidents,
		editAccident,
		removeAccident,
		neighbourhood,
		accidentsTypes,
		setAccidentsTypes,
		setNeighbourhood,
		nextPage,
		previousPage,
		currentPage,
	} = useAccidents();

	useEffect(() => {
		getAccidents();
	}, []);

	return (
		<Menu>
			<Container>
				<Header label="Estatísticas" addLabel="Registrar acidente" />

				<Content>
					<Filters>
						<Select
							label="Tipo"
							placeholder="Selecione"
							options={ACCIDENTS_TYPES}
							value={accidentsTypes}
							onChange={(selected) => setAccidentsTypes(selected)}
						/>

						<Select
							label="Bairro"
							placeholder="Selecione"
							options={NEIGHBOURHOODS}
							value={neighbourhood}
							onChange={(selected) => setNeighbourhood(selected)}
						/>

						<Button label="Limpar" mode="empty" />
						<Button label="Buscar" />
					</Filters>

					<ListWrapper>
						<List>
							{accidents.map((accident) => (
								<InfoRow
									item={accident}
									onEdit={editAccident}
									onRemove={removeAccident}
									infos={getAccidentInfos(accident)}
								/>
							))}
						</List>

						<Paginator
							currentPage={currentPage}
							onNext={nextPage}
							onPrevious={previousPage}
						/>
					</ListWrapper>
				</Content>
			</Container>
		</Menu>
	);
}

export default Statistics;
