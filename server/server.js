const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'matiasferrari96@gmail.com',
    pass: process.env.PASSWORD, 
  },
});

app.post('/send-email', (req, res) => {
  const { firstName, email, message } = req.body;

  const mailOptions = {
    from: 'matiasferrari96@gmail.com', 
    to: email, 
    subject: message,
    text: `Nombre: ${firstName}\nEmail: ${email}\nMensaje: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado:', info.response);
      res.status(200).send('Correo enviado exitosamente');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
