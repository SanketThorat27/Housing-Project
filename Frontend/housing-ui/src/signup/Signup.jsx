import { useEffect, useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import toast from "react-hot-toast";


const SignUpLogin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [login,setLogin]=useState({
    email:"",password:""
  })
  const navigate=useNavigate()
const [user,setUser]=useState({
  name:"",email:"",password:""
})
const handleClick=(e)=>{
  setUser({...user,[e.target.name]:e.target.value})
}
  const handleSubmit=async(e)=>{
    try {
      e.preventDefault()
      const res=  await axios.post("http://localhost:5200/auth/signup",user,{withCredentials:true})
      const data2=res.data
     {data2.success===true?toast.success(data2.message,{position:"top-right"}):toast.error("Invalid Fields or User Already Exists",{position:"top-right"})
    }  
    setIsSignUp(false)
     
  }
  catch (error) {
      console.log("ERROR",error)
  }
  }
  const handleLoginClick=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
  }
  const handleLoginSubmit=async(e)=>{
    try{
      e.preventDefault()
    const res= await axios.post("http://localhost:5200/auth/login",login,{withCredentials:true})
    const data2=res.data
    
    localStorage.setItem("token",data2.token)
    if(data2.success===true)
      {
      navigate("/HomePage")
      toast.success(data2.message,{position:"top-right"})
    }
    if(data2.success===false){
      toast.error("Invalid User",{position:"top-right"})
      navigate(0)
    }
    
    } catch(error){
      console.log("ERROR",error)
    }
  }
  
useEffect(()=>{
  handleSubmit()
  handleLoginSubmit()
 
  
},[])
  return (
    <div className={`container ${isSignUp ? "right-panel-active" : ""}`} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="social-container">
            <button className="social"><i class="fa-brands fa-google"></i></button>
            <button className="social"><i class="fa-duotone fa-solid fa-square-envelope"></i></button>
            <button className="social"><i class="fa-brands fa-github"></i></button>
          </div>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Full Name" value={user.name} onChange={handleClick} required />
          <input type="email" name="email" placeholder="Email Address" value={user.email} onChange={handleClick} required />
          <input type="password" name="password" placeholder="Create Password" value={user.password} onChange={handleClick} required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      
      <div className="form-container sign-in-container">
        <form onSubmit={handleLoginSubmit} >
          <h1>Login</h1>
          <div className="social-container">
            <button className="social"><i class="fa-brands fa-google"></i></button>
            <button className="social"><i class="fa-duotone fa-solid fa-square-envelope"></i></button>
            <button className="social"><i class="fa-brands fa-github"></i></button>
          </div>
          <span>or use your email account</span>
          <input type="email" value={login.email} onChange={handleLoginClick} name="email" placeholder="Email Address" required />
          <input type="password" value={login.password} onChange={handleLoginClick} name="password" placeholder="Enter Password" required />
          <a href="/forgot-password" className="forgot-password">Forgot Your Password?</a>
          <button  type="submit">Login</button>
        </form>
      </div>
      
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To stay connected with us, please login with your personal info</p>
            <button className="ghost" onClick={() => setIsSignUp(false)}>Login</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start your journey with us</p>
            <button className="ghost" onClick={() => setIsSignUp(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpLogin;
