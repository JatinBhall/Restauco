const reservationModel = require('../models/reservationModel');

const deleteBooking = async(req, res) => {
    try {
        await reservationModel.deleteBooking(req.params.id);
    } catch (err) {
        console.log(err);
    }
    res.locals.focus = 'customer';
    res.redirect("/adminLogin/adminView");
};

module.exports = {
    deleteBooking,
};