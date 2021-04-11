import Link from 'next/link';
import {useState} from 'react'
export default function Navbar(props) {
 
  console.log(props.isOn)
  const handleLogout=()=>{
    localStorage.clear();
    props.isOn=false;
  }
  return (

    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
     <a className="navbar-brand">Doodles</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/newsfeed">Newsfeed</a>
      </li>
     
      <li className="nav-item">
        <a className="nav-link " href="/login">{props.isOn? <button onClick={()=>handleLogout()}>Log out</button> : <button>Login</button>}</a>
      </li>
      {props.isOn? <li className="nav-item">
        <a className="nav-link " href="/user/account">Profile</a>
      </li> : null }
      
    </ul>
  </div>
    </nav>
 
  );
}