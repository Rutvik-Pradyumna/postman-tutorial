const express=require('express');
const router=express.Router();
const {getAllTasks,getSingleTask,updateTask,createTask,deleteTask}=require('../controllers/tasks.js');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTask).put(updateTask).delete(deleteTask);

module.exports=router;
