import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas.js', () => {
  test('Debe retornar un heroe el método getHeroeByIdAsync', (done) => {

    const id = 1;
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        });
        done();
      });
  });

  test('Debe retornar una exception el método getHeroeByIdAsync', (done) => {

    const id = 0;
    getHeroeByIdAsync(id)
      .catch(error => {

        expect(error).toBe('No se pudo encontrar el héroe con id 0');


        done();
      })
  });

});
