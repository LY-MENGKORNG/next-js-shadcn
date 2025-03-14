import Link from 'next/link'
import ModeToggle from './ModeToggle'
import { Card } from '../ui/card'

export default function Navbar() {
	return (
		<Card className="rounded-none border-t-0 border-l-0 border-r-0 p-0 w-full backdrop-blur-lg sticky top-0 left-0 shadow-none">
			<nav className="w-full flex justify-between items-center responsive py-4">
				<Link href={'/'}>
					<h1 className="text-2xl">Next.js - Shadcn</h1>
				</Link>
				<div>
					<ModeToggle />
				</div>
			</nav>
		</Card>
	)
}
