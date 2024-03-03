import React, { useEffect, useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

 

const Post = () => {
const [data, setData] = useState({});
const [postOffice, setPostOffice] = useState([]);
const [filterText, setFilterText] = useState('');  

useEffect(() => {
  fetch("https://api.postalpincode.in/pincode/413520")
    .then((res) => res.json())
    .then((data) => {
      setData(data[0]);
      setPostOffice(data[0].PostOffice)
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
// console.log(data);
// console.log(postOffice);

return (
  <div className='post'>
    <p><span>Pincode:</span></p>
    <p><span>Mesage: </span>{data.Message}</p>
    <span id='glass'>
      <FaMagnifyingGlass />
    </span>
    <input 
      type="text"
      placeholder="Filter"
      id="filter-input"
      value={filterText}
      onChange={(e) => {
        setFilterText(e.target.value);
      }}
    />
    <div className="container">
      {postOffice.map((item, index) => {
        return (
          <div key={index} className="item">
            <p>
              <span>Name: </span>
              {item.Name}
            </p>
            <p>
              <span>Branch Type: </span>
              {item.BranchType}
            </p>
            <p>
              <span>Delivery Status: </span>
              {item.DeliveryStatus}
            </p>
            <p>
              <span>District: </span>
              {item.District}
            </p>
            <p>
              <span>State: </span>
              {item.State}
            </p>
          </div>
        );
      })}
    </div>
  </div>
);
}

export default Post




