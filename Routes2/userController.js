const Users = require('../models/User');
require("dotenv").config({ path: "../config.env"});
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = (req, res) => {
  const userLoggingIn = req.body;
  Users.findOne({Username: userLoggingIn.Username})
    .then(dbUser => {
      if(!dbUser){2
        return res.json({
          message: 'Invalid Username or Password'
        })
      }
      bcrypt.compare(userLoggingIn.Password, dbUser.Password)
      
        .then(isCorrect => {
          if(isCorrect){
            const payload = {
              id : dbUser._id,
              First_Name : dbUser.First_Name
            }
            jwt.sign(
              payload,
              process.env.JWT_SECRET,
              {expiresIn: 86400},
              (err, token) => {
                if(err) return console.log(err)
                  res.send({
                    message: 'Success',
                    token: token
                })
              }
            )
          }
          else{
            return res.json({
              message: 'Invalid Username or Password'
            })
          }
        })
    })
}


exports.createUser = async (req, res)=>{
  const First_Name= req.body.First_Name;
  const Last_Name= req.body.Last_Name;
  const Email= req.body.Email.toLowerCase();
  const Home_Address= req.body.Home_Address;
  const Telephone_Number= req.body.Telephone_Number;
  const Passport_Number= req.body.Passport_Number;
  const Password= await bcrypt.hash(req.body.Password, 10);
  const Username= req.body.Username.toLowerCase();
  const Type= req.body.Type;
  const newUser= new Users({
    First_Name,
    Last_Name,
    Email,
    Home_Address,
    Telephone_Number,
    Passport_Number,
    Password,
    Username,
    Type,
  });
  newUser.save(function(err){
    res.send(newUser);
  });
}
