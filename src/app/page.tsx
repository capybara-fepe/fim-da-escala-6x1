import Forms from './sections/forms'
import Main from './sections/main'
import Timeline from './sections/timeline'

export default function Page() {
	return (
		<div className="p-8 font-fira-sans space-y-40">
			<Main />
			<Forms />
			<Timeline />
		</div>
	)
}
