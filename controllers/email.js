const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'restauco.ynr@gmail.com',
        pass: 'tgwq xcgi nzey yrfz'
    }
});

const reservationMail = (data) => {
    let mailOptions = {
        from: 'restauco.ynr@gmail.com',
        to: data.email,
        subject: 'RESTAUCO Booking Confirmation',
        html: `
        <h1>Booking Successful</h1>
        <h2>Hello ${data.name}</h2>
        <p>Your reservation is complete at Restauco on ${data.date} for ${data.category}. You booked table number  
        ${data.tables.toString()}.</p> 
        <h2>ThankYou</h2>`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err);
        }else {
            console.log("Email sent : " + info.response);
        }
    });
};

module.exports = {
    reservationMail,
};