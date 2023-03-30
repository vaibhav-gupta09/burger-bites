import React from 'react'
import '../../styles/menu.scss'
import MenuCard from './MenuCard'
import burger1 from '../../assets/burger1.png'
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {

  const addToCartHandler = (itemNum)=>{

  }
  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={120}
          title={"Cheese Burger"}
          handler={addToCartHandler}
          customDelay={0.1}
        ></MenuCard>

        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={180}
          title={"Asian Fusion Burger"}
          handler={addToCartHandler}
          customDelay={0.4}
        ></MenuCard>

        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={250}
          title={"Greek Veggie Burger"}
          handler={addToCartHandler}
          customDelay={0.7}
        ></MenuCard>
      </div>
    </section>
  );
}

export default Menu