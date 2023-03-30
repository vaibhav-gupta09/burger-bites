import React from 'react'
import '../../styles/home.scss'
import { motion } from "framer-motion";

const Home = () => {
  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  return (
    <section className="home">
      <div>
        <motion.h1 {...options}>Burger Bites</motion.h1>
        <motion.p {...options} transition={{delay:0.2}}>Where Every Bite Counts</motion.p>
      </div>

      <a href="#menu">Explore Menu</a>
    </section>
  );
}

export default Home