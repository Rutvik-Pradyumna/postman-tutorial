const data=require('../data/postman-data');

let getAllTasks = function(req,res){
    res.status(200).json({data});
}

let getSingleTask = function(req,res){
    let {id}=req.params;
    let index=data.findIndex(function(eachItem){
        if(eachItem.id===Number(id)){
            return true;
        }
        else{
            return false;
        }
    });
    if(index===-1){
        res.status(404).json({msg : "User not found"});
        return;
    }
    res.status(200).json(data[index]);
}

let updateTask = function(req,res){
    let {id}=req.params;
    let updatedData=req.body;
    let index=data.findIndex(function(eachItem){
        if(eachItem.id===Number(id)){
            return true;
        }
        else{
            return false;
        }
    });
    if(index===-1){
        res.status(404).json({msg : "User not found"});
        return;
    }
    data[index]=updatedData;
    res.status(200).json({data});
}

let deleteTask = function(req,res){
    let {id}=req.params;
    let index=data.findIndex(function(eachItem){
        if(eachItem.id===Number(id)){
            return true;
        }
        else{
            return false;
        }
    });
    if(index===-1){
        res.status(404).json({msg : "User not found"});
        return;
    }
    data.splice(index,1);
    res.status(200).json({data});
}

let createTask = function(req,res){
    let inputData=req.body;
    data.push(inputData);
    res.status(200).json({data});
}



module.exports={
    getAllTasks,getSingleTask,updateTask,createTask,deleteTask
};