import React, {useState,useEffect} from 'react'
import Login from '../components/Login';
import styles from "../styles/Login.module.css"
import { useRouter } from 'next/router';
import Account from './user/account';
async function loginUser(credentials) {
    return fetch('http://localhost:3000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
export default function Authenticate(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const router=useRouter();
    const [user, setUser]=useState([]);
    const handleSubmit = async e => {
      e.preventDefault();
      const user = await loginUser({
          email,
          password
        });
      setUser(user)
     
    }
    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(user));
        if(user.isLogged){
            localStorage.setItem('isLogged',true)
        }
        
    },[user])
   if(user.isLogged){
    router.push('/user/account');
  
    return(
        <Account></Account>
    )
   }
   else{
    return(
        <div className={styles.outer} >
        <form className={styles.inner} onSubmit={handleSubmit}>

      <h3>Log in</h3>

<div className="form-group">
  <label>Email</label>
  <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
</div>

<div className="form-group">
  <label>Password</label>
  <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
</div>


<button type="submit" className="btn btn-dark btn-lg btn-block" >Sign in</button>

</form>
    </div>
  
);
   }
 
      
  }
