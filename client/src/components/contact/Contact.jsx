import React from 'react';
import { motion } from "framer-motion";
import '../../styles/contact.scss';
import burger from '../../assets/smile-burger1.png';
const Contact = () => {
  const option1 = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };

  const option2 = {
    initial: { x: "100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  return (
    <section className="contact">
      <motion.form {...option1} transition={{ delay: 0.2 }}>
        <h1>Contact Us</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message..." cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </motion.form>

      <motion.div
        className="formBorder"
        {...option2}
        transition={{ delay: 0.2 }}
      >
        <motion.div {...option2} transition={{ delay: 0.2 }}>
          <img src={burger} alt="Burger" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact