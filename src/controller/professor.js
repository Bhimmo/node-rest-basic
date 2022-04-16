const prisma = require('../lib/prisma');
const serviceCategoryUsers = require('./category')

const controller = {};

controller.getAllProfessor = async () => {
    const result = await prisma.Users.findMany();

    if (!result) {
        throw new Error("Error em buscar os professores");
    }

    return result
}

controller.createProfessor = async (dados) => {
    const { name, categoryId } = dados;

    try {
        const category = await serviceCategoryUsers.getOneCategory(categoryId);

        if (!category) {
            throw new Error("Category invalid")
        }

        const result = await prisma.Users.create({
            data: { name, categoryId }
        });
        return result
    } catch (error) {
        throw new Error("id category invalid")
    }
}

module.exports = controller;