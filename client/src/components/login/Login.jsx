import React from 'react'
import {motion} from "framer-motion"
import {FcGoogle} from "react-icons/fc"
import '../../styles/login.scss'
import { server } from '../../redux/store'
const Login = () => {
  
  const loginHandler = ()=>{
    window.open(`${server}/googlelogin`, "_self");
  };

  return (
    <section className="login">
      <motion.button initial={{ y: "100%" }} animate={{ y: 0 }}  onClick={loginHandler}>
        <p>Login with Google</p>
        <FcGoogle />
      </motion.button>
    </section>
  );
}

export default Login