import express from "express";
import mongoose from "mongoose";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("Public"));

mongoose.connect("mongodb://127.0.0.1:27017/todolistDB");

const itemSchema = new mongoose.Schema({
    item: String
});

const Item = mongoose.model("Item", itemSchema);

Item.find().then(data => {
    if(!data){
        console.log("NO DATA!!!!!!");
    } else {
        data.forEach(item => {
            console.log(item.item);
        });
    }
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    const userInput = req.body.jordan;
    const newItem = new Item({item: userInput});
    newItem.save();
    res.redirect("/");

    console.log(`req.body.jordan = ${req.body.jordan}`);
    console.log("Item Successfully saved...");
    // const items = Item.find();
   
});

app.listen(PORT, () => {
    console.log(`Server hosted on port ${PORT}`);
});


