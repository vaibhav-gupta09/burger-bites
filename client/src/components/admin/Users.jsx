import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import "../../styles/table.scss";
import dp from '../../assets/user.jpg';
const Users = () => {
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#fbhj789y9dh</td>
              <td>Vaibhav</td>
              <td>
                <img src={dp}/>
              </td>
              <td>Admin</td>
              <td>09-12-2001</td>
            </tr>
          </tbody>
        </table>
      </main>
    </section>
  );
}

export default Users