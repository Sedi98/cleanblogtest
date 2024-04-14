const pool = require("../pool");




// Connect to the PostgreSQL database


// Insert data into the database
async function createData(title, message, id) {
    const queryText = "INSERT INTO blogs (title, message, user_id) VALUES ($1, $2, $3)";
    const values = [title, message, id];
  
    try {
      const result = await pool.query(queryText, values);
      console.log("Data inserted");
      return result;
    } catch (error) {
      console.error("Error inserting data:", error.stack);
      throw error;
    }
  }

// Read data from the database
async function readData() {
    const queryText = "SELECT * FROM blogs";
  
    try {
      const { rows } = await pool.query(queryText);
      return rows;
    } catch (error) {
      console.error("Error reading data:", error);
      throw error;
    }
  }




// Update data in the database
async function updateData(newTitle, newMessage, id) {
  try {
    const query = `UPDATE blogs SET title = $1, message = $2 WHERE id = $3`;
    const values = [newTitle, newMessage, id];
    const result = await client.query(query, values);
    console.log("Data updated:", result.rowCount);
  } catch (err) {
    console.error("Error updating data:", err.stack);
    throw err;
  }
}

// Delete data from the database
async function deleteData(id) {
  try {
    const query = `DELETE FROM blogs WHERE id = $1`;
    const values = [id];
    const result = await client.query(query, values);
    console.log("Data deleted:", result.rowCount);
  } catch (err) {
    console.error("Error deleting data:", err.stack);
    throw err;
  }
}




// Export functions
module.exports = {
 
  createData,
  readData,
  updateData,
  deleteData,
 
};
