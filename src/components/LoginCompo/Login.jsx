import React, { useState } from 'react'
import Lottie from 'lottie-react'
import loginanim from '../../../public/animations/loginanim.json'
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import '../LoginCompo/login.css'
import { Link } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


export const Login = () => {
    // ====== variable part =====//
    const [email , setEmail]                            = useState('')
    const [emailError , setEmailError]                  = useState('')
    const [password , setPassword]                      = useState('')
    const [passwordError , setPasswrodError]            = useState('')
    const [show , setShow]                              =useState(false)

    // ====== function part=====//
    const handelEmail =  (e)=>{
        setEmail(e.target.value)
        setEmailError('')
   }
   const handelPass  = (e)=>{
    setPassword(e.target.value)
    setPasswrodError('')
   }
   const handleShow =()=>{
    setShow(!show)
   }
   // ================= main submit funtion 
   const handelSubmit = (e)=>{
    e.preventDefault()

    if(!email){
            setEmailError('enter your email')
    }
    if(!password){
        setPasswrodError('Enater your password')
    }
    else{
        
        toast.success('Login successfull!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
            
    }
  }

  return (
    <div>
        <div className="container">
            <div className="form flex justify-around items-center w-full h-screen bg-[#F4F7FA] ">
                <div className="animation w-[500px] ">
                <Lottie animationData={loginanim} />
                </div>
                <div className="main-form bg-gradient-to-r from-[#FF8D89]  to-[#FB71B8] py-10 px-8 rounded-lg ">
                    <h1 className="login-head text-center">Login</h1>
                    <form onSubmit={handelSubmit}>
                        <lebel>Email</lebel>
                        <br/>
                        <input onChange={handelEmail} type="email" placeholder='Enter your Email' />
                        <p className="error">{emailError} </p>
                        <br></br>
                        <lebel>Password</lebel>
                        <br/>
                        <div className="passdiv">
                            {
                                show?
                                <IoMdEye onClick={handleShow} className='eyeIcon'/>
                                :
                                <IoEyeOff onClick={handleShow} className='eyeIcon'/>
                            }
                          
                          <input onChange={handelPass} type={show?'text' :'password'} placeholder='Enter your password' />
                        </div>
                        <p className="text-right">Forgotten password?</p>
                        <p className='error'>{passwordError} </p>
                        
                        <button type='submit' className="login-Button">Login</button>
                        <p>Don't have any account? <Link to="/signuppage" className="text-lg font-poppins font-bold " >SignUp</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
