import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp.js', () => {

  // getHeroeById

  test('getHeroeById debe retornar un héroe por su id', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    })
  });

  test('getHeroeById debe retornar undefined', () => {
    const id = 0;
    const heroe = getHeroeById(id);

    expect(heroe).toBeFalsy()
  });

  // getHeroeByOwner

  test('getHeroeByOwner debe retornar la cantidad de héroes de DC', () => {
    const owner = 'DC'
    const heroesL = getHeroesByOwner(owner)

    expect(heroesL.length).toBe(3);
    expect(heroesL).toEqual(heroes.filter((heroe) => heroe.owner === owner))
  });

  test('getHeroeByOwner debe retornar la cantidad de héroes de Marvel', () => {
    const owner = 'Marvel'
    const heroes = getHeroesByOwner(owner).length

    expect(heroes).toBe(2);
  });

});