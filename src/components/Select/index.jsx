import ReactSelect from 'react-select';
import PropTypes from 'prop-types';
import { Container, Label, Flag, selectStyles } from './styles';

function Select({ label, value, onChange, placeholder, isRequired, options }) {
	return (
		<Container>
			<Label>
				{label} {isRequired ? <Flag>*</Flag> : ''}
			</Label>

			<ReactSelect
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				options={options}
				isSearchable
				styles={selectStyles}
				noOptionsMessage={() => 'Sem opções'}
			/>
		</Container>
	);
}

Select.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	isRequired: PropTypes.bool,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		})
	),
};

Select.defaultProps = {
	value: undefined,
	onChange: undefined,
	placeholder: '',
	options: [],
	isRequired: false,
};

export default Select;
