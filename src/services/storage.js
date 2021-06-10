export const USER_KEY = '@TideX-User';
export const TOKEN_KEY = '@TideX-Token';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getUser = () => localStorage.getItem(USER_KEY);

export const login = (user, token) => {
	localStorage.setItem(USER_KEY, user);
	localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
	localStorage.clear();
};
