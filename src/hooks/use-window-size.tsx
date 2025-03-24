'use client'
import { useState, useEffect } from 'react'

export default function useWindowSize() {
	const [width, setWidth] = useState<number | undefined>(undefined)

	useEffect(() => {
		// Verifica se está no cliente antes de acessar `window`
		if (typeof window === 'undefined') return

		const handleResize = () => setWidth(window.innerWidth)

		// Define o valor inicial corretamente no cliente
		setWidth(window.innerWidth)
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return width
}
