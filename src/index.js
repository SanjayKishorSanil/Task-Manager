const express=require('express')
require('./db/mongoose')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')
const app=express()


const port=process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port,()=>{
    console.log('server is on ',port)
})



const task=require('./models/task')
const Task = require('./models/task')
const User=require('./models/user')
const main=async()=>{
    // const task=await Task.findById('5f5f53336543d929744613d4')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user=await User.findById('5f5f51caab58d45060b5f1f4')
    await user.populate('tasks').execPopulate()
   // console.log(user.tasks)
    
}

main()
