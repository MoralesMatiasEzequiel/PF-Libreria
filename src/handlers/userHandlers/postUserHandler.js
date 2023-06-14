const postUserCtrl = require('../../controllers/userCtrls/postUserCtrl');

const postUserHandler = async (req, res) => {
    
    const { username, email, password, date } = req.body; 

    try {
        if (!username || !email || !password || !date) {
            return res.status(400).json({ error: 'Missing required data' });
        }

        const newUser = await postUserCtrl(username, email, password, date)
       
        res.status(201).send('User created!');

    } catch (error) {
        res.status(400).send({ error: error.message});
    }
};

module.exports = postUserHandler;