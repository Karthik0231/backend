import Expense from "../models/Expense.js";

//CRUD->Create, Retrieve, Update, Delete
export const createExpense = async(req,res)=>{
    try {  
        console.log('heyee');
        const {title,amount,category} = req.body;
        const newExpense = await Expense.create({
            title:title,
            amount:amount,
            category:category
        })
        res.json({
            message:"data inserted successfully",
            success:true
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            message:error,
            success:false
        })
        
    }
}

export const displayData = async(req,res)=>{
    try {
        const Expensedata = await Expense.find();
        res.json({
            message:"hurray i got data",
            success:true,
            data:Expensedata
        })
    } catch (error) {
        console.log(error)
        res.json({
            message:"Yeah i have error",
            success:false,
        })
    }
}

export const singleView=async(req,res)=>{
    try {
        const id = req.params.sdm;
        const user = await Expense.findById(id);
        res.json({
            success:true,
            message:"I got data",
            data: user
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:"I got error",
        })
    }
}

export const deleteData =async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteData= await Expense.findByIdAndDelete(id);
        res.json({
            success:true,
            message:"Data deleted"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error
        })
    }
}

export const updateData=async(req,res)=>{
    try {
        const id=req.params.id;
        const {title,amount,category}=req.body
        const newData = await Expense.findByIdAndUpdate(id,req.body,{new:true});
        res.json({
            success:true,
            message:"data updated successfully",
            data:newData
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error,
        })
    }
}


