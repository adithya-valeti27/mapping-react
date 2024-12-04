import React from "react";
import { useState, useEffect } from "react";

const Pics = () => {
  const [loading, setLoading] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setError(false);

      const url = "https://jsonplaceholder.typicode.com/photos";
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setPictures(data);
      } else {
        setError(true);
        setPictures([]);
        console.error("error fetching data ", res);
      }
    }
    getData();
    setLoading(false);
    setError(false);
  }, []);

  return (
    <div>
      {loading ? <p>Loading....</p> : null}

      <ol>
        {pictures.map((photos) => (
          <li key={photos.id}>{photos.title}</li>
        ))}
      </ol>
      {error ? <p>ERROR</p> : null}
    </div>
  );
};

export default Pics;
