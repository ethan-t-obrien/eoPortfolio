const server = require('./server')
const express = require('express')
var router = express.Router()
var cors = require('cors')
var nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
// const creds = require('./config');

const app = express()


const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// app.listen(port, () => {
//   console.log('We are live on port 3000api');
// });

app.get('/', (req, res) => {
  res.send('Welcome to my api');
})

app.post('/api/v1', (req,res) => {
  var data = req.body;

var smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  port: 465,
  auth: {
    user: 'ethanobrien.mahi@gmail.com',
    pass: 'ChangingLeaf96'
  }
});

var mailOptions = {
  from: data.email,
  to: 'ethanobrien.mahi@gmail.com',
  subject: 'Contact Form Message',
  html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
};

smtpTransport.sendMail(mailOptions,
(error, response) => {
  if(error) {
    res.send(error)
  }else {
    res.send('Success')
  }
  smtpTransport.close();
});

})

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})


// var transport = {
//   host: 'smtp.gmail.com',
//   port: 587,
//   // auth: {
//   //   user: creds.USER,
//   //   pass: creds.PASS
//   // }
// }

// var transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log('Server is ready to take messages')
//   }
// })

// router.post('/send', (req, res, next) => {
//   var name = req.body.name
//   var email = req.body.email
//   var message = req.body.message
//   var content = `name: ${name} \n email: ${email} \n message: ${message}`

//   var mail = {
//     from: name,
//     to: 'ethanobrien.mahi@gmail.com',
//     subject: 'New Message from Contact Form',
//     text: content
//   }

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: 'fail'
//       })
//     } else {
//       res.json({
//         status: 'success'
//       })
//     }
//   })
// })

// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use('/', router)
// app.listen(3002)