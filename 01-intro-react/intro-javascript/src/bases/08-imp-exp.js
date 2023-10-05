// import { heroes } from './bases/data/heroes';
// import { heroes } from "./bases/data/heroes";

// import { heroes } from "./bases/data/heroes";
//import heroes, { owners } from "../bases/data/heroes";
import heroes from "../bases/data/heroes";

//console.log(owners)

export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

//console.log(getHeroeById(2));


export const getHeroeByOwner = (owner) => {
    return heroes.filter((heroes) => heroes.owner === owner);
}

//console.log(getHeroeByOwner('DC'));
//console.log(getHeroeByOwner('Marvel'));