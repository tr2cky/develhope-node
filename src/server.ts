import express from "express";
import "express-async-errors";
import morgan from "morgan";


const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);
});
app.get("/api/planets/:id", (req, res) => {
  const id = Number(req.params.id);
  const planet = planets.find((planet) => planet.id === id);
  res.status(200).json(planet);
});

app.post("/api/planets", (req, res) => {
    const {id, name} = req.body;
    const newPlanet = {id, name};

    planets = [...planets, newPlanet];
    
    console.log(planets);
    
    res.status(201).json({message: "Planet added successfully"});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
