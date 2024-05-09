describe('Pruebas en el archivo <DemoComponent />', () => {

    test('Esta prueba no debería fallar', () => {

        // 1. inicailizacion
        const message1 = 'Hola Mundo';

        // 2. estímulo
        const message2 = message1.trim();

        // 3. observar el comportamiento...esperado
        expect(message1).toBe(message2);

    });

});