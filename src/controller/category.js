const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const controller = {};

controller.create = async (dados) => {
    const { description } = dados;

    try {
        const category = await prisma.categoryUsers.create({
            data: { description }
        });
    
        return category;
    } catch (error) {
        throw error;
    }
}

module.exports = controller;