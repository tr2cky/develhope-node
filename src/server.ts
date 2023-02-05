import express from "express";
import "express-async-errors";
import Joi from "joi";
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

const planetSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
});

app.post("/api/planets", (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  const validatedNewPlanet = planetSchema.validate(newPlanet);
  if (validatedNewPlanet.error) {
    res
      .status(400)
      .json({ message: validatedNewPlanet.error.details[0].message });
    return;
  }

  planets = [...planets, newPlanet];

  console.log(planets);

  res.status(201).json({ message: "Planet added successfully" });
});

app.put("/api/planets/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;
  const validatedNewPlanet = planetSchema.validate({ id, name });
  if (validatedNewPlanet.error) {
    res
      .status(400)
      .json({ message: validatedNewPlanet.error.details[0].message });
    return;
  }
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));

  res.status(200).json({ message: "Planet updated successfully" });

  console.log(planets);
});

app.delete("/api/planets/:id", (req, res) => {
  const id = Number(req.params.id);
  planets = planets.filter((p) => p.id !== id);
  res.status(200).json({ message: "Planet deleted successfully" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
