import React,{useState} from "react";
const LoginPage = ({Login,error}) => {
    const [details,setDetails] = useState({name:"",email:"",password:""})

    const submitHandler = e => {
        e.preventDefault();
         
        Login(details);
    }
    return(
        <form onSubmit={submitHandler}>
            <div>
                <h2>Login</h2>
                <div>
                    <laber>Name:</laber>
                    <input type="text" name="name" id="name"
                    onChange={e => setDetails({...details,name:e.target.value})}
                    value={details.name}
                    />
                </div>
                <div>
                    <laber>Email:</laber>
                    <input type="email" name="email" id="email"
                    onChange={e => setDetails({...details,email:e.target.value})}
                    value={details.email}
                    />
                </div>
                <div>
                    <laber>Password:</laber>
                    <input type="password" name="password" id="password"
                    onChange={e => setDetails({...details,password:e.target.value})}
                    value={details.password}
                    />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    );
};

export default LoginPage;