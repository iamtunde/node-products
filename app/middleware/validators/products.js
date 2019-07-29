const Joi = require('joi')

exports.create = (req, res, next) => {
    const rules = Joi.object().keys({
        name : Joi.string().required().max(50),
        price : Joi.number().required().max(1500)
    })

    Joi.validate(req.body, rules, (err, result) => {
        if(err) {
            return res.status(422).json({
                message: err.message
            })
        } else {
            next();
        }
    })
}