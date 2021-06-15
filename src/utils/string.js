export function getPaddedNumber(number) {
	return String(number).padStart(2, '0');
}

export function getFullDateFormat(dateString) {
	const date = new Date(dateString);

	const paddedDay = getPaddedNumber(date.getDate());
	const paddedMonth = getPaddedNumber(date.getMonth() + 1);

	return `${paddedDay}/${paddedMonth}/${date.getFullYear()}`;
}

export function getHorary(dateString) {
	const date = new Date(dateString);

	const paddedHours = getPaddedNumber(date.getHours());
	const paddedMinutes = getPaddedNumber(date.getMinutes());

	return `${paddedHours}:${paddedMinutes}`;
}
