import { Router } from "express";
import { Categories } from "../models/categories.model.js";

const router = Router()

router.post('/categories',async (req,res)=>{
    const {name}= req.body
    const categorite = await Categories.create({
        name
    })
    res.status(200).json(categorite)
})

export default router