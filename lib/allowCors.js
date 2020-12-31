
const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://fontofweb.com')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }
    return await fn(req, res)
}

module.exports = allowCors