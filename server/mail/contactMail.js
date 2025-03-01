import nodemailer from "nodemailer";
import dotenv from 'dotenv'

dotenv.config({path:'./config/.env'});
const EMAIL_USER=process.env.EMAIL_USER
const EMAIL_PASS=process.env.EMAIL_PASS
const sendEmail = async ({ fromUser, userMessage }) => {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:EMAIL_USER,
        pass:EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: fromUser,
      to:EMAIL_USER,
      subject:`${fromUser} Contact Us`,
      html:`<h4>The User Which Send Message its Email is : ${fromUser} </h4><br/>
      The Message of the User Given Below<br/>
      <p>${userMessage}</p>`,
    };
    const info = await transport.sendMail(mailOptions);
    console.log("Email is Sending", info.messageId);
  } catch (error) {
    console.log("Email Sending Error", error);
  }
};

export default sendEmail;
