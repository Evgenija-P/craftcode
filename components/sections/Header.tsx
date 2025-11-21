import LocaleSwitcher from '../LocaleSwitcher'
import Menu from '../Menu'
import ThemeToggle from '../ThemeToggle'
import Logo from '../UI/Logo'
import BaseSection from '../base/BaseSections'
import Wrapper from '../base/Wrapper'

const Header = ({ locale }: { locale: string }) => {
	return (
		<header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-b-primary border-opacity-20'>
			<BaseSection>
				<Wrapper className='flex items-center gap-x-10 justify-between py-4'>
					<Logo />
					<div className='flex items-center gap-x-8'>
						<Menu locale={locale} />
						<div className='flex items-center gap-x-2'>
							<LocaleSwitcher locale={locale} />
							<ThemeToggle />
						</div>
					</div>
				</Wrapper>
			</BaseSection>
		</header>
	)
}
export default Header
