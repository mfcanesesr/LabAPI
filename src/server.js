const http = require("http");
const database = require("./database");

require("dotenv").config();

const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {

    server.listen(PORT, async () => {
        await database._connect();
    });

}


startServer();