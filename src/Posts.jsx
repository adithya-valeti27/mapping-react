import React from "react";
import { useState, useEffect } from "react";

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setError(false);

      try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setLoading(false);
          setPosts(data);
        }
      } catch (error) {
        setLoading(false);
        setError(true);
        setPosts();
        console.error("error fetching data", res);
      }
    }

    getData();
  }, []);

  return (
    <div>
      {loading ? <p>Loading....</p> : null}

      <ol>
        {posts.map((unique) => (
          <li key={unique.id}>{unique.title}</li>
        ))}
      </ol>

      {error ? <p>error</p> : null}
    </div>
  );
};

export default Posts;
