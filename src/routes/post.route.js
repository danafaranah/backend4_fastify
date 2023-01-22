import postCtrl from "../controllers/post.controller.js";
import { verifyToken } from "../middleware/auth.js";
import { upload } from "../middleware/imgUpload.js";
import { postValidSchema } from "../validations/post.validation.js";

const middleware = (req, reply, done) => {
    verifyToken(req, reply, done)
}
const route = (fastify, opts, done) => {

    fastify.get("/", { preHandler: [middleware] }, postCtrl.getPosts);
    fastify.get("/user", { preHandler: [middleware] }, postCtrl.getPostsLogin);
    fastify.get("/:id", { preHandler: [middleware] }, postCtrl.listOne);
    fastify.delete("/:id", { preHandler: [middleware] }, postCtrl.delete);
    fastify.put("/:id", { preHandler: [middleware, upload.single("img")] }, postCtrl.update);
    // fastify.put("/:id", postCtrl.update);
    fastify.post("/", { schema: postValidSchema, preValidation: [middleware, upload.single("img")] }, postCtrl.add);

    done()
}



export default route;