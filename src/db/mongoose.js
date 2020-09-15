// cmd:C:/Users/Hp/mongodb/bin/mongod.exe --dbpath=C:/Users/Hp/mongodb-data
const mongoose=require('mongoose')
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})




