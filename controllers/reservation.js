const reservation = require('../models/reservationModel');

const reservationView = async (req, res) => {
    let data = {
        name: req.body.name,
        numberOfGuest: req.body.numberOfGuest,
        date: req.body.date,
        category: req.body.category,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message,
    };
    let validation = {
        success: true,
        errMessage: 'Invalid Inputs. Try Again ☺.',

    };
    let currentStatus;

    try {
        try {
            currentStatus = await reservation.checkStatus(date, category);
        } catch (err) {
            validation.errMessage = "Sorry for interruption. Something gone wrong on server side. Please Try Again ☺.";
            validation.success = err;
            console.log(err);
            throw err;
        }

        let currentCustomers = (20 * 4) - (currentStatus.length * 4);
        if ((data.numberOfGuest > currentCustomers && numberOfGuest < 1)) {
            validation.success = false;
            validation.numberOfGuest = { errMessage: `Select between ${1} to ${currentCustomers - 1}` };
        }

        let phoneno = /^\d{10}$/;
        if (!(data.phone.match(phoneno))) {
            validation.success = false;
            validation.phone = { errMessage: `Invalid Phone` };
        }

        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!(data.email.match(validRegex))) {
            validation.success = false;
            validation.email = { errMessage: `Invalid Email` };
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
            } catch (err) {
                console.log(err);
                throw err;
            }

            let numberOfTables = Math.floor(validation.numberOfGuest / 4);
            if (validation.numberOfGuest % 4 > 0) {
                numberOfTables++;
            }
            data.insertId = insertId

            try {
                outer: for (let i = 1; i <= numberOfTables; i++) {
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
                    await reservation.insertReservation(data);
                }
            } catch (err) {
                console.log(err);
                throw err;
            }
            res.render('successfulReservation');


        } catch (err) {
            validation.errMessage = "Sorry for interruption. Something gone wrong on server side. Please Try Again ☺.";
            validation.success = err;
            console.log(err);
        }
    }
    res.render('home', validation);
};

module.exports = reservationView;