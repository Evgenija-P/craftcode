import { Link } from '../i18n/navigation'

import { Locale } from '@/src/types/types'

const Menu = ({ locale }: { locale: Locale }) => {
	const navItems = [
		// {
		// 	label: { uk: 'Головна', en: 'Home' },
		// 	href: `/`
		// },
		{
			label: { uk: 'Про мене', en: 'About' },
			href: `/#about`
		},
		{
			label: { uk: 'Проекти', en: 'Portfolio' },
			href: `/#projects`
		},
		{
			label: { uk: 'Послуги', en: 'Services' },
			href: `/#services`
		},
		{
			label: { uk: 'Контакти', en: 'Contact' },
			href: `/#contact`
		}
	]

	return (
		<nav className='flex items-center gap-x-5'>
			{navItems.map(item => (
				<Link
					href={item.href}
					key={item.href}
					className={` transition-all duration-300 ${
						item.href === `/#contact`
							? 'px-5 py-2 rounded-lg bg-accent text-white border border-accent hover:bg-bgColor hover:text-accent'
							: 'text-accent hover:text-primary hover:underline hover:underline-offset-2'
					}`}
				>
					{item.label[locale]}
				</Link>
			))}
		</nav>
	)
}
export default Menu
