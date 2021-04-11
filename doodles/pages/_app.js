
import Head from 'next/head';
import {useState,useEffect} from 'react'
import Navbar from '../components/Navbar';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
    const [posts, setPosts] = useState([]);
    const [user,setUser]=useState([]);
 
    useEffect(()=>{
      fetch('/api/posts')
        .then(response => response.json())
        .then(formatted=>setPosts(formatted))
        setUser(localStorage.getItem('user'));
        setIsOn(localStorage.getItem('isLogged'))
    },[]);
    const[isOn, setIsOn]=useState('')
    useEffect(() => {
      setIsOn(localStorage.getItem('isLogged'))
    },[])
 return(
   <>
   <Head>
                <link 
                    rel="stylesheet" 
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
                    crossorigin="anonymous"
                    />
                <script 
                    src="https://code.jquery.com/jquery-3.5.1.slim.min.js" 
                    crossorigin="anonymous"
                    />
                <script 
                    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" 
                    crossorigin="anonymous"
                    />
                <script 
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" 
                    crossorigin="anonymous"
                    />
                    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
      integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
      crossorigin="anonymous"
    />
            </Head>
            <Navbar isOn={isOn}></Navbar>
  <Component posts={posts} {...pageProps} />
   </>
 )
     
}

export default MyApp

