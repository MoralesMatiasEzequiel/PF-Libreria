const putUserCtrl = require('../../controllers/userCtrls/putUserCtrl');

const putUserHandler = async (req, res) => {
    const { _id, username, email, password, active } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if (
        typeof username !== 'string' ||
        typeof email !== 'string' ||
        typeof password !== 'string' |     
        typeof active !== 'boolean'
      ){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }

      const userUpdate = await putUserCtrl(_id, username, email, password, active)
    
      res.status(200).send(`El usuario ha sido actualizado`);

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

module.exports = putUserHandler;