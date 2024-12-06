import React from "react";
import { useState, useEffect } from "react";

const Todos = () => {
  const [loading, setLoading] = useState(false);
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setLoading(false);

      try {
        const url = "https://jsonplaceholder.typicode.com/tod";
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setLoading(false);
          setTodo(data);
        } else {
          setLoading(false);
          setError(true);
          console.error("Error fetching data", res);
        }
      } catch (error) {
        setLoading(false);
        setError(true);
        setTodo([]);
      }
    }

    getData();
  }, []);
  return (
    <div>
      {loading ? (
        <p style={{ fontSize: "100px", color: "blue" }}>Loading..</p>
      ) : null}

      <ol>
        {todo.map((unq) => (
          <li key={unq.id}>{unq.title}</li>
        ))}
      </ol>
      {error ? <h1 style={{ fontSize: "80px", color: "red" }}>Error</h1> : null}
    </div>
  );
};

export default Todos;
