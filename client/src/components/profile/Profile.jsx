import React from 'react'
import '../../styles/profile.scss'
import {motion} from "framer-motion"
import user from "../../assets/user.jpg"
import {Link} from "react-router-dom"
import '../../styles/profile.scss'
const Profile = () => {
  const options = {
    initial: { y: "-100%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  };
  return (
    <section className="profile">
      <main>
        <motion.img src={user} alt="user" {...options} />
        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          Vaibhav
        </motion.h5>
        <motion.div {...options} transition={{ delay: 0.5 }}>
          <Link to="/admin/dashboard" style={{borderRadius:0, backgroundColor:"rgb(40, 40, 40)"}}> DashBoard </Link>
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <Link to="/myorders"> Orders </Link>
        </motion.div>

        <motion.button
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Logout
        </motion.button>
      </main>
    </section>
  );
}

export default Profile