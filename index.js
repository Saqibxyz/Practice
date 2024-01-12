import express from "express"
const app = express();
app.use(express.static('public'));
let port = 3000;
app.get("/", (req, res) => {
    {
        res.render("index.ejs");
    }
})
app.listen(port, () => {
    console.log(" Listening on port 3000");
})