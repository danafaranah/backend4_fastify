import Fastify from "fastify";
import cors from '@fastify/cors'
import { connectDb } from "./database.js";
import formBody from '@fastify/formbody';
import multer from "fastify-multer"

const fastify = Fastify({
    logger: true
})

//Rutas

import postRoutes from "./routes/post.route.js";
import userRoutes from "./routes/user.routes.js";

fastify.register(postRoutes, { prefix: "/post" });
fastify.register(userRoutes, { prefix: "/user" });


connectDb();

fastify.register(cors,{ origin: "*" });
fastify.register(formBody)
fastify.register(multer.contentParser)


const start = async () => {
    try {
        await fastify.listen({
            port: 4000,
            host: "0.0.0.0"
        })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()