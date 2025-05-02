import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "./Placeholder.css";

function Placeholder() {
  const [product, setProduct] = useState([]);

  const API = "https://680a2fc31f1a52874cdf87e5.mockapi.io/Product2";

  async function getProduct() {
    const { data } = await axios.get(API);
    setProduct(data);
    // console.log(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container">
      <div className="carts">
        {product.map((el, idx) => (
          <div className="cart" key={idx}>
            <img src={el.url} alt="" />
            <h3>{el.name}</h3>
            <h5>{el.price}</h5>
            <p>{el.desk}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Placeholder;
