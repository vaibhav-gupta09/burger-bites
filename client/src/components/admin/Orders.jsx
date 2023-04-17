import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import {GiArmoredBoomerang} from 'react-icons/gi'
import { getAdminOrders } from '../../redux/actions/admin';
import { useDispatch, useSelector } from "react-redux";
import Loader from '../layout/Loader';

const Orders = () => {
  const dispatch = useDispatch();
  const { loading, orders } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAdminOrders());
  }, [dispatch]);
  return (
    <section className="tableClass">
      {loading === false ? (
        <main>
          <table>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Status Id</th>
                <th>Item Qty</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>User</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders &&
                orders.map((i) => (
                  <tr key={i._id}>
                    <td>#{i._id}</td>
                    <td>{i.orderStatus}</td>
                    <td>
                      {i.orderItems.cheeseBurger.quantity +
                        i.orderItems.asianFusionBurger.quantity +
                        i.orderItems.greekVeggieBurger.quantity}
                    </td>
                    <td>₹{i.totalAmount}</td>
                    <td>{i.paymentMethod}</td>
                    <td>{i.user.name}</td>
                    <td>
                      <Link to={`/order/${i._id}`}>
                        <AiOutlineEye />
                      </Link>

                      <button>
                        <GiArmoredBoomerang />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default Orders