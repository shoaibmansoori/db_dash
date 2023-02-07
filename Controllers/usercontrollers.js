const users = require('../Models/userModel')

const getAllUsers = async (req, res) => {
    console.log('111')
    const user = await users.find({});
    console.log('222')
    res.send(user);
 }

 const createUser =  async (req, res) => {
    console.log("start");
    const user = new users(req.body);
    await user.save();
    res.send(user);
  }

  module.exports = {getAllUsers,createUser}