import React, {useState} from 'react'
import styles from "../styles/Login.module.css"


export default function Login(){
 
  return (
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
};
