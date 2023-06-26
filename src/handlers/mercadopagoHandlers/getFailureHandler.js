
const getFailureHandler = async (req, res) => {

    try {

        console.log(req.body);
        console.log(req.params);
        console.log(req.query);
        res.status(200).send('Failure pag');

    } catch (error) {
       return res.status(500).json('Error success');
    }
};

module.exports = getFailureHandler;