import { useState, useEffect, useRef } from "react";
import PostService from "../API/PostService";


const LoginForm = () => {
  const login = useRef('')
  const password = useRef('')

  

  useEffect(() => {
    const users = PostService.getUsersAll()
    console.log(users)
  },[])
  return (
    <div>
        <input lo
      
    </div>
  );
    } 
export default LoginForm