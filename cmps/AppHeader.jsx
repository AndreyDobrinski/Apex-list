import styles from '../assets/styles/components/AppHeader.module.css'

import Link from 'next/link'
import Image from 'next/image'

const AppHeader = () => {
    return (
        <nav className="app-header">
            <div>
                <Image src="/users.png" alt="" width={128} height={77} className={styles.img} />
            </div>
            <div>
                <Link href="/"><a className={styles.link}>Home</a></Link>
                <Link href="/about"><a className={styles.link}>About</a></Link>
                <Link href="/users"><a className={styles.link}>Users</a></Link>
            </div>
        </nav>
    )
}


export default AppHeader