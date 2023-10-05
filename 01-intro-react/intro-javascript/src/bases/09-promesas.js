import { getHeroeById } from "./bases/08-imp-exp";


// - las promesas se crean con dos argumentos y esos son el callback
// - resolve:
//      se ejecuta cuando la promesa es exitosa
// - reject:      
//      se ejecuta cuando la promesa falla

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         //Tarea 
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         resolve(heroe)

//     }, 2000);

// });


// promesa.then((heroe) => {
//         console.log('heroe: ', heroe);
//     })
//     .catch(err => console.warn(err));


const getHeroeByAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            try {
                const heroe = getHeroeById(id);

                if (heroe) {
                    resolve(heroe.name);
                } else {
                    reject('No se pudo encontrar al heroe');
                }
            } catch (error) {
                reject(error);
            }


        }, 2000);

    });

};

getHeroeByAsync(1)
    .then(heroe => console.log('heroe: ', heroe))
    .catch(err => console.warn(err));

// .then(console.log)
// .catch(console.warn);