export const userLogValidSchema = {
    body: {
        type: "object",
        required: ["email", "password"],
        properties: {
            email: {
                type: "string",
                format: "email",
            },
            password: {
                type: "string",
            },
        }
    }
}