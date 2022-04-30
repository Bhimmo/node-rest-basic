const prisma = require('../lib/prisma');
const serviceCategoryUsers = require('./category')

const controller = {};

controller.getAllProfessor = async () => {
    const result = await prisma.Users.findMany({
        include: {
            category: true
        }
    });

    if (!result) {
        throw new Error("Error em buscar os professores");
    }

    return result
}

controller.getOneByName = async (name) => {
    const result = await prisma.Users.findFirst({
        where: { name }
    });

    if (!result) throw new Error("Teacher not found");

    return result;
}

controller.createProfessor = async (dados) => {
    const { name, categoryId } = dados;

    try {
        const category = await serviceCategoryUsers.getOneCategory(categoryId);
        console.log(category.description);
        if (category.description != 'Professor') {
            throw new Error("Category invalid")
        } else {
            console.log("ENTROU");
            const result = await prisma.Users.create({
                data: { name, categoryId }
            });
            return result
        }

    } catch (error) {
        throw new Error("the category is not a teacher")
    }
}

module.exports = controller;