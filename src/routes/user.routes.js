import userCtrl from '../controllers/user.controller.js';
import { userValidSchema } from '../validations/user.validation.js';
import { userLogValidSchema } from '../validations/userLog.validation.js';

const route = (fastify, opts, done) => {

    fastify.post('/register', { schema: userValidSchema }, userCtrl.register)
    fastify.post('/login', { schema: userLogValidSchema }, userCtrl.login)

    done()
}



export default route