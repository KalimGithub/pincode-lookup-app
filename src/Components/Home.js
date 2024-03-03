import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [pincode, setPincode] = useState("");


function handleError(){
  alert("Enter valid Pincode");
}


  return (
    <div className="home">
      <h2>Enter Pincode</h2>
      <input
        type="text"
        placeholder="Pincode"
        name="pincode"
        id="pincode"
        value={pincode}
        onChange={(e) => {
          setPincode(e.target.value);
        }}
      />
      <br />
      {pincode ? (
        <NavLink  to="./post">
          <button id="btn">
          Lookup
        </button>
        </NavLink>
      ) : (
        <button id="btn" onClick={handleError}>
          Lookup
        </button>
      )}
    </div>
  );
};

export default Home;

