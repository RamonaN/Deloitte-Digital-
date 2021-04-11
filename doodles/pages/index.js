import Head from 'next/head'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import "../styles/Login.module.css"
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

export default function Home() {


  return (
    <div className="container-fluid">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        
        
        <h2 className="text-center ">Welcome to Doodles !</h2>
       
      </div>
    </div>
  )
}
