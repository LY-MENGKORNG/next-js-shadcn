import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function ComponentLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<Button
				variant={'outline'}
				className="group">
				<ChevronLeft className="mr-1 hover:translate-x-[-2px]  transition-transform" />
				<Link href={'/'}>Back</Link>
			</Button>
			<div className="mt-5">{children}</div>
		</div>
	)
}
