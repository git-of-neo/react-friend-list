import {useState, useRef, useEffect} from 'react'
import sha256 from 'crypto-js/sha256';

const USERNAME = "beautifultiger295";
const HASHED_PASSWORD = "73330350ec07529ec3f2905d8521b6233024fbb247028fdeda6ab9fb550cb08e";
const SALT = "lm5Vj1Gp";

function App() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  function submit(e) {
    e.preventDefault();
    
    let inpHash = sha256(passwordRef.current.value + SALT).toString();
    if (inpHash === HASHED_PASSWORD && USERNAME === usernameRef.current.value){
      fetch("https://randomuser.me/api/?seed=lll&page=1&results=25")
        .then(res => res.json())
        .then(json => console.log(json.results));
    } else {
      // TODO : login fail logiv
      console.log("FAILED LOGIN");
    }
  }

  const style = {
    display: "flex",
    flexDirection: "column"
  }

  return (
    <form style={style} onSubmit={submit}>
      <label htmlFor="username">
        Username
      </label>
      <input ref={usernameRef} id="username"/>
      <label htmlFor="password">
        Password
      </label>
      <input ref={passwordRef} id="password"/>
      <button type='submit'>Log in</button>
    </form>
  )
}

export default App;
