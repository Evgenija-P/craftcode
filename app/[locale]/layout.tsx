import { Locale } from '@/types/types'

import Header from '../../components/sections/Header'

import { routing } from '@/i18n/routing'
import '@/styles/globals.css'

import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import { Jura, Montserrat } from 'next/font/google'
import { notFound } from 'next/navigation'

const juraSans = Jura({
	subsets: ['latin'],
	variable: '--font-jura-sans'
})

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat'
})

export const metadata: Metadata = {
	title: 'Portfolio | CraftCode',
	description: 'Portfolio website of CraftCode'
}

export default async function RootLayout({
	children,
	params
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params

	const safeLocale: Locale = locale === 'uk' || locale === 'en' ? (locale as Locale) : 'uk'

	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	return (
		<html lang={safeLocale} suppressHydrationWarning>
			<body
				className={`${juraSans.variable} ${montserrat.variable} antialiased relative pt-[74px]`}
			>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<NextIntlClientProvider>
						<Header locale={safeLocale} />
						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
