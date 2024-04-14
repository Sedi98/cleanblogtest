const express = require("express");
const {
  createData,
  readData,

} = require("./models/postgre"); // Import createData and readData functions

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

// Route to render index view with data fetched from the database
app.get("/", (req, res) => {
    readData() // This will fetch data from your database
      .then((data) => {
        res.render("index", { blogs: data }); // Render your HTML page with the retrieved data
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error fetching data");
      });
  });
  

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// Route to return fetched data as JSON
app.get("/json", (req, res) => {
  readData()
    .then((data) => {
      res.json(data); // Send fetched data as JSON response
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Error fetching data" }); // Send error message as JSON response
    });
});

// Other routes...

app.post("/blogger", async (req, res) => {
  const { title, message } = req.body; // Destructure title and message from request body
  
 createData(title,message,1);
  res.redirect('/')
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
