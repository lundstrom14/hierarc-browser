const express = require('express')


const app = express()
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    absolutePath = __dirname + "/index.html";
    res.sendFile(absolutePath);
})

app.listen(port, () => {
    console.log(`Browser app listening at http://localhost:${port}`)
})


app.use("/public", express.static(__dirname + "/public"));