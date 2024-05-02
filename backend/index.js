import express from "express";
import cors from "cors";
import DoctorRoute from "./routes/DoctorRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(DoctorRoute); //middleware

app.listen(8000, () => console.log("Server up and running..."));
