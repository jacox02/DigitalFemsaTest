import * as React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react-native';
import { store } from '../../../app/redux/stores/';
import { NavigationContainer } from '@react-navigation/native';
import PointsContainer from '../../../app/components/molecules/PointsContainer';

describe("Tests Points components", () => {
  let component: any = null;

  beforeAll(() => {
    component = (
      <Provider store={store}>
        <NavigationContainer>
          <PointsContainer />
        </NavigationContainer>
      </Provider>
    );
  })

  test('Should render', () => {
    //Arrange
    render(component);
    //Act
    const pointsComponent = screen.getByTestId('test-PointsContainer-component');
    //Assert
    expect(pointsComponent).toBeOnTheScreen()
  });
});
