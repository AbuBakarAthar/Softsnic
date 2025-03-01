import sendEmail from "../mail/contactMail.js";
import contactModel from "../models/contactModel.js";

const contactController = (req, resp) => {
  const { names, email, message } = req.body.formData;
  console.log(req.body.formData)
  if (!names || !email || !message) {
    return resp.status(400).json({
      success: false,
      message: "All Field is Required",
    });
  }
  const saveContact = contactModel.create({ names, email, message });
  if (!saveContact) {
    return resp.status(400).json({
      success: false,
      message: "Message is not saved in Database",
    });
  }
  sendEmail({fromUser:email, userMessage: message });
  resp.status(200).json({
    success: true,
    message: "Message is  saved in Database Successfully",
  });
};

export default contactController;
