
describe('Pruebas en el componente <demo>', () => {
  test('Prueba Demo', () => {

    // 1. Inicialización
    const mensaje1 = 'Hola Mundo';

    // 2. Estímulo
    const mensaje2 = mensaje1.trim();

    // 3. Observar el comportamiento... esperado.
    expect(mensaje1).toBe(mensaje2);

  });
})

