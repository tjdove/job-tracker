import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Buy Now</button> */}
            <button
              className="btn btn-primary"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
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
