import mongoose from "mongoose";
const { Schema } = mongoose;

const ExpenseSchema = new Schema(
  {
    title: {
      type: String,
    },
    amount: {
      type: Number,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true, // This will automatically add `createdAt` and `updatedAt` fields
  }
);

export default mongoose.model("Expense", ExpenseSchema);
