
import { useState } from 'react';
import "../styles/Card.module.css";
import Link from 'next/link'

export default function Post (props) {
  const [post, setPost] = useState(props.post);
  console.log(post)
 
    const handleClick=()=>{
        if (!post.liked) {
          setPost({ ...post, liked: true, likes: post.likes + 1 });
        
        }
        else{
          setPost({ ...post, liked: false, likes: post.likes-1});
        }
      }
   
  return (
    <div className="container">
      <div className='card col-1-  col-md-5  text-dark mb-3 mt-3 mx-auto'>
      <div className='card-header pl-2'>
      <a href={'/user/'+post.userId}>
          <div className='row'><div className='col-1'>
              <img src={post.profilePic} alt='' className='img-fluid rounded-circle border-primary'/>
        </div>
      <div className='col-11'>{post.userName}</div></div></a>
      </div>
      <img src={post.imgSrc} className='card-img-top' alt='...' />
      <div className='card-body'>
        <div className='row justify-content-between'>
          <div className='col-10'>
            <div
              className='btn-group float-right w-100'
              role='group'
              aria-label='Basic example'
            >
              <button
                type='button'
                className={`btn pl-0 pt-0 text-left ${
                  post.liked ? 'full' : 'empty'
                }
                `}
                onClick={() => handleClick()}
              >
           <i className={`fas fa-heart fa-2x ${post.liked? 'full': 'empty'}`} ></i> 
               
              </button>
             
              <button
                  type='button'
                  className='btn  pl-0 pt-0 text-right empty'
                  
                  onClick={() =>handleComment()}
                >
              <i className="far fa-comment fa-2x"></i>
                </button>
               
            
            </div>
          </div>
          <div className='col-1'>
            
          </div>
        </div>
        <p className='card-title font-weight-bolder'>Likes: {post.likes}</p>
        <div className='card-title font-weight-bolder'>
          <a href={'/user/' + post.userId}>{post.userName}</a>  
          <span className='card-text'>  {post.description}</span>
        </div>
       
          {post.comments.map(comm=>(
               <div key={comm.commId} className='card-title'>
               <Link href={'/user/' + comm.userId}>{comm.userName}</Link>  
               <span className='card-text'>  {comm.commText}</span>
             </div>
          ))}
        
       
      </div>
    </div>
    </div>
    
  );
}
