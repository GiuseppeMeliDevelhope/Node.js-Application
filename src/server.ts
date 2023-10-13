//This is our server

import app from "./app";

const port = 3000;

app.listen(port, () => {
    console.log(`[server]: Server is running on http://localhost:${port}`)
});

