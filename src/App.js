import {useState, useRef, useEffect} from 'react'
import sha256 from 'crypto-js/sha256';
import FriendCard from './FriendCard';

const USERNAME = "beautifultiger295";
const HASHED_PASSWORD = "73330350ec07529ec3f2905d8521b6233024fbb247028fdeda6ab9fb550cb08e";
const SALT = "lm5Vj1Gp";

function App() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    const response = await fetch("https://randomuser.me/api/?seed=lll&page=1&results=25");
    const data = await response.json();
    setFriends(data.results);
  }

  function submit(e) {
    e.preventDefault();
    
    let inpHash = sha256(passwordRef.current.value + SALT).toString();
    if (inpHash === HASHED_PASSWORD && USERNAME === usernameRef.current.value){
      getFriends()
      console.log(friends);
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
    <div className="app">
      <form style={style} onSubmit={submit}>
        <label htmlFor="username">
          Username
        </label>
        <input ref={usernameRef} id="username" defaultValue={"beautifultiger295"}/>
        <label htmlFor="password">
          Password
        </label>
        <input ref={passwordRef} id="password" defaultValue={"selena"}/>
        <button type='submit'>Log in</button>
      </form>

    {
      friends.length > 0 ? (
        <div className='friend-list'>
          {friends.map(x => {
            return <FriendCard friend = {x}/>
          })}
        </div>
      )
        :
      (
        <div>
          <h2> No friends </h2>
        </div>
      )
    }
  </div>
  )
}

export default App;
