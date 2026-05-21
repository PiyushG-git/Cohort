import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello from the backend! using docker compose .??" },);

})

app.get("/api/data", (req, res) => {
    const data = {
        id: 1,
        name: "Sample Data",
        description: "This is some sample data from the backend.??"
    };
    res.status(200).json(data);
});

export default app;