const loginsignupCtrl = {};

const ApiSchema = require('../models/apiModel');

loginsignupCtrl.signup = async (req,res)=>{
const newUser = new ApiSchema({
    name:req.body.name,
    last:req.body.last,
    email:req.body.email,
    password:req.body.password
});

await newUser.save();
console.log(newUser);
res.json({
    status:'ususario creado!'
});

}

loginsignupCtrl.login = async (req,res)=>{
    //buscarlos*
  const data = await ApiSchema.find();
    //mostrarlos*
  res.json(data); 
      

}

module.exports = loginsignupCtrl;