const path = require('path');
const controller = require('./product.controller');
const validate = require(path.join(process.cwd(), 'src/modules/core/middlewares/validate'));
const auth = require(path.join(process.cwd(), 'src/modules/core/middlewares/user-authentication.middleware'));
const { productUploadSchema, productUpdateSchema } = require("./product.schema");

module.exports = app => {
    app.route('/api/products')
        .get(controller.getProducts)
        .post(auth, validate(productUploadSchema), controller.addProduct);

    app.route('/api/products/:id')
        .get(auth, controller.getProduct)
        .put(auth, validate(productUploadSchema), controller.putProduct)
        .patch(auth, validate(productUpdateSchema), controller.patchProduct)
        .delete(auth, controller.deleteProduct);
}
