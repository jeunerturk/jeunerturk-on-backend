const express = require('express');
const app = express(); 
const PORT = 8080;

app.listen(PORT, () => console.log(`its alive on http://localhost:${PORT}`));


 app.use(express.json())

app.get("/cars", (req, res) => {
  res.status(200).send({
    car: "🚗",
    year: "2023"
  });
});


app.post("/cars/:year", (req, res) => {
    const {year}  = req.params
    const {car} = req.body

    if (!car) {
        res.status(418).send({message: "We need a car emoji!"})
    }

    res.send({
        car: ` Congratulations! Here is what you post: A car emoji of: ${car} and year of ${year} `
    })
});