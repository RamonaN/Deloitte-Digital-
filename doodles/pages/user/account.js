import Navbar from "../../components/Navbar";
import {useState,useEffect} from 'react'
import Post from "../../components/Post";
import AddPost from "../../components/AddPost";

 function Account({data}){
   const [posts,setPosts]=useState([])
   const [user,setUser]=useState({})
   const[isOn, setIsOn]=useState(false)
   console.log(data)
   console.log("nu mai pooot")
    useEffect(() => {
        const user=JSON.parse(localStorage.getItem('user'))
        console.log(user)
        setUser(user)
        const postari=data.posts.filter(post=>String(post.userId)===String(user.user[0].userId))
        setPosts(postari)
    },[])
    useEffect(() => {
        setIsOn(localStorage.getItem('isLogged'))
    }, [])

    if(posts.length){
        return(
            <>
         
            <div className="container d-flex flex-column">
             <button type="button" className="btn bg-white col-md-5 mx-auto mt-5" data-toggle="modal" data-target="#exampleModal">Add new post</button>
            <AddPost userId={user.user[0].userId} userName={user.user[0].userName}></AddPost>

            </div>
            {posts.map(post=><Post key={post.postId} post={post}></Post>)}
            </>
         )
    }
    else{
        return(
            <div>Still fetching</div>
        )
    }
    
}
export async function getServerSideProps() {
 
    const res = await fetch("http://localhost:3000/api/posts")
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
  }

export default Account;