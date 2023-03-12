import { render, screen, fireEvent } from '@testing-library/react-native';
import Component from "../../../app/components/molecules/FiltersContainer";
import { Provider } from 'react-redux';
import Navigation from '../../../app/navigation/Stacks/Stack';
import { NavigationContainer } from '@react-navigation/native';
import { store } from '../../../app/redux/stores';

describe("Tests Filters Button component", () => {
  let component: any = null;

  beforeAll(() => {
    component = (
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    );
  })

  it("Should render Ganados button ", () => {
    render(component);
    const foundButtons = screen.getByTestId('test-Ganados-button');
    expect(foundButtons).toBeOnTheScreen()
  });
  it("Should render Canjeados button ", () => {
    render(component);
    const foundButtons = screen.getByTestId('test-Canjeados-button');
    expect(foundButtons).toBeOnTheScreen()
  });
  it("Should render Todos button if any button on filter clicked", () => {
    render(component);
    const foundButtons = screen.getByTestId('test-Canjeados-button');
    fireEvent(foundButtons, 'press')
    const todosButton = screen.getByTestId('test-Todos-button');
    expect(todosButton).toBeOnTheScreen()
  })
});
