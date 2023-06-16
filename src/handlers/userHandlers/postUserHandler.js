const postUserCtrl = require('../../controllers/userCtrls/postUserCtrl');

const postUserHandler = async (req, res) => {
    
    const { username, email, password, date } = req.body; 

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Missing required data' });
        }
        
        if (
            typeof username !== 'string' ||
            typeof email !== 'string' ||
            typeof password !== 'string'
        ){
            return res.status(400).send({ error: 'Incorrect DataType' });
        }

        const newUser = await postUserCtrl(username, email, password, date)
       
        res.status(200).send('User created');

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = postUserHandler;