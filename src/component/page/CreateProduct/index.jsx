import axios from "axios";
import React from "react";

function Creat() {
  const [name, setName] = React.useState([]);
  const [url, setUrl] = React.useState([]);
  const [price, setPrice] = React.useState([]);
  const [desk, setDesk] = React.useState([]);
  const API = "https://680a2fc31f1a52874cdf87e5.mockapi.io/Product2";

  console.log(name, url, price, desk);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const newProduct = {
    name,
    url,
    price,
    desk,
  };

  const post = () => {
    axios.post(API, newProduct);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Название"
          required
        />
        <input
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="Url"
          required
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="Цена"
          required
        />
        <input
          onChange={(e) => setDesk(e.target.value)}
          f
          type="text"
          placeholder="Подробнее"
          required
        />

        {/* <input type="text" placeholder="URL" />
        <input type="text" placeholder="Цены" />
        <input type="text" placeholder="Подробнее" /> */}
        <button type="reset">reset</button>
        <button type="submit" onClick={() => post()}>
          add
        </button>
      </form>
    </div>
  );
}

export default Creat;
