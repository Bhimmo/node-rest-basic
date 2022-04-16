const prisma = require('../lib/prisma')
const controller = {};

controller.create = async (dados) => {
    const { description } = dados;

    const category = await prisma.CategoryUsers.create({
        data: { description }
    });

    return category;
}

controller.getAll = async () => {
    const result = await prisma.CategoryUsers.findMany();

    if (!result) {
        throw new Error("Error em buscar as categorias");
    }

    return result;
}

controller.getOneCategory = async (id) => {
    const result = await prisma.CategoryUsers.findUnique({
        where: {
            id
        }
    });

    if (!result) {
        throw new Error("Error em buscar a categoria")
    }
    return result;
}

controller.alterCategory = async (id, dados) => {
    let { description } = dados;

    const result = await prisma.CategoryUsers.update({
        where: { id },
        data: { description }
    });

    return result
}

controller.delete = async (id) => {

    return await prisma.CategoryUsers.delete({
        where: { id }
    });
}

module.exports = controller;