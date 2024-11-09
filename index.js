const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    return res.json({ messae: `Hello from Express Server ${process.pid}🚀`});
});


app.listen(PORT, () => console.log(`Server Started At PORT:${PORT}`));