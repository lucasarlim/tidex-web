import PropTypes from 'prop-types';
import {
	ActionBox,
	Container,
	Info,
	InfosBox,
	Label,
	Value,
	Button,
} from './styles';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash-2.svg';

function InfoRow({ onRemove, onEdit, infos, item }) {
	return (
		<Container>
			<InfosBox>
				{infos.map((info) => (
					<Info>
						<Label>{info.label}</Label>
						<Value>{info.value}</Value>
					</Info>
				))}
			</InfosBox>

			<ActionBox>
				<Button onClick={() => onEdit(item)}>
					<img src={edit} alt="Editar" />
				</Button>

				<Button onClick={() => onRemove(item)}>
					<img src={trash} alt="Remover" />
				</Button>
			</ActionBox>
		</Container>
	);
}

InfoRow.propTypes = {
	onRemove: PropTypes.func,
	onEdit: PropTypes.func,
	infos: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		})
	),
	item: PropTypes.shape({}).isRequired,
};

InfoRow.defaultProps = {
	onRemove: undefined,
	onEdit: undefined,
	infos: [],
};

export default InfoRow;
