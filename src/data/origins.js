export function getOrigin(origin) {
	switch (origin) {
		case '1':
			return 'STTP';
		case '2':
			return 'CPTRAN';
		case '3':
			return 'SAMU';
		case '4':
			return 'IML';
		case '6':
			return 'Bombeiros';
		default:
			return 'Outros';
	}
}

export default [
	{ label: '1 - STTP', value: '1' },
	{ label: '2 - CPTRAN', value: '2' },
	{ label: '3 - SAMU', value: '3' },
	{ label: '4 - IML', value: '4' },
	{ label: '6 - Bombeiros', value: '6' },
];
