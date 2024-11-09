const cluster = require('node:cluster');
const os = require("os");

const totalCPUs = os.cpus().length;

if (cluster.isPrimary) {
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }
} else {
    const express = require("express");
    const app = express();
    const PORT = 8000;

    app.get("/", (req, res) => {
        return res.json({ messae: `Hello from Express Server ${process.pid}🚀` });
    });


    app.listen(PORT, () => console.log(`Server Started At PORT:${PORT}`));
}