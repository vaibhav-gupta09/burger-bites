import React, { useEffect } from 'react'
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'
import '../../styles/cart.scss'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector } from "react-redux";

const CartItem = ({value, title, img, increment, decrement})=>(
  <div className='cartItem'>
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item"/>
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type='number' readOnly value={value}/>
      <button onClick={increment}>+</button>
    </div>
  </div>
)

const Cart = () => {
  
 const {
   cartItems: {
     cheeseBurger: { quantity: cheeseBurger },
     asianFusionBurger: { quantity: asianFusionBurger },
     greekVeggieBurger: { quantity: greekVeggieBurger },
   },
   subTotal,
   tax,
   shippingCharges,
   total,
 } = useSelector((state) => state.cart);
  
 const dispatch = useDispatch()

 const {cartItems:orderItems}= useSelector((state) => state.cart);

  const increment = (item)=>{
    switch(item){
      case 1: 
        dispatch({ type: "cheeseBurgerIncreament" });
        break;
      case 2: 
        dispatch({ type: "asianFusionBurgerIncreament" });
        break;
      case 3: 
        dispatch({ type: "greekVeggieBurgerIncreament" });
        break;
      default:
        dispatch({ type: "cheeseBurgerIncreament" });
        break;  
    }
    dispatch({ type: "calculatePrice" });
  };

  const decrement = (item)=>{
    switch (item) {
      case 1:
        if (cheeseBurger==0) return;
        dispatch({ type: "cheeseBurgerDecreament" });
        break;
      case 2:
        if (asianFusionBurger == 0) return;
        dispatch({ type: "asianFusionBurgerDecreament" });
        break;
      case 3:
        if (greekVeggieBurger == 0) return;
        dispatch({ type: "greekVeggieBurgerDecreament" });
        break;
      default:
        if (cheeseBurger == 0) return;
        dispatch({ type: "cheeseBurgerDecreament" });
        break;
    }
    dispatch({ type: "calculatePrice" });
  };
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({subTotal, tax, shippingCharges, total})
    );
  }, [orderItems, subTotal, tax, shippingCharges, total]);

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          value={cheeseBurger}
          img={burger1}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Asian Fusion Burger"}
          value={asianFusionBurger}
          img={burger2}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Greek Veggie Burger"}
          value={greekVeggieBurger}
          img={burger3}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>
          <div>
            <h4>Total Charges</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
}


export default Cart