import Link from 'next/link'

export default function Header() {
	return (
		<header className="header">
			<p className='sv'>SuperViagem - </p>
			<ul>
				<li>
					<Link href="/RotaUm">Usuários</Link>
				</li>
				<li>
					<Link href="/RotaDois">Promoções</Link>
				</li>
				<li>
					<Link href="/RotaTres">Contato</Link>
				</li>
			</ul>
		</header>
	)
}