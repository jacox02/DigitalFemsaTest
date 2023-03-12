import * as React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { store } from '../../app/redux/stores/';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../../app/navigation/Stacks/Stack';
import { filter, init } from '../../app/redux/stores/movements.store';
import { ProductService } from '../../app/core/services/IProduct.service';
import { IProductService } from '../../app/core/contracts/IProduct.service';
import { Movement } from '../../app/core/types/Movement.type';

describe('Movements store test', () => {
    let component: any = null;
    let productService: IProductService;
    let movements: Movement[] = [];
    beforeAll(() => {
        component = (
            <Provider store={store}>
                <NavigationContainer>
                    <Navigation />
                </NavigationContainer>
            </Provider>
        );
        productService = new ProductService()
    })

    test('Should get initial state', () => {
        //Arrange
        render(component);
        //Act
        const movementsState = store.getState().movements;
        //Assert
        expect(movementsState.length).toBe(0);
        expect(movementsState).toStrictEqual([])
    });

});

describe('Test store mutations', () => {
    let component: any = null;
    let productService: IProductService;
    let movements: Movement[] = [];
    beforeEach(async () => {
        component = (
            <Provider store={store}>
                <NavigationContainer>
                    <Navigation />
                </NavigationContainer>
            </Provider>
        );
        productService = new ProductService()
        await productService.GetAllProducts().then((data) => {
            movements = data
        })
        store.dispatch(init(movements))
    })
    test('Should be able to initialize state', async () => {
        //Arrange
        render(component)
        //Act
        let storeState = store.getState().movements;
        //Assert
        expect(storeState).toBe(movements);
        expect(storeState.length).toBeGreaterThan(1);
    })
    test('Should be able to filter by ALL', () => {
        //Arrange
        render(component)
        //Act
        store.dispatch(filter('ALL'))
        let filteredState = store.getState().filteredMovements;
        //Assert
        console.log(filteredState)
        expect(filteredState.length).toBeGreaterThan(1)
        expect(filteredState).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    createdAt: expect.any(String),
                    product: expect.any(String),
                    points: expect.any(Number),
                    image: expect.any(String),
                    is_redemption: expect.any(Boolean),
                    id: expect.any(String),
                }),
            ])
        );
    })
    test('Should be able to filter by REDEMED', () => {
        //Arrange
        render(component)
        //Act
        store.dispatch(filter('REDEMED'))
        let filteredState = store.getState().filteredMovements;
        //Assert
        expect(filteredState.length).toBeGreaterThan(1)
        expect(filteredState).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    createdAt: expect.any(String),
                    product: expect.any(String),
                    points: expect.any(Number),
                    image: expect.any(String),
                    is_redemption: true,
                    id: expect.any(String),
                }),
            ])
        );
    })
    test('Should be able to filter by NOT_REDEMED', () => {
        //Arrange
        render(component)
        //Act
        store.dispatch(filter('NOT_REDEMED'))
        let filteredState = store.getState().filteredMovements;
        //Assert
        expect(filteredState).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    createdAt: expect.any(String),
                    product: expect.any(String),
                    points: expect.any(Number),
                    image: expect.any(String),
                    is_redemption: false,
                    id: expect.any(String),
                }),
            ])
        );
    })
})