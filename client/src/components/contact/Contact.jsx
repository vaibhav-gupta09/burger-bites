import React, { useState } from 'react';
import { motion } from "framer-motion";
import '../../styles/contact.scss';
import burger from '../../assets/smile-burger1.png';
import { useDispatch } from 'react-redux';
import { createMessage } from '../../redux/actions/message';
const Contact = () => {
  const option1 = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };

  const option2 = {
    initial: { x: "100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  
  const dispatch = useDispatch();
  const  [name, setName] = useState("");
  const  [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(name, email, message);
    dispatch(createMessage(name, email, message));
  }

  return (
    <section className="contact">
      <motion.form {...option1} transition={{ delay: 0.2 }}>
        <h1>Contact Us</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <textarea
          placeholder="Message..."
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <button type="submit" onSubmit={submitHandler}>Send</button>
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