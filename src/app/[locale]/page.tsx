import { Locale } from '@/types/types'

export default function Home({ params }: { params: { locale: Locale } }) {
	const { locale } = params

	return (
		<main className='flex min-h-screen w-full flex-col items-center justify-between'>
			{locale}
		</main>
	)
}
