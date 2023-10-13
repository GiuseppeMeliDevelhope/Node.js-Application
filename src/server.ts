//This is our server
import "dotenv/config";
import app from "./app";

//process is to enter the .env file
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`[server]: Server is running on http://localhost:${port}`)
});



