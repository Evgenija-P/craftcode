'use client'

import { useMounted } from '../hooks/useMounted'

import { useTheme } from 'next-themes'

export default function ThemeToggle() {
	const mounted = useMounted()

	const { theme, setTheme } = useTheme()

	function themaToggleHandler() {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	if (!mounted) return null

	return (
		<label
			className='block group relative px-px h-6 w-11 rounded-full shadow-[inset_0_0_0_1px_var(--accent)] bg-white cursor-pointer
      outline-2 outline-offset-2 outline-transparent focus-within:outline-blue
      hover:shadow-[inset_0_0_0_1px_var(--accent),0_0_14px_0_var(--accent)]
      dark:shadow-none dark:bg-linear-to-b dark:from-[#5BD187] dark:to-blue  base-transition
      dark:hover:shadow-[0_0_14px_0_var(--accent)]'
		>
			<input
				type='checkbox'
				className='sr-only'
				checked={theme === 'dark'}
				onChange={themaToggleHandler}
				onClick={e => e.currentTarget.blur()}
			/>
			<span
				className='absolute left-0.5 top-0.5 flex justify-center items-center size-5 bg-accent rounded-full
        dark:bg-[#1f1f1f] dark:translate-x-full base-transition'
			>
				{theme === 'dark' ? <p className=''>DarkTheme</p> : <p className=''>LightTheme</p>}
			</span>
		</label>
	)
}
