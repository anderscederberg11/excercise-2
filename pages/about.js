import Header from "@/Components/Header"
import styles from '@/styles/about.module.css'
import Footer from "@/Components/Footer"
import Counter from "@/Components/Counter"
export default function About() {
    return(
        <>
            <Header/>
            <main>
                <h1>About Page</h1>
            </main>
            <Counter/>
            <Footer/>
        </>
    )
}