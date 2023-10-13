import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2";

import "dotenv/config";

import { user } from "./src/db/schema";

//console.log(process.env);
// create the connection
const connection = mysql.createConnection({
  host: process.env.DB_LOCAL_HOST,
  user: process.env.DB_LOCAL_USERNAME,
  password: process.env.DB_LOCAL_PASSWORD,
  database: process.env.DB_LOCAL_DATABASE,
});
//Connection
const db = drizzle(connection);

const runQuery = async () => {
  const result = await db.insert(user).values({
    firstName: "Jackson1",
    lastName: "Jackson1",
  });
  console.log(JSON.stringify(result));
};

runQuery();
