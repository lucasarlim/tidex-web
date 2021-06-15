import { getFullDateFormat, getHorary } from './string';

// eslint-disable-next-line import/prefer-default-export
export function getAccidentInfos(accident) {
	return [
		{ label: 'Seq', value: accident.id },
		{ label: 'Origem', value: accident.origem },
		{ label: 'Data', value: getFullDateFormat(accident.data) },
		{ label: 'Hora', value: getHorary(accident.data) },
	];
}
