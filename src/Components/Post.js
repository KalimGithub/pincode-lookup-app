import React, { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
const Post = () => {
  const [data, setData] = useState({});
  const [postOffice, setPostOffice] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(false);

  const { pincode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setData(data[0]);
        setPostOffice(data[0].PostOffice);
        loadingOff(500);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // loading off
  function loadingOff() {
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }

  // filter functionalities
  function handleChange(e) {
    setFilterText(e.target.value);
  }

  return (
    <div className="post">
      <p>
        <span>Pincode: {pincode}</span>
      </p>
      <p>
        <span>Mesage: </span>
        {data.Message}
      </p>
      <span id="glass">
        <FaMagnifyingGlass />
      </span>
      <input
        type="text"
        placeholder="Filter"
        id="filter-input"
        value={filterText}
        onChange={handleChange}
      />
      <button id="btn" onClick={() => navigate("/")}>
        Back
      </button>
      {loading && (
        <div className="loading">
          Loading...<span id="loader"></span>
        </div>
      )}
      <div className="container">
        {!loading &&
          postOffice.map((item, index) => {
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
};

export default Post;
