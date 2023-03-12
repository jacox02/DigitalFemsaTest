import { Provider } from "react-redux";
import { render, screen, fireEvent } from '@testing-library/react-native';
import { store } from "../../../app/redux/stores";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeMessage from '../../../app/components/molecules/WelcomeMessage';

describe("Tests Welcome component", () => {
  let component: any = null;

  beforeAll(() => {
    component = (
      <WelcomeMessage />
    );
  })

  it("Should render Welcome Message button ", async () => {
    render(component);
    const foundButtons = await screen.getByText(/Bienvenido de vuelta!/);
    expect(foundButtons).toBeOnTheScreen()
  });
  it("Should render User Fullname button ", async () => {
    render(component);
    const foundButtons = await screen.getByText(/Ruben Rodriguez/);
    expect(foundButtons).toBeOnTheScreen()
  });
});
