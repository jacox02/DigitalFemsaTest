import { View, StyleSheet } from 'react-native'
import { useEffect } from 'react';
import { init, store } from '../../redux/stores/movements.store';

import WelcomeMessage from '../molecules/WelcomeMessage';
import PointsContainer from '../molecules/PointsContainer';
import FiltersContainer from '../molecules/FiltersContainer';

import MovementsContainer from '../organisms/MovementsContainer';
import {ProductService} from "../../core/services/IProduct.service";

let _productService = new ProductService();

export default function Home({ navigation }: any) {
    useEffect(() => {
        _productService.GetAllProducts().then(data => {
            store.dispatch(init(data))
        });
    }, [])

    return (
        <View style={styles.container}>
            <WelcomeMessage></WelcomeMessage>
            <PointsContainer></PointsContainer>
            <MovementsContainer navigation={navigation}></MovementsContainer>
            <FiltersContainer></FiltersContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        overflow: 'scroll',
    },
});