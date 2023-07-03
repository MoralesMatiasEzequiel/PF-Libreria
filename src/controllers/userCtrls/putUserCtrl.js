require('../../db');
const User = require('../../collections/User');

const putUserCtrl = async (_id, name, nickname, surname, picture, emailVerified, active, reviews, favorites, orders) => {
    const update = {};

    if (name !== null && name !== false) {
        update.name = name;
    }

    if (nickname !== null && nickname !== false) {
        update.nickname = nickname;
    }

    if (surname !== null && surname !== false) {
        update.surname = surname;
    }

    if (picture !== null && picture !== false) {
        update.picture = picture;
    }

    if (emailVerified !== null && emailVerified !== false) {
        update.emailVerified = emailVerified;
    }

    if (active !== null && active !== false) {
        update.active = active;
    }

    if (Array.isArray(reviews) && reviews.length > 0) {
        update.$addToSet = { reviews: { $each: reviews } };
    }

    if (Array.isArray(orders) && orders.length > 0) {
        update.$addToSet = { orders: { $each: orders } };
    }

    if (Array.isArray(favorites) && favorites.length > 0) {
        update.favorites = favorites;
    }

    // const updated = await User.findOneAndUpdate({ _id }, update, { new: true });
    const updated = await User.findOneAndUpdate({ _id }, { $set: { active } }, { new: true });

    return updated;
};

module.exports = putUserCtrl;