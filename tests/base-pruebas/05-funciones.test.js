import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 05-funciones.js', () => {
  test('getUser debe retornar un objeto', () => {

    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect(testUser).toEqual(user);

  });

  test('getUsuarioActivo debe retornar un obto con el nombre que enviamos', () => {

    const nombre = 'Juan';
    const testUser = {
      uid: 'ABC567',
      username: nombre
    }

    const user = getUsuarioActivo(nombre);

    expect(testUser).toEqual(user);

  });


});