require("dotenv").config();
const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "login",
    user: process.env.email,
    pass: process.env.password,
  },
});

const sendMail = async (email, teacher, type) => {
  let details = {
    from: "hardik.garg@spit.ac.in",
    to: email,
    subject: "Testing for WeTrack",
    text: `We have sent you this mail to inform you that ${teacher} has requested your permission for a ${type} leave.
        
        Site Link: https://we-track.spit.ac.in`,
  };
  //   console.log("email= ", email);
  mailTransporter.sendMail(details, (err) => {
    if (err) console.log(err);
    else {
      console.log(`email has been sent to ${email}`);
    }
  });
};

module.exports = sendMail;
