import useApi from '../hooks/useApi';

export async function login(cpf, password) {
	const { data, statusCode } = useApi('/user/login', 'POST', {
		cpf,
		password,
	});

	return { data, statusCode };
}

export async function logout() {
	const { data, statusCode } = useApi('/user/logout', 'POST');

	return { data, statusCode };
}
