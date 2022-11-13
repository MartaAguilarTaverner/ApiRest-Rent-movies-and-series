const { UserModel } = require("../models");

module.exports = {
    create: async () => {
        await UserModel.bulkCreate(
            [
                {
                    name: "Horror",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },
};
