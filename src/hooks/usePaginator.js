import { useState } from 'react';

function usePaginator() {
	const [currentPage, setCurrentPage] = useState(1);

	const nextPage = () => {
		setCurrentPage(currentPage + 1);
	};

	const previousPage = () => {
		const nextValue = currentPage - 1;
		if (nextValue === 0) setCurrentPage(1);
		else setCurrentPage(nextValue);
	};

	return {
		currentPage,
		nextPage,
		previousPage,
	};
}

export default usePaginator;
