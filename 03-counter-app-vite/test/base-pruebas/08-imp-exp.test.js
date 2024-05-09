import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById debe retornar undefined si no existe', () => {
        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar heroes de DC, length == 3, toEqual como filtrado', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner));

        // expect(heroes).toEqual([
        //     {
        //         id: 1,
        //         name: 'Batman',
        //         owner: 'DC'
        //     },
        //     {
        //         id: 3,
        //         name: 'Superman',
        //         owner: 'DC'
        //     },
        //     {
        //         id: 4,
        //         name: 'Flash',
        //         owner: 'DC'
        //     }
        // ]);
    });

    test('getHeroesByOwner debe retornar heroes de Marvel, length == 2', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        //console.log(heroes);

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner));

    });
})