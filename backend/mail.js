require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject();
      }
      resolve(token);
    });
  });
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  return mailTransporter;
};

const sendMail = async (email, teacher, type) => {
  let details = {
    from: "hardik.garg@spit.ac.in",
    to: email,
    subject: "Testing for WeTrack",
    text: `We have sent you this mail to inform you that ${teacher} has requested your permission for a ${type} leave.
        
        Site Link: https://we-track.spit.ac.in`,
  };
  //   console.log("email= ", email);
  let mailTransporter = await createTransporter();
  mailTransporter.sendMail(details, (err) => {
    if (err) console.log(err);
    else {
      console.log(`email has been sent to ${email}`);
    }
  });
};

module.exports = sendMail;
