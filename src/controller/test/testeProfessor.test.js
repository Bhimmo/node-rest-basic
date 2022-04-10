const controllerProfessor = require('../professor') 

describe('Teste funções do controller', () => {
    it('teste para pegar todos os professores', () => {
        let controller = controllerProfessor.getAllProfessor();
        
        expect(controller).toBe("true");
    }); 
});