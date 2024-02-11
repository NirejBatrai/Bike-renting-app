const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5009;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({
  name,
  email,
  date,
  time,
  message,
  bikeName,
  description,
  imageSrc,
}) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "purampandey1234@gmail.com",
        pass: "My_password",
      },
      debug: true,
    });

    const mail_configs = {
      from: email,
      to: "purampandey1234@gmail.com",
      subject: "Bike Booking Confirmation",
      text: `
      Bike Booking Details:
      
      Customer Name: ${name}
      Customer Email: ${email}
      Date: ${date}
      Time: ${time}
      Message: ${message}
      Bike Name:${bikeName}
      Description of Bike:${description}
      Bike Image:${imageSrc}
    `,
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error occured` });
      }
      return resolve({ message: "Email sent Successfully" });
    });
  });
}

app.get("/", (req, res) => {
  const { name, email, message, date, time, bikeName, description, imageSrc } =
    req.query;
  sendEmail({
    name,
    email,
    message,
    date,
    time,
    bikeName,
    description,
    imageSrc,
  })
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`nodeemailer is listeing at http://localhost:${port}`);
});
