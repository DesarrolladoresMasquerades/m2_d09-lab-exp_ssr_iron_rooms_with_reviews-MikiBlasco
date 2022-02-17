const router = require("express").Router();
const Room = require("../models/Room.model");

router.route('/rooms/create')
.get( (req, res) => res.render('room-views/create-room'))

.post( (req, res)=>{
    const { name, description, imageUrl } = req.body;    
    Room.create({name, description, imageUrl})
    .then(()=> res.redirect('/rooms'))
    console.log("---------------------->",name, description, imageUrl)
});

router.route('/rooms')
.get( (req, res) => {
   Room.find()
   .then((rooms)=> {
       res.render("room-views/list-rooms", {rooms})
   })
});

module.exports = router;
