const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'restauco.ynr@gmail.com',
        pass: 'restauco.ynr.com'
    }
});

const reservationMail = (data) => {
    let mailOptions = {
        from: 'restauco.ynr@gmail.com',
        to: data.email,
        subject : 'RESTAUCO Booking Confirmation',
        text : ``,
    };
};

module.exports = {
    reservationMail,
};