const productSchema = require('./model/myModel');
const Product = require('./model/myModel');
const apiRouter = require('express').Router();

apiRouter.get('/products', async (req, res) => {
  try {
    const list = await Product.find();
    console.log(list.length);
    res.json(list);
  } catch (error) {
    res.status(500).json({ error });
  }
});

apiRouter.post('/', (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = apiRouter;
