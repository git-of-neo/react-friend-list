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
  const [page, setPage] = useState(1);
  const [loggedIn, setLoggedIn] = useState(false);

  const getFriends = async () => {
    const response = await fetch(`https://randomuser.me/api/?seed=lll&page=${page}&results=25`);
    const data = await response.json();
    setFriends(data.results);
  }

  useEffect(()=>{
    getFriends(page);
  }, [page])

  function handleSearch(e){
    if (e.key==="Enter" && e.target.checkValidity()){
      setPage(e.target.value);
    }
  }

  function submit(e) {
    e.preventDefault();
    
    let inpHash = sha256(passwordRef.current.value + SALT).toString();
    if (inpHash === HASHED_PASSWORD && USERNAME === usernameRef.current.value){
      setLoggedIn(true);
      setPage(1);
      // getFriends(1);
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
      loggedIn && <input id="searchPage" placeholder='Page no.' type="number" min="1" max="20" onKeyDown={(e)=>{handleSearch(e)}}/>
    }
    {
      // TODO : unique key
      loggedIn && friends.length > 0 &&
        <div className='friend-list'>
          {friends.map(x => {
            return <FriendCard friend = {x}/>
          })}
        </div>
    }
  </div>
  )
}

export default App;
