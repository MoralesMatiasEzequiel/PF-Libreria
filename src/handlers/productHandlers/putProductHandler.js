//importar controllers.

const putProductHandler = async (req, res) => {
    const { } = req.body;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
    
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

module.exports = putProductHandler;