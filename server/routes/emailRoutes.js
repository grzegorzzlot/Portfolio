const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.route('/contact')
    .post((req,res)=>{
        const { subject, html } = req.body;
         
        if(subject!==undefined && html!==undefined) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: '***',
                    pass: '***'
                }
            });
            const mailOptions = {
                from: '***',
                to: '***',
                subject: subject,
                text: 'Wiadomość wysłana ze strony portfolio',
                html: html
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    res.json({ status: 'FAILED' })
                } else {
                    console.log('Email sent: ' + info.response);
                    res.json({ status: 'EMAIL_SENT' });
                }
            });
        } else {
            res.json({status: 'Empty data'})
        }        
    })


module.exports = router;