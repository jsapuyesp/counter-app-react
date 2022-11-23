import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Test del archivo 07-deses-arr.js', () => {
  test('El test debe retornar un String y un Numero', () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe('ABC');
    expect(numeros).toBe(123);

  });
});