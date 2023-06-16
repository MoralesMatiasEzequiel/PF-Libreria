require('../../db');
const User = require('../../collections/User');

const getUsersByNameCtrl = async (username) => {
  if (username) {
    const UsersByName = await User.find({ username: { $regex: username, $options: 'i' } });
    return UsersByName;
  }
};

module.exports = getUsersByNameCtrl;    