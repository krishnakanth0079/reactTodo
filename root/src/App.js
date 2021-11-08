import React,{useState} from 'react';
import Todopage from './components/todopage/Todopage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  
  const [user,setUser] = useState({name:"",email:""});
 
  const Login = details => {
    console.log(details);

    if(details.email  && details.password)
    console.log("Logged in");
    setUser({
      name:details.name,
      email:details.email
    })
  }
  
  return (
    <div className="App">
      {/* <Todopage/> */}
      {(user.email !== "" && user.name !=="" && user.password !=="") ? (
        <div className="welcom">
          <h4 style={{ float: "right" }}>Wecome,<span>{user.name}</span></h4>
          <br/>
          <br/>
          <div >
          <Todopage />
          </div>
        </div>
      ) : (
        <LoginPage Login={Login} />
      )}
    </div>
  );
}

export default App;
