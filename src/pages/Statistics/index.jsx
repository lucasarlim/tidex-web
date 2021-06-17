import { useEffect, useState } from 'react';
import {
	ResponsiveContainer,
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Bar,
	RadarChart,
	Radar,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	LineChart,
	Line,
} from 'recharts';
import { useApiHandler } from '../../contexts/ApiHandlerContext';
import Menu from '../../components/Menu';
import loader from '../../assets/icons/loader.svg';
import { Container, Title, ChartWrapper, ChartTitle } from './styles';

function Statistics() {
	const { request, loading } = useApiHandler();
	const [neighbourhoods, setNeighbourhoods] = useState([]);
	const [types, setTypes] = useState([]);
	const [months, setMonths] = useState([]);

	const getNeighbourhoods = async () => {
		const { data, statusCode } = await request('/graphic/bairros', 'GET');

		if (statusCode === 200) {
			setNeighbourhoods(data);
		}
	};

	const getTypes = async () => {
		const { data, statusCode } = await request('/graphic/tipos', 'GET');

		if (statusCode === 200) {
			setTypes(data);
			console.log(data);
		}
	};

	const getMonths = async () => {
		const { data, statusCode } = await request('/graphic/meses', 'GET');

		if (statusCode === 200) {
			setMonths(data);
		}
	};

	useEffect(() => {
		getNeighbourhoods();
		getTypes();
		getMonths();
	}, []);

	return (
		<Menu>
			<Container>
				<Title>Estatísticas</Title>

				<ChartWrapper>
					<ChartTitle>Quantidade de acidentes por mês</ChartTitle>

					{loading ? (
						<div>
							<img src={loader} alt="Carregando" />
							<h1>Carregando</h1>
						</div>
					) : (
						<ResponsiveContainer width={800} height="100%" maxHeight={600}>
							<BarChart
								width={500}
								height={300}
								data={months}
								margin={{
									top: 5,
									right: 30,
									left: 20,
									bottom: 5,
								}}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="mes" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar name="Acidentes" dataKey="count" fill="#00A588" />
							</BarChart>
						</ResponsiveContainer>
					)}
				</ChartWrapper>

				<ChartWrapper>
					<ChartTitle>Quantidade de acidentes por tipo</ChartTitle>

					{loading ? (
						<div>
							<img src={loader} alt="Carregando" />
							<h1>Carregando</h1>
						</div>
					) : (
						<ResponsiveContainer width={800} height="100%" maxHeight={600}>
							<RadarChart cx="50%" cy="50%" outerRadius="80%" data={types}>
								<PolarGrid />
								<PolarAngleAxis dataKey="tipo" />
								<PolarRadiusAxis />
								<Radar
									dataKey="count"
									stroke="#00A588"
									fill="#00A588"
									fillOpacity={0.6}
								/>
							</RadarChart>
						</ResponsiveContainer>
					)}
				</ChartWrapper>

				<ChartWrapper>
					<ChartTitle>Quantidade de acidentes por bairro</ChartTitle>

					{loading ? (
						<div>
							<img src={loader} alt="Carregando" />
							<h1>Carregando</h1>
						</div>
					) : (
						<ResponsiveContainer width={800} height="100%" maxHeight={600}>
							<LineChart
								width={500}
								height={300}
								data={neighbourhoods}
								margin={{
									top: 5,
									right: 30,
									left: 20,
									bottom: 5,
								}}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="bairro" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Line
									type="monotone"
									dataKey="count"
									stroke="#00A588"
									activeDot={{ r: 8 }}
								/>
							</LineChart>
						</ResponsiveContainer>
					)}
				</ChartWrapper>
			</Container>
		</Menu>
	);
}

export default Statistics;
