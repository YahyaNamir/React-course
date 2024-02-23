import axios from "axios";
import React, { useState } from "react";

export default function YahyaFecth() {
  const [id, setId] = useState("");
  const [post, setPost] = useState({});

  const FetchData = () => {
    axios
      //   .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setPost(res.data);
      });
  };
  return (
    <div>
      <input
        type="number"
        placeholder="Enter your id..."
        onChange={(e) => setId(e.target.value)}
        max={10}
        min={1}
      />
      <button onClick={FetchData}>Get Post</button>
      <h2>Id : {post.id}</h2>
      <h2>Name : {post.name}</h2>
      <h2>Email : {post.email}</h2>
      <h2>Phone : {post.phone}</h2>
    </div>
  );
}
