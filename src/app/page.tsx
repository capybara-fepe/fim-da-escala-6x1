import { Footer } from './sections/footer'
import Forms from './sections/forms'
import Main from './sections/main'
import Timeline from './sections/timeline'

export default function Page() {
	return (
		<div className="font-fira-sans md:space-y-20 bg-black">
			<div className="p-8 space-y-40">
				<Main />
				<Forms />
				<Timeline />
			</div>
			<Footer />
		</div>
	)
}
