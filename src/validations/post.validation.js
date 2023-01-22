export const postValidSchema = {
    body: {
        type: "object",
        required: ["title", "description"],
        properties: {
            title: {
                type: "string",
            },
            description: {
                type: "string",
            },
        }
    }
}