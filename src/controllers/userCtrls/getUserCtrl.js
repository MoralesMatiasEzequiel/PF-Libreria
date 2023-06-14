require('../../db');
const User = require('../../collections/User');

export const getUserCtrl = async (title) => {
    if(title){
        return await User.findOne({username: title});
    }
};