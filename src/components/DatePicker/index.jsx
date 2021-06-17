import PropTypes from 'prop-types';
import ReactPicker from 'react-datetime-picker';
import { Container, Label, Flag } from './styles';

function DatePicker({ label, value, onChange, isRequired, minDate, maxDate }) {
	return (
		<Container>
			<Label>
				{label} {isRequired ? <Flag>*</Flag> : ''}
			</Label>

			<ReactPicker
				format="dd-MM-y HH:mm"
				className="date-container"
				required={isRequired}
				value={value}
				onChange={onChange}
				locale="pt-BR"
				maxDate={maxDate || new Date()}
				minDate={minDate}
			/>
		</Container>
	);
}

DatePicker.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func,
	isRequired: PropTypes.bool,
	maxDate: PropTypes.instanceOf(new Date()),
	minDate: PropTypes.instanceOf(new Date()),
};

DatePicker.defaultProps = {
	value: undefined,
	onChange: undefined,
	isRequired: false,
	maxDate: undefined,
	minDate: undefined,
};

export default DatePicker;
