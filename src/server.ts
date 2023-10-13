import express from "express";
import "express-async-errors";

const app = express();


app.get("/", (request,response) => {
  response.send("This is the Space Facts Api!");
})

const port = 3000;

app.listen(port, () => {
    console.log(`[server]: Server is running on http://localhost:${port}`)
});

