export default {
    method: 'get',
    handler: (req, res, next) => {
        res.json(req.params.id)
    }
}