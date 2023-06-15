require('../../db');
const User = require('../../collections/User');

const putUserCtrl = async (_id, username, email, password, active) => {

    const updated = await User.updateOne({_id}, {$set: {username, email, password, active}});

    return updated;
};

module.exports = putUserCtrl;