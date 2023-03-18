const adminModel = require('../models/adminModel');

const adminLogin = (req, res) => {
    let session = req.session;
    if (session.userId) {
        console.log("passssss");
        console.log(session.userId);
        // let adminData = adminModel.read(session.userId);
        // try {
        // await new Promise((resolve, reject) => {
        res.render('adminView', { name: 'jatin' }, (err, compiled) => {
            if (err) {
                console.log('nooo ');
                // reject(err);
            } else {
                console.log('yesss');
                // resolve(compiled);
            }
        });
        // })
        // } catch (err) {
        // console.log(err);
        // }
        console.log("finallyyyyyy");

    } else {
        console.log("failssss");
        res.redirect('/loginForm');
    }
}

module.exports = adminLogin;