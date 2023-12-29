const express =require('express')
const router=express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User=require('../models/User')

router.post('/createuser',async(req,res)=>{
try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) 
    {
      return res.json({ message: 'Email already exists.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
    name,
    email,
    password: hashedPassword,
    })
    await newUser.save();
    res.json({success:true});
  } catch (error) {
    console.error(error);
    res.json({success:false});
  }});

  
router.post('/loginuser',async(req,res)=>{
    try {
        const { name, password } = req.body;
        const user = await User.findOne({ name });
        if (!user) {
          return res.status(401).json({success:false});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({success:false});
        }
        const token = jwt.sign({ userId: user._id }, '123456789', { expiresIn: '1h' });
        res.status(200).json({success:true});
      } catch (error) {
        console.error(error);
        res.status(500).json({success:false});
      }
})
module.exports=router;