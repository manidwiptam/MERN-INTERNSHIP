import express from 'express'
import { retrieve } from '../controller/controller.js';
const router = express.Router()

router.get("/fetch", retrieve);

router.get("/send", (req, res) => {
    res.send("This is sending")
})


router.get("/update", (req, res) => {
    res.send("This is updating")
})

router.get("/delete", (req, res) => {
    res.send("This message was deleted")
})


export default router

