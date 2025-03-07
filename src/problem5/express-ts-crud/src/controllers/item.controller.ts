import { Request, Response, RequestHandler } from "express";
import { createItem, listItems, getItemById, updateItem, deleteItem } from "../services/item.service";

export const createItemHandler = async (req: Request, res: Response) => {
    try {
        const item = await createItem(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ error: "Cannot create item" });
    }
};

export const listItemsHandler = async (req: Request, res: Response) => {
    try {
        const items = await listItems(req.query);
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: "Cannot fetch items" });
    }
};

export const getItemHandler: RequestHandler = async (req, res) => {
    try {
        const item = await getItemById(req.params.id);
        if (!item) {
            res.status(404).json({ error: "Item not found" });
            return;
        }
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: "Cannot fetch item" });
    }
};

export const updateItemHandler: RequestHandler = async (req, res) => {
    try {
        const item = await updateItem(req.params.id, req.body);
        if (!item) {
            res.status(404).json({ error: "Item not found" });
            return;
        }
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: "Cannot update item" });
    }
};

export const deleteItemHandler : RequestHandler = async (req, res) => {
    try {
        const item = await deleteItem(req.params.id);
        if (!item) {
            res.status(404).json({ error: "Item not found" });
            return;
        }
        res.json({ message: "Item deleted successfully" });
        return;
    } catch (error) {
        res.status(500).json({ error: "Cannot delete item" });
    }
};
