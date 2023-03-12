import { View, StyleSheet } from 'react-native'
import { useEffect } from 'react';
import { init, store } from '../../redux/stores/movements.store';

import WelcomeMessage from '../molecules/WelcomeMessage';
import PointsContainer from '../molecules/PointsContainer';
import FiltersContainer from '../molecules/FiltersContainer';

import MovementsContainer from '../organisms/MovementsContainer';
import {ProductService} from "../../core/services/IProduct.service";
import {Movement} from "../../core/types/Movement.type";

export default function Home({ navigation }: any) {
    useEffect(() => {
        let products: Movement[] = [];
        new ProductService().GetAllProducts().then(data => {
            products = data;
        });
        store.dispatch(init(products))
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