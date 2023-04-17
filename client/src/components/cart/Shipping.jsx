import React, { useState } from 'react'
import '../../styles/shipping.scss'
import {Country, State} from 'country-state-city'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
  const {shippingInfo} = useSelector((state) => state.cart)
  const [hno, setHNo] = useState(shippingInfo.hno);
  const [city, setCity] = useState(shippingInfo.city);
  const [country, setCountry] = useState(shippingInfo.country);
  const [state, setState] = useState(shippingInfo.state);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [pinCode, setPincode] = useState(shippingInfo.pinCode);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch({
      type: "addShippingInfo",
      payload: {
        hno,
        city,
        country,
        state,
        phoneNo,
        pinCode,
      },
    });
    
    localStorage.setItem(
      "shippingInfo",
      JSON.stringify({
        hno,
        city,
        country,
        state,
        phoneNo,
        pinCode,
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
              value={hno}
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
              value={pinCode}
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