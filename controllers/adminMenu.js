const insert = (req, res) => {
    console.log("menu insert");
    res.render('menuInsertEdit');
};

const insertDB = (req,res)=>{
    // req.body.
};      
    
const update = (req, res) => { console.log('menu update'); };
const deleteItem = (req, res) => { console.log('menu delete'); };

module.exports = {
    insert,
    insertDB,
    update,
    deleteItem
};