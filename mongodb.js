// CRUD create read update delete

const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
const ObjectID=mongodb.ObjectID


const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'
MongoClient.connect(connectionURL,{ useNewUrlParser:true},(error,client)=>{
    if(error){
         return console.log('unable to connect to db')
    }

    //Database object for referencing throughout database.No need to create automatically created
    const db=client.db(databaseName)

//    db.collection('users').deleteOne({
//        name:'TRIG'
//     }).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })
db.collection('tasks').deleteMany({completed:true}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

  

})

//===================INSERTING DATA TO DATABASE====================

    // db.collection('users').insertOne({
    //     name:'Marshel',
    //     age:22
    // },(error,result)=>{
    //     if(error)
    //     {
    //         return console.log('unable to insert users')
    //     }
    //     console.log(result.ops)

    // })
    // db.collection('users').insertMany([
    //     {
    //         name:'Andrew',
    //         age:27
    //     },{
    //         name:'Mark',
    //         age:28
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('unable to inser to users')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'Market',
    //         completed :true
    //     },
    //     {
    //         description:'Exercise',
    //         completed :false
    //     },
    //     {
    //         description:'Coding',
    //         completed :true
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Cannot inser to tasks!')
    //     }
    //     console.log(result.ops)
    // })





    //=================READ DATA FROM DATABASE=======================


    // db.collection('users').findOne({_id:new ObjectID("5f59ad7b8b6fd63f780c0e84")},(error,user)=>{
    //     if(error){
    //         return console.log('unable to fetch')
    //     }
    //     console.log(user)

    // })
    // db.collection('users').find({age:22}).toArray((error,users)=>{
    //     console.log(users)
    // })
    // db.collection('users').find({age:22}).count((error,count)=>{
    //     console.log(count)
    // })
    // db.collection('tasks').findOne({_id:new ObjectID("5f59a9ed053ed8070c5c2393")},(error,task)=>{
    //     if(error){
    //         return console.log('unable to fetch task')
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed:true}).toArray((error,task)=>{
    //     console.log(task)
    // })



       
    //===============UPDATE DATA FROM DATABASE====================
    // db.collection('users').updateOne({
    //     _id:new ObjectID("5f59a6488fc7ed34bc3a6fb9")
    // },{
    //     $inc:{
    //         age:1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    

