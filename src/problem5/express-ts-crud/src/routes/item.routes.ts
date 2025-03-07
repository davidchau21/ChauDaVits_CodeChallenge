import express from "express";
import {
    createItemHandler,
    listItemsHandler,
    getItemHandler,
    updateItemHandler,
    deleteItemHandler
} from "../controllers/item.controller";

const router = express.Router();

router.post("/", createItemHandler);
router.get("/", listItemsHandler);
router.get("/:id", getItemHandler);
router.put("/:id", updateItemHandler);
router.delete("/:id", deleteItemHandler);

export default router;
