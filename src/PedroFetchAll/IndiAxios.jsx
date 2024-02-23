import axios from "axios";
import React, { useEffect, useState } from "react";

export default function IndiAxios() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://reqres.in/api/users")
  //     .then((res) => setData(res.data.data))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", {
        name: "morpheus",
        job: "leader",
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {console.log(data)}
      <h2>Axios with React</h2>

      {/* {data.map((e) => {
        return (
          <>
            <b>Id : {e.id}</b>
            <br />
            First name : {e.first_name}
            <br />
            Last name : {e.last_name}
            <br />
            Email : {e.email}
            <br />
            <br />
          </>
        );
      })} */}

      <p>
        {data.map((e) => {
          return (
            <>
              <p>{e.name}</p>
            </>
          );
        })}
      </p>
    </div>
  );
}
