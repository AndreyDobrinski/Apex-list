import styles from '../assets/styles/components/NotFound.module.css'

import Link from 'next/link'

const NotFound = () => {
    return (
        <div className={styles.content}>
            <h1>Oooops</h1>
            <h2>This page does not exist</h2>
            <p>Go back to <Link href="/"><a className={styles.link} >Homepage</a></Link></p>
        </div>
    )
}


export default NotFound