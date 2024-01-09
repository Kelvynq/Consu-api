import styles from './card.module.css';


export default async function Card() {
	const cards = await fetch('http://localhost:5098/api/usuario').then(res => res.json());
	console.log(cards);

	return(
	<div className={styles.container}>
			{cards?.map((card) => (
				<div key={card.Id} className={styles.card}>
					<div className={styles.card_nome}>
					<img src={card.usuarioURL} alt="Imagem do úsuario" />
						<p>Nome: {card.nome}</p>
						<p>Email: {card.email}</p>
						<p>Senha: {card.senha}</p>
					</div>
				</div>
			))}
		</div>
	)
}