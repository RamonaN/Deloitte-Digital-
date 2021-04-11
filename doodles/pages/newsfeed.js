import React,{useState,useEffect} from 'react'

import Head from 'next/head' ;
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import "../styles/Card.module.css"
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch("http://localhost:3000/api/posts",{method:"GET"})
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }

export default function  Newsfeed(props){
    const [posts,setPosts]=useState([])
    const[isOn, setIsOn]=useState('false')
    useEffect(() => {
      setIsOn(localStorage.getItem('isLogged'))
      setPosts(props.data.posts)
    },[])
    return(
        <div className="container-fluid">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
         
          <div className="container d-flex flex-column align-items-center ">
              {posts? posts.map(post=><Post key={post.postId} post={post}/>) : "no data "}
          </div>
        </div>
      </div>
    )
}

  