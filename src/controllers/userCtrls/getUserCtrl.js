require('../../db');
const User = require('../../collections/User');

const getUserCtrl = async (title) => {
    if(title){
        return await User.findOne({username: title});
    }
};

module.exports = getUserCtrl;