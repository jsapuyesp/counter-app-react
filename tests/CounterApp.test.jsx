import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";



describe('Test de <CounterApp/>', () => {
  
  const value = "100";

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(
      <CounterApp value={value}/>
    );
    expect(container).toMatchSnapshot();
  });

  test('El valor inicial debe ser de 100', () => {
    render(
      <CounterApp value={value}/>
    );

    expect(screen.getByRole('heading', {level:2}).innerHTML).toContain(value)

  });

});