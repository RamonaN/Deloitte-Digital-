import { useRouter } from 'next/router';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';


    export async function getServerSideProps() {
        // Fetch data from external API
        const res = await fetch("http://localhost:3000/api/posts")
        const data = await res.json()
      
        // Pass data to the page via props
        return { props: { data } }
      }

export default function UserPage(props) {
  const router = useRouter();
  const id = router.query.id;
  const [bookmarked, setBookmarked] = useState(false);
  const userPosts = props.data.posts.filter(
    (item) => String(item.userId) === String(id)
  );
  console.log(userPosts)
  if (props.data.posts && props.data.posts.length && !userPosts) {
    router.push('/');
  }
  if (userPosts.length) {
    return (
      <>
     
        <div className='row text-white justify-content-center'>
        <div className="col-3 mt-3 text-center d-flex flex-column align-items-center">
        <h4>{userPosts[0].userName}</h4>
         
        </div>
          <div className='col-3 mt-3 text-center d-flex flex-column align-items-center'>
          <p className='m-0'>{userPosts.length}</p>
            <p className='text-white-50'>Posts</p>
          </div>
          
          <div className='col-3 mt-3 text-center d-flex flex-column align-items-center'>
            <button
              type='button'
              className={`btn btn-dark p-0 text-left ${bookmarked ? ' clicked' : ''}
              `}
              onClick={() => setBookmarked(true)}
            >
              Follow
            </button>
          </div>
         
        </div>
       
        
        <div className="container col-md-8 ">
        {userPosts.map(post=><Link href={'/user/post/'+post.postId}><img className="img-fluid col-md-3 mb-3" src={post.imgSrc}/></Link>)}
        </div>
      </>
    );
  } else {
    return <p>Loading</p>;
  }
}
