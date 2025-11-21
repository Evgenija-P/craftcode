export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params

	return (
		<main className='flex min-h-screen w-full flex-col items-center justify-between'>
			{locale}
		</main>
	)
}
