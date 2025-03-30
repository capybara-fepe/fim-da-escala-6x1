import Image from 'next/image'
import CapybaraLogo from '@/assets/capybara-written-logo.svg'

export function Footer() {
	return (
		<div className="bg-neutral-900 aspect-4/1 md:aspect-8/1 flex justify-center">
			<div className="relative h-full w-full overflow-hidden flex items-center justify-center">
				<Image
					src="/capybara-fepe-cut.jpg"
					alt="capybara fepe logo"
					width={200}
					height={200}
					className="rounded-full opacity-45"
				/>
				<CapybaraLogo className="absolute z-2 hover:fill-red-400 transition-colors duration-300 fill-white scale-125 cursor-pointer" />
				{/* <img
					src="/capybara-written-logo.svg"
					alt="capybara fepe"
					className="w-[300%] absolute z-2 hover:fill-red-400"
				/> */}
			</div>
		</div>
	)
}
