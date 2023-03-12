import { Provider } from "react-redux";
import { render, screen, fireEvent } from '@testing-library/react-native';
import { store } from "../../../app/redux/stores";
import { NavigationContainer } from "@react-navigation/native";
import Title from "../../../app/components/atoms/Title";


describe("Tests Title component", () => {
  let component: any = null;

  beforeAll(() => {
    component = (
      <Provider store={store}>
        <NavigationContainer>
          <Title text="This is a test" />
        </NavigationContainer>
      </Provider>
    );
  })

  it("Should render component", async () => {
    render(component);
    const foundButtons = await screen.getByText('This is a test');
    expect(foundButtons).toBeOnTheScreen()
  });
});
