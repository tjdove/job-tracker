import { useState, useEffect } from "react";
import axios from "axios";

import "./index.css";

function App() {
  useEffect(() => {
    (async () => {
      const result = await axios
        .get("/api/users")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(result);
    })();
  }, []);

  return (
    <>
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

      <div>
        <div className="w-96 bg-white shadow rounded">TheTest</div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
