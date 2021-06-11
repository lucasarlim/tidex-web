import ReactSelect from 'react-select';
import PropTypes from 'prop-types';
import { Container, Label, Flag } from './styles';

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
	value: '',
	onChange: undefined,
	placeholder: '',
	options: [],
	isRequired: false,
};

export default Select;
