import React, { useState } from 'react'
import '../../styles/shipping.scss'
import {Country, State} from 'country-state-city'
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
  const[hNo, setHNo] = useState("");
  const[city, setCity] = useState("");
  const[country, setCountry] = useState("");
  const[state, setState] = useState("");
  const[phoneNo, setPhoneNo] = useState("");
  const[pincode, setPincode] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch({
      type: "addShippingInfo",
      payload: {
        hNo,
        city,
        country,
        state,
        phoneNo,
        pincode,
      },
    });
    
    localStorage.setItem(
      "shippingInfo",
      JSON.stringify({
        hNo,
        city,
        country,
        state,
        phoneNo,
        pincode,
      })
    );
    navigate("/confirmorder");
  }

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>House No</label>
            <input
              required
              type="text"
              placeholder="Enter your house no."
              value={hNo}
              onChange={(e) => {
                setHNo(e.target.value);
              }}
            />
          </div>
          <div>
            <label>City</label>
            <input
             required
              type="text"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>

          <div>
            <label>Country</label>
            <select
              required
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>

          
          {country && <div>
            <label>State</label>
             <select
              required
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            >
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry(country).map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>}

          <div>
            <label>Pin Code</label>
            <input
             required
              type="number"
              placeholder="Enter your pin code"
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);
              }}
            />
          </div>

          <div>
            <label>Mobile No</label>
            <input
             required
              type="number"
              placeholder="Enter your mobile no."
              value={phoneNo}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            />
          </div>

          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
}

export default Shipping