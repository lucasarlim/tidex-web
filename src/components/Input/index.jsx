import { useState } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import { Container, Label, Wrapper, Flag } from './styles';
import eyeOn from '../../assets/icons/eye.svg';
import eyeOff from '../../assets/icons/eye-off.svg';
import search from '../../assets/icons/search.svg';

function Input({
	label,
	value,
	onChange,
	placeholder,
	type,
	password,
	isRequired,
	isCPF,
	isSearch,
}) {
	const [visible, setVisible] = useState(!password);

	return (
		<Container>
			<Label hidden={isSearch}>
				{label} {isRequired ? <Flag>*</Flag> : ''}
			</Label>

			<Wrapper>
				<img hidden={!isSearch} src={search} alt="Pesquisar" />

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
						type={!visible ? 'password' : type}
						required={isRequired}
					/>
				)}

				{password ? (
					<button type="button" onClick={() => setVisible(!visible)}>
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
	isCPF: PropTypes.bool,
	isSearch: PropTypes.bool,
};

Input.defaultProps = {
	value: '',
	onChange: undefined,
	placeholder: '',
	type: 'text',
	password: false,
	isRequired: false,
	isCPF: false,
	isSearch: false,
};

export default Input;
