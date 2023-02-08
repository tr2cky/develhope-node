import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { create, deleteById, getAll, getOneById, updateById } from "./controllers/planets.js";

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

app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById );

app.post("/api/planets", create);

app.put("/api/planets/:id", updateById);

app.delete("/api/planets/:id", deleteById);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
