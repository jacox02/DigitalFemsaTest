import { render, screen, fireEvent, cleanup } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../../app/redux/stores';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../../app/components/pages/Home';

afterEach(cleanup);
describe("Tests Button component", () => {
  let component: any = null;
  beforeAll(() => {
    component = (
      <Provider store={store}>
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      </Provider>
    );
  })
  it("Should render Ganados button ", () => {
    //mock
    //act
    let title = 'Ganados'
    render(component);
    const foundButtons = screen.getByTestId(`test-${title}-button`);
    //assert
    expect(foundButtons).toBeOnTheScreen()
  });
  it("Should render Canjeados button ", () => {
    //mock
    //act
    let title = 'Canjeados'
    render(component);
    const foundButtons = screen.getByTestId(`test-${title}-button`);
    //assert
    expect(foundButtons).toBeOnTheScreen()
  });
  it("Should render Todos button ", () => {
    //mock
    render(component);
    let title = 'Todos'
    const ganadosButton = screen.getByTestId(`test-Ganados-button`);
    fireEvent(ganadosButton, 'press')
    //act
    const foundButtons = screen.getByTestId(`test-${title}-button`);
    //assert
    expect(foundButtons).toBeOnTheScreen()
  });
});
