import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { create, deleteById, getAll, getOneById, updateById, createImage } from "./controllers/planets.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();
const port = 3000;

app.use("/uploads", express.static("uploads"));

app.use(morgan("dev"));
app.use(express.json());

app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById );

app.post("/api/planets", create);

app.put("/api/planets/:id", updateById);

app.delete("/api/planets/:id", deleteById);

app.post("/api/planets/:id/image", upload.single("image"), createImage);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
