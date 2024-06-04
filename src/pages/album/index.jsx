import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.css";

const index = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      console.log(res.data.slice(0, 20));
      setPhotos(res.data.slice(0, 20));
    });
  }, []);

  return (
    <>
      <div className="photos">
        <h2>Album</h2>
        <div className="photos__body">
          {photos.map((item, index) => (
            <div className="photos__card" key={index}>
              <img className="photos__img" src={item.url} alt="title" />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
