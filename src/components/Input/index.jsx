import { useState } from 'react';
import PropTypes from 'prop-types';
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
}) {
	const [visible, setVisible] = useState(!password);

	return (
		<Container>
			<Label>
				{label} {isRequired ? <Flag>*</Flag> : ''}
			</Label>

			<Wrapper>
				<input
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					type={type}
					required={isRequired}
				/>

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
};

Input.defaultProps = {
	value: '',
	onChange: undefined,
	placeholder: '',
	type: 'text',
	password: false,
	isRequired: false,
};

export default Input;
