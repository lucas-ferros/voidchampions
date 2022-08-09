import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
     <h1>Bem-Vindx ao Siri Cascudo</h1>
     <ul>
      <li>
       <Link href="/Hamburguer">
         <a>Hamburguer</a>
       </Link>  
      </li>

      <li>
      <Link href="/Refri">
        <a>Refri</a>
      </Link>
      </li>

      <li>
      <Link href="/Milkshake">
        <a>Milkshake</a>
      </Link>
      </li>
     </ul>
    </div>
  )
}