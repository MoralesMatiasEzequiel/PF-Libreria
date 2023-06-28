require('../../db');
const User = require('../../collections/User');

const getUserByIdCtrl = async (id) => {
  if (id) {
    const userById = await User.findOne({ _id: id });
    return userById;
  }
};

module.exports = getUserByIdCtrl;   