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

    const newUser = await User.create(user);

    return newUser;
};

module.exports = postUserCtrl;