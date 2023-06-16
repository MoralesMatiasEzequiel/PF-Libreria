require('../../db');
const User = require('../../collections/User');

const deleteUserCtrl = async (id) => {
    const deleted = await User.deleteOne({id})
    
    return deleted;
}

module.exports = deleteUserCtrl;