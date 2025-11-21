import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/routing.ts')

export default withNextIntl({
	reactStrictMode: true
})
