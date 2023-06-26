require('../../db');
const User = require('../../collections/User');

const getUserByEmailCtrl = async (email) => {
  if (email) {
    const UserByEmail = await User.findOne({ email: email });
    return UserByEmail;
  }
};

module.exports = getUserByEmailCtrl;    