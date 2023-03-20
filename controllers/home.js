const homeView = (req, res) => {
    // res.render('home');
    res.send('<h1> home </h1>');
};

module.exports = homeView;