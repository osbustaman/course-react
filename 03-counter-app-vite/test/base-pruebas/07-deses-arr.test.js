import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('pruebas en 07-deses-arr', () => { 
    test('debe de retornar un string y un numero', () => { 
        
        const [letter, numbers] = retornaArreglo(); // ['ABC', 123]
        
        expect(letter).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letter).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letter).toEqual(expect.any(String));
    })
})