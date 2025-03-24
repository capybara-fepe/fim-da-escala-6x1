import type { ComponentProps } from 'react'
import clsx from 'clsx'

interface TimelineEventProps extends ComponentProps<'div'> {
	title: string
	description: string
	current?: boolean
	revert?: boolean
}

export default function TimelineEvent({
	title,
	description,
	current = false,
	revert = false,
}: TimelineEventProps) {
	return (
		<div className="grid grid-cols-4 md:grid-cols-12">
			<div
				className={clsx('h-[calc(100%+3rem)]', {
					'col-start-1 col-end-5 md:col-start-7 md:col-end-11 lg:col-end-10':
						!revert,
					'col-start-1 col-end-3 md:col-start-3 lg:col-start-4 md:col-end-7':
						revert,
				})}
			>
				<div
					className={clsx('flex gap-7 h-full relative', {
						'flex-row-reverse': revert,
					})}
				>
					<div className="w-0.5 h-full bg-gray-600" /> {/* LINE */}
					<div
						className={clsx('space-y-3', {
							'text-right': revert,
						})}
					>
						<span
							className={clsx('absolute size-7 bg-amber-50 rounded-full', {
								'-right-3.5': revert,
								'-inset-x-3.5': !revert,
							})}
						/>
						{current && (
							<span
								className={clsx(
									'absolute  size-10 border-2 border-amber-50 rounded-full',
									{
										'-right-5 -top-1.5': revert,
										'-inset-x-5 -inset-y-1.5': !revert,
									}
								)}
							/>
						)}
						<h3 className="font-bold text-xl">{title}</h3>
						<p className="text-gray-300 ">{description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
