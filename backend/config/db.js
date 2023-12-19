import mysql from "mysql2"

export const sql = mysql.createConnection({
  host:"popify.mysql.database.azure.com",
  user:"popifyadmin",
  password: "admin@2023",
  database:"spotify"
});

// Open the MySQL connection
sql.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the carrental database");
});

