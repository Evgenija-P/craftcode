import en from '../../messages/en.json'
import uk from '../../messages/uk.json'

import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
	const store = await cookies()
	const locale = store.get('locale')?.value || 'uk'
	const messages = locale === 'en' ? en : uk
	return { locale, messages }
})
