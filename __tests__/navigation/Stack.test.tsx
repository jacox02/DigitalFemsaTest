import { NavigationContainer } from "@react-navigation/native";
import Navigation from "../../app/navigation/Stacks/Stack";
import { render, screen, fireEvent } from '@testing-library/react-native';
import { store } from "../../app/redux/stores";
import { Provider } from "react-redux";

describe('Test navigations and trasitions', () => {
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
    test('Should get Welcome Message label', async () => {
        render(component);
        const header = await screen.findByText(/Bienvenido/);
        expect(header).toBeOnTheScreen();
    });

    test('Should navigate to Movement Detail', async () => {
        render(component);
        const firstMovement = await screen.findByTestId('movement-0-row', { timeout: 30000 });
        fireEvent(firstMovement, 'press');
        const movementDetails = await screen.findByText(/puntos/)

        expect(firstMovement).toBeOnTheScreen();
        expect(movementDetails).toBeOnTheScreen();
    });
});