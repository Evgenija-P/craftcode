
type BaseSectionProps = {
	className?: string
	children: React.ReactNode
	noHidden?: boolean
	link?: string
}

const BaseSection = ({ className, children, noHidden, link }: BaseSectionProps) => {
	const classNamProps = className || ''

	const overflowHidden = !noHidden ? 'overflow-hidden' : ''

	const classNam = `${classNamProps} ${overflowHidden}`.trim()

	return (
		<section className={`${classNam} w-full mx-auto px-8`} id={link}>
			{children}
		</section>
	)
}
export default BaseSection
