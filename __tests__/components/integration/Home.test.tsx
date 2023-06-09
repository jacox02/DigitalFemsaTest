import { render, screen, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from "../../../app/components/pages/Home";
import { Provider } from 'react-redux';
import { store } from '../../../app/redux/stores';

describe("Tests Home component", () => {
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
    describe("Tests Home component", () => {
        it("Should render Ganados button ", () => {
            let title = 'Ganados'
            render(component);
            const foundButtons = screen.getAllByTestId(`test-${title}-button`);
            fireEvent.press(screen.getByText('Ganados'))
            expect(foundButtons.length).toBeGreaterThanOrEqual(1);
        });
        it("Should render Canjeados button ", () => {
            let title = 'Ganados'
            render(component);
            const foundButtons = screen.getAllByTestId(`test-${title}-button`);
            fireEvent.press(screen.getByText('Ganados'))
            expect(foundButtons.length).toBeGreaterThanOrEqual(1);
        });
        it("Should render Todos button if we hit Ganados or Canjeados button ", () => {
            let title = 'Ganados'
            render(component);
            const foundButtons = screen.getAllByTestId(`test-${title}-button`);
            fireEvent.press(screen.getByText('Ganados'))
            expect(foundButtons.length).toBeGreaterThanOrEqual(1);
        });
    });

});
