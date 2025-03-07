import mongoose, { Schema, Document } from "mongoose";

export interface IItem extends Document {
    name: string;
    description: string;
    price: number;
}

const ItemSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true }
    },
    { timestamps: true }
);

export const Item = mongoose.model<IItem>("Item", ItemSchema);
