import express from "express";
import {
  getDoctors,
  getDoctorById,
  createDoctors,
  updateDoctors,
  deleteDoctors,
} from "../controllers/DoctorController.js";

const router = express.Router();

router.get("/doctors", getDoctors);
router.get("/doctors/:id", getDoctorById);
router.post("/create", createDoctors);
router.patch("/update/:id", updateDoctors);
router.delete("/delete/:id", deleteDoctors);

export default router;
