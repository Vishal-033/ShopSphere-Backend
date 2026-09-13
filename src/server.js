// // run this file using the command: node src/server.js

const app = require("./app");

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});