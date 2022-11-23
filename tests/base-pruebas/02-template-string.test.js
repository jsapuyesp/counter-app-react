import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Prueba en 02-template-string.js', () => {
  test('getSaludo() debe retornar `Hola Juan`', () => {
    const nombre = 'Juan';
    const mensaje = getSaludo(nombre);

    expect(mensaje).toBe(`Hola ${nombre}`);
  });
});