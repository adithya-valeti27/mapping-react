import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Comments = () => {
  const [loading, setLoading] = useState(false);
  const [comm, setComm] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setError(false);
      try {
        const url = "https://jsonplaceholder.typicode.com/comments";
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
            setLoading(false)
          setComm(data);
          
        }
      } catch (error) {
        setLoading(false)
        setError(true);
        setComm([]);

      }
    }
    setLoading(false);
    setError(false);
    getData();
  },[]);
  return (
    <div>
      {loading ? <p>Loading...</p> : null}

      <ol>
        {comm.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ol>
      {error ? <h1>Error</h1> : null}
    </div>
  );
};

export default Comments;
