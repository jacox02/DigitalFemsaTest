import { render, screen, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import MovementDetails from '../../../app/components/pages/MovementDetails';
import { NavigationContainer } from '@react-navigation/native';
import { store } from '../../../app/redux/stores';

describe("Tests Movement Details Button component", () => {
    let component: any = null;
    let props = {
        id: "0",
        createdAt: new Date().toString(),
        product: "",
        points: 999,
        image: "../../../assets/Placeholder.png",
        is_redemption: false
    };

    beforeAll(() => {
        component = (
            <Provider store={store}>
                <NavigationContainer>
                    <MovementDetails route={{
                        params: props
                    }} />
                </NavigationContainer>
            </Provider>
        );
    })

    it("Should render Product Title", () => {
        render(component);
        const foundButtons = screen.getByTestId('test-product-date-label');
        expect(foundButtons).toBeOnTheScreen()
    });
    it("Should render Product Date", () => {
        render(component);
        const foundButtons = screen.getByTestId('test-product-date-value');
        expect(foundButtons).toBeOnTheScreen()
    });
    it("Should render Product Image", () => {
        render(component);
        const foundImage = screen.getByTestId('test-product-image');
        expect(foundImage).toBeOnTheScreen()
    })
    it("Should render Points value", () => {
        render(component);
        const todosButton = screen.getByTestId('test-product-points-value');
        expect(todosButton).toBeOnTheScreen()
    })
    it("Should render Points label", () => {
        render(component);
        const todosButton = screen.getByTestId('test-product-points-label');
        expect(todosButton).toBeOnTheScreen()
    })
});
