export default function Home({ params }: { params: { locale: string } }) {
	const { locale } = params

	return (
		<main className='flex min-h-screen w-full flex-col items-center justify-between'>
			{locale}
		</main>
	)
}
