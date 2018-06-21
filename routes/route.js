var express = require('express');
var router = express.Router();

const Contact = require('../models/contacts');

router.get('/contact', function (req, res, next) {
   Contact.find((err, contacts) => {
        res.json(contacts);
   });
});

// -----------------------------------------------------------

// -----------------------------------------------------------
router.post('/contact', function (req, res, next) {
   let newContact = new Contact({
       first_name : req.body.first_name,
       last_name  : req.body.last_name,
       phone      : req.body.phone  
   });

   newContact.save((err , contact)=>{
    if(err){

        res.json({msg : 'not able to insert '});

    }else{
        console.log(res);
       res.json({msg : 'success'});

    }
   });
});
// -----------------------------------------------------------

// -----------------------------------------------------------
router.put('/contact/:id', function (req, res, next) {
    res.send("route working");
});
// -----------------------------------------------------------

// -----------------------------------------------------------
router.delete('/contact/:id', function (req, res, next) {
  
    Contact.remove({_id:req.param.id} , (err , result)=>{

        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

module.exports = router;

