
import mongoose from "mongoose";

const { Schema } = mongoose;

//Creating new product schema:
const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
            required: true,
        },
//Relation with the user:
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Product", productSchema);
