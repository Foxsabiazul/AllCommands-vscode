import express from 'express'
import { getProduto, getUpdateProduto, getAddProduto, getDeleteProduto } from '../controllers/userController.js'

const router = express.Router();

router.get("/", getProduto);
router.get("/",getUpdateProduto);
router.get("/", getAddProduto);
router.get("/", getDeleteProduto);
router.get("/", getProduto);


export default router;