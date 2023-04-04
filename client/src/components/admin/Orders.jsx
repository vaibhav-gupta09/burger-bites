import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import {GiArmoredBoomerang} from 'react-icons/gi'

const Orders = () => {
  return (
    <section className="tableClass">
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
            <tr>
              <td>#fbhj789y9dh</td>
              <td>Processing</td>
              <td>23</td>
              <td>₹{3342}</td>
              <td>COD</td>
              <td>Vaibhav</td>
              <td>
                <Link to={`/order/${"jhdbnrj"}`}>
                  <AiOutlineEye />
                </Link>

                <button>
                  <GiArmoredBoomerang/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </section>
  );
}

export default Orders