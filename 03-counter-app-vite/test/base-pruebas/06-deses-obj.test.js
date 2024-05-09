import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('first', () => { 
    test('should first', () => { 

        // Desestructuración
        const object_usContext = {
            clave: 'osbustaman1985',
            nombre: 'Osvaldo',
            edad: 39,
            rango: 'Cabo'
        }
        
        const context = usContext(object_usContext);
        console.log(context)

        expect(context).toEqual({
            nombreClave: 'osbustaman1985',
            anios: 39,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });

    });   
});