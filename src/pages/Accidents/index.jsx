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
import personImg from '../../assets/images/quant_person.svg';
import chartImg from '../../assets/images/total_chart.svg';
import porcentImg from '../../assets/images/trending_porcent.svg';
import {
	Container,
	Content,
	Filters,
	List,
	ListWrapper,
	CardsWrapper,
	Card,
	InfoWrapper,
	Label,
	Message,
	ButtonWrapper,
} from './styles';

function Accidents() {
	const history = useHistory();
	const {
		accidents,
		getAccidents,
		editAccident,
		removeAccident,
		nextPage,
		previousPage,
		currentPage,
	} = useAccidents();

	const [sequence, setSequence] = useState('');
	const [neighbourhood, setNeighbourhood] = useState('');
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

						<Input
							label="Sequência"
							placeholder="Ex: 3310091"
							value={sequence}
							onChange={(e) => setSequence(e.target.value)}
						/>

						<ButtonWrapper>
							<Button label="Limpar" mode="empty" />
							<Button label="Buscar" />
						</ButtonWrapper>
				
					</Filters>

					<ListWrapper>
						<CardsWrapper>
							<Card>
								<img src={personImg} alt="" />
								<InfoWrapper>
									<Label>Quantidade</Label>
									<Message>750</Message>
								</InfoWrapper>
							</Card>

							<Card>
								<img src={chartImg} alt="" />
								<InfoWrapper>
									<Label>Total</Label>
									<Message>1500</Message>
								</InfoWrapper>
							</Card>

							<Card>
								<img src={porcentImg} alt="" />
								<InfoWrapper>
									<Label>Porcentagem</Label>
									<Message>50%</Message>
								</InfoWrapper>
							</Card>
						</CardsWrapper>
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
