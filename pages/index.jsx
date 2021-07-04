
// import styles from '../assets/styles/Home.module.css'
import styles from '../assets/styles/pages/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid voluptatibus quasi minima magnam voluptatum voluptatem tenetur, accusantium recusandae sapiente enim delectus quia exercitationem corporis fugit consequuntur atque quod sint?</p>
      <p className={styles.txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid voluptatibus quasi minima magnam voluptatum voluptatem tenetur, accusantium recusandae sapiente enim delectus quia exercitationem corporis fugit consequuntur atque quod sint?</p>

      <Link href="/users">
        <a className={styles.btn}>See Users</a>
      </Link>
    </div>

  )
}
