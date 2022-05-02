const express =  require('express');
const app = express();
const port = 3000; //localhost:3000


// localhost:3000
app.get('/', (req, res) => {
    res.send("Hola a todos mis explorers")
})

//localhost:300/launchx
app.get('/launchx', (req, res) => {
    res.send("Bienvenidos a launchX")
})


app.listen(port, () => {
    console.log("Server Listo!")
})


