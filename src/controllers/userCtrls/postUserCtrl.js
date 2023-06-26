require('../../db');
const User = require('../../collections/User');

const postUserCtrl = async (name, nickname, email, picture, emailVerified) => {
    const user = new User({
        name,
        nickname,
        email,
        picture,
        emailVerified
    })

    await user.save();
};

module.exports = postUserCtrl;