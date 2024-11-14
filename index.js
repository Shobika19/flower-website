const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const FoodModel = require("./models/Food");

mongoose.connect("mongodb://127.0.0.1:27017/food", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

app.post("/insert", async (req, res) => {
    console.log("Insert request received:", req.body); // Log request data
    const { foodName, description } = req.body;
    const food = new FoodModel({ foodName, description });

    try {
        await food.save();
        res.status(201).send("Flower inserted");
    } catch (err) {
        console.error("Error inserting flower product:", err);
        res.status(500).send("Error flower product");
    }
});
// Read Food
app.get("/read", async (req, res) => {
    try {
        const result = await FoodModel.find({});
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error flower product");
    }
});

// Update Food
app.put("/update", async (req, res) => {
    const { newFoodName, id } = req.body;

    try {
        const updatedFood = await FoodModel.findById(id);
        if (updatedFood) {
            updatedFood.foodName = newFoodName;
            await updatedFood.save();
            res.send("Flower products updated");
        } else {
            res.status(404).send("Flower product not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating flower");
    }
});

// Delete Food
app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    console.log("Deleting flower item with ID:", id); // Log the ID

    try {
        const result = await FoodModel.findByIdAndDelete(id);
        if (result) {
            res.send("Flower product deleted");
        } else {
            res.status(404).send("Flower product not found");
        }
    } catch (err) {
        console.error("Error deleting flower product:", err);
        res.status(500).send("Error deleting flower product");
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

