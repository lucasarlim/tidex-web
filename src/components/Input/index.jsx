import { useState } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import { Container, Label, Wrapper, Flag } from './styles';
import eyeOn from '../../assets/icons/eye.svg';
import eyeOff from '../../assets/icons/eye-off.svg';

function Input({
	label,
	value,
	onChange,
	placeholder,
	type,
	password,
	isRequired,
	isCPF,
}) {
	const [visible, setVisible] = useState(!password);

	return (
		<Container>
			<Label>
				{label} {isRequired ? <Flag>*</Flag> : ''}
			</Label>

			<Wrapper>
				{isCPF ? (
					<InputMask
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						type={type}
						required={isRequired}
						mask="999.999.999-99"
					/>
				) : (
					<input
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						type={type}
						required={isRequired}
					/>
				)}

				{password ? (
					<button type="button" onPress={() => setVisible(!visible)}>
						<img src={visible ? eyeOn : eyeOff} alt="ver/esconder senha" />
					</button>
				) : (
					''
				)}
			</Wrapper>
		</Container>
	);
}

Input.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	password: PropTypes.bool,
	isRequired: PropTypes.bool,
	isCPF: PropTypes.string,
};

Input.defaultProps = {
	value: '',
	onChange: undefined,
	placeholder: '',
	type: 'text',
	password: false,
	isRequired: false,
	isCPF: false,
};

export default Input;
