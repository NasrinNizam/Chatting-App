import React from 'react'
import { useState } from 'react'
import Lottie from 'lottie-react'
import signup from '../../../public/animations/signup.json'
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { Link } from 'react-router-dom';
import '../SignupCompo/signup.css'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

export const SignUp = () => {
    const [Name , setName]                              = useState('')
    const [NameError , setNameError]                    = useState('')
    const [email , setEmail]                            = useState('')
    const [emailError , setEmailError]                  = useState('')
    const [password , setPassword]                      = useState('')
    const [passwordError , setPasswrodError]            = useState('')
    const [confirmPassword , setConfirmPassword]        = useState('')
    const [confirmError , setConfirmError]              = useState('')
    const [show , setShow]                              = useState(false)
    const [confirmShow , setConfirmShow]                = useState(false)


    // ====== function part=====//
    const handleName =(e)=>{
        setName(e.target.value)
        setNameError('')
    }
    const handelEmail =  (e)=>{
        setEmail(e.target.value)
        setEmailError('')
   }
   const handelPass  = (e)=>{
    setPassword(e.target.value)
    setPasswrodError('')
   }
   const handelConfirm  = (e)=>{
    setConfirmPassword(e.target.value)
    setConfirmError('')
   }
   const handleShow =()=>{
    setShow(!show)
   }
   const handleConfirmShow =()=>{
    setConfirmShow(!confirmShow)
   }
   // ================= main submit funtion 
   const handelSubmit = (e)=>{
    e.preventDefault()

    if(!Name){
        setNameError('Enter your Name')
}
    if(!email){
            setEmailError('Enter your email')
    }
    if(!password){
        setPasswrodError('Enter your password')
    }
    if(!confirmPassword){
        setConfirmError('Confirm your password')
    }
    else{
        
        toast.success('SignUp successfully done!', {
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
    <>
     <div className="container">
            <div className="form flex justify-around items-center w-full h-screen bg-[#283C46] bg-opacity-70 ">
                <div className="animation w-[500px] ">
                <Lottie animationData={signup} />
                </div>
                <div className="main_form  py-5 px-8 rounded-lg bg-[#D9D9D1] ">
                    <h1 className="login-head text-center text-3xl">Sign Up</h1>
                    <form onSubmit={handelSubmit}>
                        <lebel>Full Name</lebel>
                        <br/>
                        <input onChange={handleName} type="text" placeholder='Enter your Full Name' />
                        <br/>
                        <p className="error">{NameError} </p>
                        <br/>
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
                        <p className='error'>{passwordError} </p>
                        <br/>
                        <lebel> Confirm Password</lebel>
                        <br/>
                        <div className="passdiv">
                            {
                                confirmShow?
                                <IoMdEye onClick={handleConfirmShow} className='eyeIcon'/>
                                :
                                <IoEyeOff onClick={handleConfirmShow} className='eyeIcon'/>
                            }
                          
                          <input onChange={handelConfirm} type={confirmShow?'text' :'password'} placeholder='Enter your password' />
                        </div>
                        <p className='error'>{confirmError} </p>
                        <button type='submit' className="loginButton">Sign Up</button>
                        <p>Already have an account? <Link to="/" className="text-[16px] text-[#4A6CD] font-poppins font-bold " >Login</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
