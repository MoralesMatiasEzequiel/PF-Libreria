const putUserCtrl = require('../../controllers/userCtrls/putUserCtrl');

const putUserHandler = async (req, res) => {
    const { _id, name, nickname, surname, picture, emailVerified, active, reviews, favorites, orders } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if (
        (name && typeof name !== 'string') ||
        (nickname && typeof nickname !== 'string') ||
        (surname && typeof surname !== 'string') ||
        (picture && typeof picture !== 'string') ||   
        (emailVerified && typeof emailVerified !== 'boolean') ||
        (active && typeof active !== 'boolean') ||
        (reviews && !Array.isArray(reviews) && reviews.length <= 0) ||
        (favorites && !Array.isArray(favorites)) ||
        (orders && !Array.isArray(orders) && orders.length <= 0)
      ){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }

      const userUpdate = await putUserCtrl(_id, name, nickname, surname, picture, emailVerified, active, reviews, favorites, orders)
    
      res.status(200).send(`El estado del usuario ha sido actualizado`);

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

module.exports = putUserHandler;