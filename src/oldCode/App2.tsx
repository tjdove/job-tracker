import { useState, useEffect } from "react";
import axios from "axios";

import "./index.css";

let pageData;
function setData(data) {
  pageData = data;
  console.log(data);
}

function App() {
  useEffect(() => {
    (async () => {
      const result = await axios
        .get("/api/users")
        .then((res) => {
          //console.log(res.data);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(result);
    })();
  }, []);

  return (
    <>
      <div>
        {pageData.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        ))}
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Test</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
