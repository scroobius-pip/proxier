const allowCors = require('../lib/allowCors')

const handler = async (req, res) => {
  res.status(200).send({ message: 'cors ok' });
}


module.exports = allowCors(handler)