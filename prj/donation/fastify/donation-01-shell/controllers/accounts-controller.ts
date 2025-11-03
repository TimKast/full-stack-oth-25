export const accountsController = {
  index: {
    auth: false,
    handler: function (request: any, reply: any) {
      reply.send({ hello: "world" });
    },
  },
};
