const reservation = require('../models/reservationModel');
const email = require('./email');

const reservationView = async (req, res) => {
    let data = {
        name: req.body.name,
        numberOfGuest: Number(req.body.numberOfGuest),
        date: req.body.date,
        category: req.body.category,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message,
        tables : [],
    };
    let validation = {
        success: true,
        errMessage: 'Invalid Inputs. Try Again ☺.',

    };
    let currentStatus;

    try {
        try {
            currentStatus = await reservation.checkStatus(data.date, data.category);
        } catch (err) {
            validation.errMessage = "Sorry for interruption. Something gone wrong on server side in checkStatus. Please Try Again ☺.";
            validation.success = err;
            console.log(err);
            throw err;
        }

        let availability = (20 * 4) - (currentStatus.length * 4);
        if ((data.numberOfGuest > availability) || (data.numberOfGuest < 1)) {
            validation.success = false;
            validation.numberOfGuest = { errMessage: `Select between ${1} to ${availability - 1}` };
        } else {
            validation.numberOfGuest = { errMessage: `` };
        }

        let phoneno = /^\d{10}$/;
        if (!(data.phone.match(phoneno))) {
            validation.success = false;
            validation.phone = { errMessage: `Invalid Phone` };
        } else {
            validation.phone = { errMessage: `` };
        }

        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!(data.email.match(validRegex))) {
            validation.success = false;
            validation.email = { errMessage: `Invalid Email` };
        } else {
            validation.email = { errMessage: `` };
        }

    } catch (err) {
        validation.success = false;
        console.log(err);
    }

    if (validation.success) {
        try {
            let insertId;
            try {
                insertId = await reservation.insertCustomer(data);
                validation.custonerId = insertId;
            } catch (err) {
                validation.errMessage = "Sorry for interruption. Something gone wrong on server side in insertCustomer. Please Try Again ☺.";
                console.log(err);
                throw err;
            }

            let numberOfTables = Math.floor(data.numberOfGuest / 4);
            if (data.numberOfGuest % 4 > 0) {
                numberOfTables++;
            }
            data.insertId = insertId

            try {
                outer: for (let i = 1, count = 0; i <= 20; i++) {
                    let availability = true;
                    Object.keys(currentStatus).forEach((key) => {
                        let row = currentStatus[key];
                        if (row.tableNumber == i) {
                            availability = false;
                        }
                    });
                    if (!availability) {
                        continue outer;
                    }
                    data.tableNumber = i;
                    data.tables.push(i);
                    await reservation.insertReservation(data);
                    count++;
                    if (count >= numberOfTables) {
                        break outer;
                    }
                }
            } catch (err) {
                validation.errMessage = "Sorry for interruption. Something gone wrong on server side in insertReservation. Please Try Again ☺.";
                console.log(err);
                throw err;
            }
            let customerData = JSON.stringify(data);
            email.reservationMail(data);
            res.render('successfulReservation', customerData);
            return;
        } catch (err) {
            console.log(err);
        }
    } else {
        validation.data = data;
        let locals = JSON.stringify(validation);
        res.render('home', { locals: locals });
    }
};

module.exports = reservationView;