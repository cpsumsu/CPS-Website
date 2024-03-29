import { useState } from 'react'
import Image from 'next/image';

export default function BlurImage({ src, alt, width, height, fixedWidth = true, fixedHeight = true }) {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<Image src={src} width={width} height={height} alt={alt}
			className={`object-cover ${fixedHeight && 'h-64'} ${fixedWidth == false && 'w-full'} bg-gray-300 transition duration-500 ${isLoading ? 'rounded-t-lg grayscale blur-2xl scale-110 animate-pulse' : 'grayscale-0 blur-0 scale-100'}`}
			onLoadingComplete={() => setIsLoading(false)}
		/>
	)
}
