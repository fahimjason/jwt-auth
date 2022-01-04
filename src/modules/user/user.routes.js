const path = require('path');
const controller = require('./user.controller');
const validate = require(path.join(process.cwd(), 'src/modules/core/middlewares/validate'));
const auth = require(path.join(process.cwd(), 'src/modules/core/middlewares/user-authentication.middleware'));
const { userRegisterSchema, userUpdateSchema, userLoginSchema } = require('./user.schema');

module.exports = app => {
    app.route('/api/users')
        .get(auth, controller.getUsers)
        .post(validate(userRegisterSchema), controller.createUser);

    app.route('/api/users/:id')
        .get(auth, controller.getUser)
        .put(auth, validate(userUpdateSchema), controller.putUser)
        .patch(auth, validate(userUpdateSchema), controller.patchUser)
        .delete(auth, controller.deleteUser);

    app.route('/api/users/login')
        .post(validate(userLoginSchema), controller.login);
}
