import express from 'express';
import { getMovie, addMovie, updateMovie, deleteMovie } from '../controllers/userController.js';

const router = express.Router();

router.get("/", getMovie);
router.post("/", addMovie);
router.put("/", updateMovie);
router.delete("/", deleteMovie);

export default router;
