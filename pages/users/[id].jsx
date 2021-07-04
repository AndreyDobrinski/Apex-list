// import styles from '../assets/styles/About.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json();


    return {
        props: { user: data }
    }

}

const UserDetails = ({ user }) => {
    return (
        <div className="">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.website}</p>
        </div>
    )
}


export default UserDetails
