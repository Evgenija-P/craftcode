import { defineRouting } from 'next-intl/routing'

const routing = defineRouting({
	locales: ['en', 'uk'],
	defaultLocale: 'uk'
})

export default routing
export { routing }
