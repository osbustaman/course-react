import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        //console.log(user);
        expect(user).toEqual(userTest);

        // toEqual compara objetos
        // toStrictEqual compara objetos
    });  

    test('getUsuarioActivo debe de retornar un objeto', () => { 
        const name = 'Osvaldo';
        
        const userTest = {
            uid: 'ABC567',
            username: name
        };

        const user = getUsuarioActivo(name);

        console.log(user);
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    });
});