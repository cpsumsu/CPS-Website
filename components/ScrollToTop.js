import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ScrollToTop() {
	const { asPath } = useRouter();
	useEffect(() => {
		document.getElementById('scoll').scrollTo(0, 0);
	}, [asPath]);

	return null;
}
