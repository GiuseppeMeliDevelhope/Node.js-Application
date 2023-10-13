import express from "express";
import "express-async-errors";

const app = express();

//with .get() we are specifying the route path of the express server application 
//.send is to send a message to the response body
app.get("/", (request,response) => {
  response.send("Up and running!");
})

const port = 3000;

app.listen(port, () => {
    console.log(`[server]: Server is running on http://localhost:${port}`)
});

//now you have your server running on port 3000, go look for the information of the server 
//with curl 