import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas del archivo 11-async-await.js', () => {
  test('getImagen debe retornar un link a una imagen', async () => {

    const url = await getImagen();

    expect(typeof url).toBe('string');

  });

});