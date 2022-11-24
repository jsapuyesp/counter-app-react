import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Test de <CounterApp/>", () => {
  const initialValue = 10;

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("El valor inicial debe ser de 10", () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      initialValue.toString()
    );
  });

  test("Debe incrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText((initialValue + 1).toString())).toBeTruthy();
  });

  test("Debe reducir con el botón -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText((initialValue - 1).toString())).toBeTruthy();
  });

  test("Debe reiniciar el valor", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));

    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe(
      initialValue.toString()
    );
  });
});
