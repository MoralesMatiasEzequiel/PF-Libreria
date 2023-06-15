const putUserCtrl = require('../../controllers/userCtrls/putUserCtrl');

const putUserHandler = async (req, res) => {
    const { _id, username, email, password, active } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      const userUpdate = await putUserCtrl(_id, username, email, password, active)
    
      res.status(200).send(userUpdate);

    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

module.exports = putUserHandler;