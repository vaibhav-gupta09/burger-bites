import React from 'react'
import { motion } from "framer-motion";
import me from '../../assets/chef.png'
import '../../styles/founder.scss'
const Founder = () => {
  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  return (
    <section className="founder">
      <motion.div {...options} transition={{ delay: 0.1 }}>
        <img src={me} alt="Founder" height={250} width={300}></img>
        <h3>Team Burger Bites</h3>
        <p>
          We take pride in serving our customers delicious food with a smile.
          <br />
          Get ready for a flavor explosion with our perfectly seasoned burger
          bites.
        </p>
      </motion.div>
    </section>
  );
}

export default Founder