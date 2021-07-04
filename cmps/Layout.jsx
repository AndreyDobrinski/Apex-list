// import styles from '../assets/styles/About.module.css'

import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"

import Head from 'next/head'


const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Apex List</title>
                <meta name="keywords" content="users" />
            </Head>
            <div className="content">
                <AppHeader />
                {children}
                <AppFooter />
            </div>
        </>
    )
}


export default Layout