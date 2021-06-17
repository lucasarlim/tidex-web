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
} from 'recharts';
import { useApiHandler } from '../../contexts/ApiHandlerContext';
import Menu from '../../components/Menu';
import { Container, Title, ChartWrapper, ChartTitle } from './styles';

function Charts() {
	const { request } = useApiHandler();
	const [, setNeighbourhoods] = useState([]);
	const [, setTypes] = useState([]);
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
		}
	};

	const getMonths = async () => {
		const { data, statusCode } = await request('/graphic/meses', 'GET');
		console.log(data);

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

				<ChartWrapper $show={months.length > 0}>
					<ChartTitle>Quantidade de acidentes por mês</ChartTitle>

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
				</ChartWrapper>
			</Container>
		</Menu>
	);
}

export default Charts;
