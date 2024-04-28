import { Router } from "express";
import { addPage } from '../controllers/pgrender.controller.js'
import { getAll, addNote, deleteNote, updateNote, getUpdPage } from "../controllers/createNote.controller.js";

export const router = Router()

router.get('/', getAll)
router.get('/add', addPage)
router.get('/update/:id', getUpdPage)
router.get('/del/:id', deleteNote)

router.post('/add', addNote) 
router.post('/update/:id', updateNote)

export default router