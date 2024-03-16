
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader';

const Api = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const dataFetch = async () => {
    setLoader(true);
    const products = await axios.get("https://fakestoreapi.com/products");
    setData(products.data);
    console.log(products.data);
    setLoader(false);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {loader ? (
        <Loader />
      ) : (
        data.map((item) => (
          <div className="card" style={{ width: "18rem" }} key={item.id}>
            <img src={item.image} style={{ height: "200px", width: "200px" }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description.slice(0, 10)}</p>
              <Link to={`${item.id}`} className="btn btn-primary">{"$" + item.price}</Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Api;
