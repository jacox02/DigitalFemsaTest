import * as React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { store } from '../../app/redux/stores/';
// import AddTodo from './AddTodo';

describe('Movements store test', () => {
    test('Should get all movements', () => {
        // const store = configureStore();

        // const component = (
        //     <Provider store={store}>
        //         <App />
        //     </Provider>
        // );

        // render(component);

        // const input = screen.getByPlaceholderText(/repository/i);
        // expect(input).toBeOnTheScreen();

        // const textToEnter = 'This is a random element';
        // fireEvent.changeText(input, textToEnter);
        // fireEvent.press(screen.getByText('Submit form'));

        // const todosState = store.getState().todos;

        // expect(todosState.length).toEqual(1);

        // expect(todosState).toEqual(
        //     expect.arrayContaining([
        //         expect.objectContaining({
        //             id: 1,
        //             text: textToEnter,
        //             date: expect.any(Date),
        //         }),
        //     ])
        // );
    });
});