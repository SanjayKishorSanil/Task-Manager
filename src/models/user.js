const mongoose=require('mongoose')
const validator=require('validator')

const User=mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email invalid')
            }
        }
    },
    age:{
        type:Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be postive number')

            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password strenght weak')
            }
        }
    }
})

module.exports=User




// const me=new User({
//     name: 'mike           SANTRA',
//     age:23,
//     email:'MIKE@mail.com',
//     password:'mike1234'
    
// })

// me.save().then((me)=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('error!!',error)
// })
