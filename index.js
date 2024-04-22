const express = require("express");
const port = 3000;
const app = express();
const { getData } = require("./firebase/firestoredb.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/products", async (req, res) => {
  try {
    // res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const firestoreData = await getData();
    res.status(200).json(firestoreData);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
