import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en <FirstApp />', () => {
  // test('Debe hacer match con el snapshot', () => {
  //   const tittle = 'TituloApp';
  //   const { container } = render(<FirstApp title={tittle} />);
  //   expect(container).toMatchSnapshot();
  // });

  test('debe mostrat el título en un h1', () => {
    const tittle = 'TituloApp';
    const { container, getByText, getByTestId } = render(<FirstApp title={tittle} />);
   
    expect(getByText(tittle)).toBeTruthy();
    expect(getByTestId('test-tittle').innerHTML).toContain(tittle);
  
  });
  test('debe mostrat el subtítulo enviado por props', () => {
    const tittle = 'TituloApp';
    const subtitle = 'subtitulo';
    const { getByText } = render(
      <FirstApp
        title={tittle}
        subTitle={subtitle}
      />
    );
   
    expect(getByText(subtitle)).toBeTruthy();
  
  });
});