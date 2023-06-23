const postUserCtrl = require('../../controllers/userCtrls/postUserCtrl');

const postUserHandler = async (req, res) => {
    
    const {name, nickname, email, picture, emailVerified} = req.body; 

    try {
        if (!name || !nickname || !email || !picture || !emailVerified) {
            return res.status(400).json({ error: 'Missing required data' });
        }
        
        if (
            typeof name !== 'string' ||
            typeof nickname !== 'string' ||
            typeof email !== 'string' ||
            typeof picture !== 'string' ||
            typeof emailVerified !== 'string'
        ){
            return res.status(400).send({ error: 'Incorrect DataType' });
        }

        const newUser = await postUserCtrl(name, nickname, email, picture, emailVerified)
       
        res.status(200).send('User created!');

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = postUserHandler;