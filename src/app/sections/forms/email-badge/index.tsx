import { Dot } from 'lucide-react'

interface EmailBadgeProps {
	email: string
}

export default function EmailBadge({ email }: EmailBadgeProps) {
	return (
		<div className="flex items-center border w-fit pr-3 bg-gray-100 rounded-xs">
			<Dot />
			<span>{email}</span>
		</div>
	)
}
