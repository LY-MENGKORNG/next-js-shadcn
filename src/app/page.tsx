import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
const components = [
	{
		id: 1,
		name: 'Button',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus, facere ipsum officia dignissimos qui!',
		link: '/buttons',
	},
	{
		id: 2,
		name: 'Calendar',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus, facere ipsum officia dignissimos qui!',
		link: '/calendar',
	},
]
export default function Home() {
	return (
		<section className="space-y-3">
			{components.map(({ id, name, desc, link }) => (
				<Card
					key={id}
					className="shadow-none">
					<CardHeader>
						<CardTitle>{name}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>{desc}</CardDescription>
					</CardContent>
					<CardFooter>
						<Button
							asChild
							className="ml-auto group"
							size={'icon'}>
							<Link href={link}>
								<ChevronRight className="group-hover:translate-x-1 transition-transform" />
							</Link>
						</Button>
					</CardFooter>
				</Card>
			))}
		</section>
	)
}
