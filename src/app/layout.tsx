import type { Metadata } from 'next'
import { Fira_Sans, Jost } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const guildhall = localFont({
	src: [
		{ path: '../fonts/Guildhall_Regular.otf', style: 'normal' },
		{ path: '../fonts/Guildhall_Regular_Italic.otf', style: 'italic' },
	],
	variable: '--font-guildhall',
})

const firaSans = Fira_Sans({
	weight: ['200', '300', '400', '600', '700'],
	subsets: ['latin'],
	variable: '--font-fira-sans',
})

const jost = Jost({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
	variable: '--font-jost',
})

export const metadata: Metadata = {
	title: 'Fim da escala 6x1',
	description: 'Assine para o fim da escala 6x1, rumo à 4x3!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${guildhall.variable} ${firaSans.variable} ${jost.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
