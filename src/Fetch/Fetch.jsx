// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export default function Fetch() {
//   const [utilisateurs, setUtilisateurs] = useState([]);
//   useEffect(() => {
//     // fetch('https://jsonplaceholder.typicode.com/users')
//     // .then((res)=>{return res.json()})
//     // .then((data)=>setUtilisateurs(data))
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => setUtilisateurs(res.data));
//   }, []);

//   return (
//     <div>
//       <h2>Liste des utilisateurs {utilisateurs.length}</h2>
//       {utilisateurs.map((u, index) => {
//         return (
//           <p  key={index}>
//             {u.id}, {u.name}
//           </p>
//         );
//       })}
//     </div>
//   );
// }

// _______________________________

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Fetch() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  const fetchPostsForUser = (userId) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => setPosts(res.data));
  };

  const handleClick = (userId) => {
    setActiveUser(userId);
    fetchPostsForUser(userId);
  };

  return (
    <div>
      <h2>Liste des utilisateurs {users.length}</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <button onClick={() => handleClick(user.id)}>Show Posts</button>
          {activeUser === user.id && (
            <ul>
              {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}

