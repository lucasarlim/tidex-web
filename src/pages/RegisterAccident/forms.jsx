import { useState } from 'react';
import PropTypes from 'prop-types';
import ORIGINS from '../../data/origins';
import ACCIDENTS_TYPES from '../../data/accidentsTypes';
import Input from '../../components/Input';
import Select from '../../components/Select';
import BtnFooter from '../../components/BtnFooter';
import { Form, Wrapper, Column } from './styles';

const VICTIMS_OPTIONS = [
	{ label: '1 - Sim', value: '1' },
	{ label: '2 - Não', value: '2' },
];

export function InitialForm({ onAdvance, onCancel }) {
	const [sequence, setSequence] = useState('');
	const [origin, setOrigin] = useState('');
	const [type, setType] = useState('');
	const [description, setDescription] = useState('');
	const [victim, setVictim] = useState('');

	return (
		<Form>
			<Wrapper>
				<Column>
					<Input
						value={sequence}
						onChange={(e) => setSequence(e.target.value)}
						label="Sequência"
						placeholder="Ex: 6432"
						isRequired
					/>

					<Select
						value={origin}
						onChange={(option) => setOrigin(option)}
						options={ORIGINS}
						label="Origem"
						placeholder="Selecione"
						isRequired
					/>

					<Select
						value={type}
						onChange={(option) => setType(option)}
						options={ACCIDENTS_TYPES}
						isSearchable
						label="Tipo"
						placeholder="Selecione"
						isRequired
					/>
				</Column>

				<Column>
					<Input
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						label="Observação"
						placeholder="Observações sobre o acidente"
						isTextArea
					/>

					<Select
						label="C/S vítima"
						options={VICTIMS_OPTIONS}
						placeholder="Selecione"
						value={victim}
						onChange={(option) => setVictim(option)}
						isRequired
					/>
				</Column>
			</Wrapper>

			<BtnFooter
				confirmLabel="Avançar"
				cancelLabel="Cancelar"
				onConfirm={() =>
					onAdvance({
						sequence,
						origin,
						type,
						description,
					})
				}
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
	return (
		<Form>
			<Wrapper>
				<Column>
					<Input label="Sequência" placeholder="Ex: 6432" isRequired />

					<Select label="Origem" isRequired />

					<Select label="Tipo" isRequired />
				</Column>

				<Column>
					<Input
						label="Observação"
						placeholder="Observações sobre o acidente"
						isTextArea
					/>

					<Select label="C/S vítima" isRequired />
				</Column>
			</Wrapper>

			<BtnFooter
				confirmLabel="Avançar"
				cancelLabel="Cancelar"
				onConfirm={onAdvance}
				onCancel={onCancel}
			/>
		</Form>
	);
}

LastForm.propTypes = {
	onAdvance: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	data: PropTypes.shape({}).isRequired,
};
