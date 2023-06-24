require('../../db');
const User = require('../../collections/User');

const getUsersByNameCtrl = async (name) => {
  if (name) {
    const UsersByName = await User.find({ name: { $regex: name, $options: 'i' } });
    return UsersByName;
  }
};

module.exports = getUsersByNameCtrl;    