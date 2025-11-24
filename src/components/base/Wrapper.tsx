const Wrapper = ({
	children,
	className = ''
}: {
	children: React.ReactNode
	className?: string
}) => {
	return (
		<div
			className={`${className} w-full md:max-w-3xs lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-3 md:px-5 lg:px-6 xl:px-8 mx-auto`}
		>
			{children}
		</div>
	)
}
export default Wrapper
