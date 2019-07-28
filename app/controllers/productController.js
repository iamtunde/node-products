const Product = require('../models/product.model')

exports.create = (req, res) => {
    const body  = req.body
    const product = new Product(body)

    product.save(body, (err, item) => {
        if(err) {
            return res.status(500).json({
                message: 'An error occured ' + err,
                data: {}
            })
        } else {
            return res.status(200).json({
                message: 'Product successfully added',
                data: item
            })
        }
    })
}

exports.fetchOne = (req, res) => {
    const productId = req.params.id
    Product.findById(productId, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: 'An error occured ' + err,
                data: {}
            })
        } else {
            return res.status(200).json({
                message: 'Product successfully retrieved',
                data: item
            })
        }
    })
}

exports.fetchAll = (req, res) => {
    Product.find({}, (err, items) => {
        if (err) {
            return res.status(500).json({
                message: 'An error occured ' + err,
                data: {}
            })
        } else {
            return res.status(200).json({
                message: 'Products successfully retrieved',
                data: items
            })
        }
    })
}

exports.update = (req, res) => {
    const body = req.body

    Product.findByIdAndUpdate(req.params.id, body, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'An error occured ' + err,
                data: {}
            })
        } else {
            return res.status(200).json({
                message: 'Products successfully updated',
                data: body
            })
        }
    })
}

exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'An error occured ' + err,
                data: {}
            })
        } else {
            return res.status(200).json({
                message: 'Products successfully deleted',
                data: {}
            })
        }
    })
}