// cmd:C:/Users/Hp/mongodb/bin/mongod.exe --dbpath=C:/Users/Hp/mongodb-data
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})




