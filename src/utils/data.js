import { getFullDateFormat, getHorary, getFirstAndLastName } from './string';
import { getOrigin } from '../data/origins';

export function getAccidentInfos(accident) {
	return [
		{ label: 'Seq', value: accident.id },
		{ label: 'Origem', value: getOrigin(accident.origem) },
		{ label: 'Data', value: getFullDateFormat(accident.data) },
		{ label: 'Hora', value: getHorary(accident.data) },
	];
}

export function getUserInfos(user) {
	return [
		{ label: 'Nome', value: getFirstAndLastName(user.nome) },
		{ label: 'CPF', value: user.cpf },
		{ label: 'Tipo', value: user.admin ? 'Admin' : 'Usuário' },
	];
}
