import { useState } from 'react'
import Image from 'next/image';

export default function BlurImage({ src, alt, width, height }) {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<Image src={src} width={width} height={height} alt={alt}
			className={`object-cover h-64 bg-gray-300 rounded-t-lg transition duration-500 ${isLoading ? 'grayscale blur-2xl scale-110 animate-pulse' : 'grayscale-0 blur-0 scale-100'}`}
			onLoadingComplete={() => setIsLoading(false)}
		/>
	)
}
