'use client'

import { Link, usePathname } from '../i18n/navigation'
import { routing } from '../i18n/routing'
import { Locale } from '../types/types'

const LocaleSwitcher = ({ locale }: { locale: Locale }) => {
	const pathname = usePathname()

	const languages = { en: 'eng', uk: 'ukr' }

	const segments = pathname.split('/').filter(Boolean)
	const firstSegment = segments[0]

	// шлях без локалі
	const pathWithoutLocale = routing.locales.includes(firstSegment as Locale)
		? `/${segments.slice(1).join('/')}`
		: pathname

	const nextLocale = locale === 'en' ? 'uk' : 'en'
	const nextLanguageName = languages[nextLocale]

	return (
		<Link
			href={pathWithoutLocale || '/'} // 👈 без локалі
			locale={nextLocale} // 👈 next-intl сам додасть /uk або /en
			className='flex gap-2 items-center cursor-pointer hover:text-gr-5 duration-200'
		>
			<div className='min-w-8'>{nextLanguageName}</div>
		</Link>
	)
}

export default LocaleSwitcher
