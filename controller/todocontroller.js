const todoSchema = require('../model/todomodel');


async function addTodo(req, res) {
    try {
        await todoSchema.create(req.body);
        res.status(200).json({success: true,message:'Todo added successfully'});
    } catch (error) {
        res.status(404).json({message: error.message,success: false});
    }
}

async function getTodo(req,res) {
   try {
        const result = await todoSchema.find({});
        if(result.length == 0) {
            res.status(200).json({message:'No Todo',success:true});
        }else{
            res.status(200).json({success:true,data:result});
            console.log('Todos in DB: '+result.length);
        }
   } catch (error) {
       res.status(404).json({message: error.message,success: false});
   }
}

async function updateTodo(req, res){
    try {
        const id = req.params.id;
        const {title, description,deadline,isCompleted} = req.body;
        if(id == null){
            res.status(201).json({success: false,message:'Todo does not exist'});
            return;
        }
        await todoSchema.findByIdAndUpdate(
            id,{
                title:title, 
                description:description,
                deadline:deadline,
                isCompleted:isCompleted
            });
            res.status(201).json({success:true,message:'Todo Updated Successfully'});
    } catch (error) {
        res.status(404).json({message: error.message,success:false})
    }
}

async function deleteTodo(req, res) {
    try {
        const id = req.params.id
        if(id == null){
            res.status(201).json({success: false,message:'Todo does not exist'});
            return;
        }
        await todoSchema.findByIdAndDelete(id);
        res.status(200).json({success:true,message:'Todo deleted successfully'});
    } catch (error) {
      res.status(404).json({message: error.message,success:false});  
    }
}

module.exports = {addTodo,getTodo,updateTodo,deleteTodo};