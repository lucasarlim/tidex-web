import PropTypes from 'prop-types';
import { useForm } from './FormContext';
import ORIGINS from '../../data/origins';
import ACCIDENTS_TYPES from '../../data/accidentsTypes';
import NEIGHBOURHOODS from '../../data/neighbourhoods';
import Input from '../../components/Input';
import Select from '../../components/Select';
import BtnFooter from '../../components/BtnFooter';
import { Form, Wrapper, Column } from './styles';

const BOOL_OPTIONS = [
	{ label: '1 - Sim', value: '1' },
	{ label: '2 - Não', value: '2' },
];

export function InitialForm({ onAdvance, onCancel }) {
	const form = useForm();

	return (
		<Form onSubmit={onAdvance}>
			<Wrapper>
				<Column>
					<Input
						value={form.sequence}
						onChange={(e) => form.setSequence(e.target.value)}
						label="Sequência"
						placeholder="Ex: 6432"
						isRequired
					/>

					<Select
						value={form.origin}
						onChange={(option) => form.setOrigin(option)}
						options={ORIGINS}
						label="Origem"
						placeholder="Selecione"
						isRequired
					/>

					<Select
						value={form.type}
						onChange={(option) => form.setType(option)}
						options={ACCIDENTS_TYPES}
						isSearchable
						label="Tipo"
						placeholder="Selecione"
						isRequired
					/>
				</Column>

				<Column>
					<Input
						value={form.description}
						onChange={(e) => form.setDescription(e.target.value)}
						label="Observação"
						placeholder="Observações sobre o acidente"
						isTextArea
					/>

					<Select
						label="C/S vítima"
						options={BOOL_OPTIONS}
						placeholder="Selecione"
						value={form.victim}
						onChange={(option) => form.setVictim(option)}
						isRequired
					/>
				</Column>
			</Wrapper>

			<BtnFooter
				confirmLabel="Avançar"
				cancelLabel="Cancelar"
				onCancel={onCancel}
			/>
		</Form>
	);
}

InitialForm.propTypes = {
	onAdvance: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
};

export function LastForm({ onAdvance, onCancel }) {
	const form = useForm();

	return (
		<Form onSubmit={onAdvance}>
			<Wrapper>
				<Column>
					<Input
						label="Local"
						placeholder="Ex: R. Des. Trindade"
						value={form.place}
						onChange={(e) => form.setPlace(e.target.value)}
						isRequired
					/>

					<Select
						label="Bairro"
						isRequired
						options={NEIGHBOURHOODS}
						value={form.neighbourhood}
						onChange={(option) => form.setNeighbourhood(option)}
					/>

					<Select label="Data/Hora" isRequired />
				</Column>

				<Column>
					<Select label="Cruzamento" options={BOOL_OPTIONS} isRequired />

					<Select label="Semáforo" options={BOOL_OPTIONS} isRequired />

					<Select label="Pavimento" options={BOOL_OPTIONS} isRequired />
				</Column>
			</Wrapper>

			<BtnFooter
				confirmLabel="Concluir"
				cancelLabel="Voltar"
				onCancel={onCancel}
			/>
		</Form>
	);
}

LastForm.propTypes = {
	onAdvance: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
};
