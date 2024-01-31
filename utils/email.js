const nodemailer=require('nodemailer')
const sendEmail= async options=>{
    const transporter=nodemailer.createTransport({
        service:"gmail",
        host:"smtp.gmail.com",
        //process.env.EMAIL_HOST,
        port:587,
        secure:false,
        //process.env.EMAIL_PORT,
        auth:{
            user:"hemanthharsha27@gmail.com",
            //process.env.EMAIL_USER,
            pass:""
            //process.env.EMAIL_PASSWORD
        }
    })
    const mailOptions={
        from:'Gagan <gagand1902@gmail.com>',
        to:options.email,
        subject:options.subject,
        text:options.message
    }
    await transporter.sendMail(mailOptions)
}
module.exports=sendEmail