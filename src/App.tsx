import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//require("dotenv").config();

// import * as dotenv from "dotenv";
// dotenv.config();
//dotenv.config({ path: __dirname + "/.env" });
// import "dotenv/config";

// Connection to local mysql
// import { drizzle } from "drizzle-orm/mysql2";
// import mysql from "mysql2/promise";

// console.log(process.env);

// const connection = await mysql.createConnection({
//   host: "host",
//   user: "user",
//   database: "database",
// });

// DB_LOCAL_CONNECTION=mysql
// DB_LOCAL_HOST=127.0.0.1
// DB_LOCAL_PORT=3306
// DB_LOCAL_DATABASE=job_tracker
// DB_LOCAL_USERNAME=root
// DB_LOCAL_PASSWORD=whiteTable1

//const db = drizzle(connection);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
