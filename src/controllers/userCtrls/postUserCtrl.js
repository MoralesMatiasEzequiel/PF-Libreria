require('../../db');
const User = require('../../collections/User');

const postUserCtrl = async (username, email, password, date) => {
    const user = new User({
        username,
        email,
        password,
        date
    })

    await user.save();
};

module.exports = postUserCtrl;