require('../../db');
const User = require('../../collections/User');

const putUserCtrl = async (_id, name, nickname, surname, picture, emailVerified, active, reviews, favorites, orders) => {
    const update = {
      name,
      nickname,
      surname,
      picture,
      emailVerified,
      active,
    };
  
    if (Array.isArray(reviews)) {
      update.$addToSet = { reviews: { $each: reviews } };
    }
  
    if (Array.isArray(orders)) {
      update.$addToSet = { orders: { $each: orders } };
    }
  
    if (Array.isArray(favorites)) {
      update.favorites = favorites;
    }
  
    const updated = await User.findOneAndUpdate({ _id }, update, { new: true });
  
    return updated;
  };
  
  module.exports = putUserCtrl;