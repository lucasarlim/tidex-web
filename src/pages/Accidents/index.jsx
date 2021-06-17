import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAccidents } from '../../contexts/AccidentsContext';
import { getAccidentInfos } from '../../utils/data';
import NEIGHBOURHOODS from '../../data/neighbourhoods';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import InfoRow from '../../components/InfoRow';
import Paginator from '../../components/Paginator';
import DatePicker from '../../components/DatePicker';
import { Container, Content, Filters, List, ListWrapper } from './styles';

function Accidents() {
	const history = useHistory();
	const {
		accidents,
		getAccidents,
		editAccident,
		removeAccident,
		neighbourhood,
		setNeighbourhood,
		nextPage,
		previousPage,
		currentPage,
	} = useAccidents();
	const [start, setStart] = useState(undefined);
	const [end, setEnd] = useState(undefined);

	useEffect(() => {
		getAccidents();
	}, []);

	return (
		<Menu>
			<Container>
				<Header
					label="Listagem de acidentes"
					addLabel="Registrar acidente"
					onAdd={() => history.push('/acidentes/registrar')}
				/>

				<Content>
					<Filters>
						<DatePicker label="Início" value={start} onChange={setStart} />

						<DatePicker label="Fim" value={end} onChange={setEnd} />

						<Select
							label="Bairro"
							placeholder="Selecione"
							options={NEIGHBOURHOODS}
							value={neighbourhood}
							onChange={(selected) => setNeighbourhood(selected)}
						/>

						<Input label="Sequência" placeholder="Ex: 3310091" />

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

export default Accidents;
