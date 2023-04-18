import React ,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader";
import toast, { Toaster } from "react-hot-toast";
import { getAdminUsers } from "../../redux/actions/admin";

const Messages = () => {
    const dispatch = useDispatch();
    const { loading, users } = useSelector((state) => state.admin);

    useEffect(() => {
      dispatch(getAdminUsers());
    }, [dispatch]);

    return (
      <section className="tableClass">
        {loading === false ? (
          <main>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>

              <tbody>
                {users &&
                  users.map((i) => (
                    <tr key={i._id}>
                      <td>{i.name}</td>
                      <td>{i.role}</td>
                      <td>{i.createdAt.split("T")[0]}</td>
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

export default Messages