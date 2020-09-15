const sgMail=require('@sendgrid/mail')


   
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to:'sanjaykmrmrpl@gmail.com',
//     from:'sanjaykmrmrpl@gmail.com',
//     subject:'this is my first mail',
//     text:' THIS IS MAIL FROM SELF'
// })
const sendWelcomeEmail=(email, name)=>{
    sgMail.send({
        to:email,
        from:'sanjaykmrmrpl@gmail.com',
        subject:'WELCOME TO TASK MANAGER',
        text:`Welcome to the app, $(name).Let me know how you get along.`
    })

}

const sendCancellatioEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'sanjaykmrmrpl@gmail.com',
        subject:'GOODBYE MAIL',
        text:`GOOD BYE i hope see back sm time soon`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancellatioEmail
}