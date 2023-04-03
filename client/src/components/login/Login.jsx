import React from 'react'
import {motion} from "framer-motion"
import {FcGoogle} from "react-icons/fc"
import '../../styles/login.scss'
const Login = () => {
  return (
    <section className="login">
      <motion.button initial={{ y: "100%" }} animate={{ y: 0 }}>
        <p>Login with Google</p>
        <FcGoogle />
      </motion.button>
    </section>
  );
}

export default Login