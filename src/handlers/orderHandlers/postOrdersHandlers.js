const postOrderCtrl = require('../../controllers/orderCtrls/postOrderCtrl');

const postOrdersHandler = async (req, res) => {
  const { email, name, surname, phone, dni, street, number, floor, apartment, province, city, comentary, products, finalPrice } = req.body;

  try {
    if (!email || !name || !surname || !phone || !dni || !street || !number || !province || !city || !products || !finalPrice) {
      return res.status(400).send({ error: 'Missing data' });
    }
    if (typeof email !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - email' });
    }
    if (typeof name !== 'string') {
        return res.status(400).send({ error: 'Incorrect DataType - name' });
    }
    if (typeof surname !== 'string') {
    return res.status(400).send({ error: 'Incorrect DataType - surname' });
    }
    if (typeof phone !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - phone' });
    }
    if (typeof dni !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - dni' });
    }
    if (typeof street !== 'string') {
        return res.status(400).send({ error: 'Incorrect DataType - street' });
    }
    if (typeof province !== 'string') {
        return res.status(400).send({ error: 'Incorrect DataType - province' });
    }
    if (typeof city !== 'string') {
        return res.status(400).send({ error: 'Incorrect DataType - city' });
    }
    if (products && !Array.isArray(products)) {
      return res.status(400).send({ error: 'Incorrect DataType - products' });
    }
    if (finalPrice && typeof finalPrice !== 'number') {
      return res.status(400).send({ error: 'Incorrect DataType - finalPrice' });
    }

    const newOrder = await postOrderCtrl(email, name, surname, phone, dni, street, number, floor, apartment, province, city, comentary, products, finalPrice);

    res.status(200).send(newOrder);

  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      return res.status(409).send({ error: 'Product with the same name already exists' });
    }

    return res.status(500).send(error.message);
  }
};

module.exports = postOrdersHandler;