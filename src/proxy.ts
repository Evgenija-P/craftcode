import { Locale } from './types/types'
import { routing } from '@/i18n/routing'

import { NextRequest, NextResponse } from 'next/server'

export default function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl

	// 1. Пропускаємо статику та API
	if (
		pathname.startsWith('/_next') ||
		pathname.startsWith('/api') ||
		pathname.startsWith('/favicon') ||
		pathname.includes('.')
	) {
		return
	}

	// 2. Витягуємо сегменти шляху
	const segments = pathname.split('/').filter(Boolean)
	const firstSegment = segments[0]

	// 3. Читаємо куку
	const rawCookieLang = request.cookies.get('craftcode_locale')?.value

	const cookieLang: Locale | undefined =
		rawCookieLang && routing.locales.includes(rawCookieLang as Locale)
			? (rawCookieLang as Locale)
			: undefined

	// 4. Якщо перший сегмент — локаль
	if (firstSegment && routing.locales.includes(firstSegment as Locale)) {
		if (cookieLang !== firstSegment) {
			const response = NextResponse.next()
			response.cookies.set('craftcode_locale', firstSegment as Locale, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365,
				sameSite: 'strict'
			})
			return response
		}

		return
	}

	// 5. Якщо локалі немає — додаємо defaultLocale або cookie
	const langToUse = cookieLang || routing.defaultLocale

	const url = new URL(`/${langToUse}${pathname}`, request.url)
	url.search = request.nextUrl.search

	return NextResponse.redirect(url)
}

export const config = {
	matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}
