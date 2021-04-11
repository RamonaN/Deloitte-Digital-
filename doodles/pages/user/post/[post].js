import { useRouter } from 'next/router';
import { useState } from 'react';
import Post from '../../../components/Post';
export default function PostPage(props) {
  const router = useRouter();
  const id = router.query.post;

  const postDetails = props.posts.posts.filter(
    (item) =>(String(item.postId) === String(id))
  );
  if (props.posts.posts && props.posts.posts.length && !postDetails[0]) {
    router.push('/');
  }
 
  const [post, setPost]=useState(postDetails[0])

  if (postDetails.length) {
    return (
    
    <Post post={post}></Post>
   
    );
  } else {
    return <p>Loading</p>;
  } 
}
