const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const controller = {};

controller.create = async (dados) => {
    const { description } = dados;

    const category = await prisma.categoryUsers.create({
        data: { description }
    });

    return category;
}

controller.getAll = async () => {
    const result = await prisma.categoryUsers.findMany();

    if (!result) {
        throw new Error("Error em buscar as categorias");
    }

    return result;
}

controller.getOneCategory = async (dadosParam) => {
    let { id } = dadosParam;

    const result = await prisma.categoryUsers.findUnique({
        where: {
            id
        }
    });

    if (!result) {
        throw new Error("Error em buscar a categoria")
    }
    return result;
}

controller.alterCategory = async (dadosParam, dadosBody) => {
    let { id } = dadosParam;
    let { description } = dadosBody;

    const result = await prisma.categoryUsers.update({
        where: { id },
        data: { description }
    });

    return result
}

controller.delete = async (dadosParam) => {
    let { id } = dadosParam;

    return await prisma.categoryUsers.delete({
        where: { id }
    });
}

module.exports = controller;