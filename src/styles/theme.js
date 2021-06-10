const THEME = {
	primary: '#00A588',
	primaryLighter: '#00CCA8',
	primaryDarker: '#00705E',
	success: '#50C465',
	danger: '#FF665C',
	light: '#FFFFFF',
	dark: '#242424',
	gray: '#BDBDBD',
	grayLighter: '#EEEEEE',
	grayDarker: '#A6A6A6',
};

export const useTheme = {
	primary: ({ theme }) => theme.primary,
	primaryLighter: ({ theme }) => theme.primaryLighter,
	primaryDarker: ({ theme }) => theme.primaryDarker,
	success: ({ theme }) => theme.success,
	danger: ({ theme }) => theme.danger,
	light: ({ theme }) => theme.light,
	dark: ({ theme }) => theme.dark,
	gray: ({ theme }) => theme.gray,
	grayLighter: ({ theme }) => theme.grayLighter,
	grayDarker: ({ theme }) => theme.grayDarker,
};

export default THEME;
