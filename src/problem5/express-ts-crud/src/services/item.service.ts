import { Item, IItem } from "../models/item.model";

export const createItem = async (data: IItem) => {
    return await Item.create(data);
};

import { FilterQuery } from "mongoose";

export const listItems = async (filter: Partial<IItem>) => {
    return await Item.find(filter as FilterQuery<IItem>);
};

export const getItemById = async (id: string) => {
    return await Item.findById(id);
};

export const updateItem = async (id: string, data: Partial<IItem>) => {
    return await Item.findByIdAndUpdate(id, data, { new: true });
};

export const deleteItem = async (id: string) => {
    return await Item.findByIdAndDelete(id);
};
