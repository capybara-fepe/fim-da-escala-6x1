'use client'

import useWindowSize from '@/hooks/use-window-size'
import TimelineEvent from './timeline-event'

export default function Timeline() {
	const windowWidth = useWindowSize()
	const isMoreThanMd = windowWidth ? windowWidth > 768 : false

	return (
		<div className="space-y-20 h-screen">
			<div className="flex justify-end md:justify-center">
				<h2 className="font-guildhall w-1/2 text-5xl lg:text-6xl text-right md:text-center">
					Linha do Tempo
				</h2>
			</div>
			<div className="space-y-10 pl-3 md:p-0">
				<TimelineEvent
					title="Câmara dos Deputados"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, optio earum nihil enim consectetur error in et cum necessitatibus aspernatur sapiente eveniet neque quidem minus rerum iusto quisquam laborum incidunt!"
					current
				/>
				<TimelineEvent
					title="Câmara dos Deputados"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, optio earum nihil enim consectetur error in et cum necessitatibus aspernatur sapiente eveniet neque quidem minus rerum iusto quisquam laborum incidunt!"
					revert={isMoreThanMd}
				/>
				<TimelineEvent
					title="Câmara dos Deputados"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, optio earum nihil enim consectetur error in et cum necessitatibus aspernatur sapiente eveniet neque quidem minus rerum iusto quisquam laborum incidunt!"
				/>
			</div>
		</div>
	)
}
