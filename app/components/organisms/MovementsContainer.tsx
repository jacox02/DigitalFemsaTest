import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import React, { PureComponent, useEffect, useMemo, useState } from 'react'

import BaseMovement from '../molecules/Movement'
import { Movement } from '../../core/types/Movement.type'
import { store } from '../../redux/stores/movements.store'
import Title from '../atoms/Title'


export default function MovementsContainer({ navigation }: any) {
    const [Movements, setMovements] = useState<Movement[]>([])
    useEffect(() => {
        store.subscribe(() => {
            setMovements(store.getState().filteredMovements)
        })
    })
    const memoizedList = useMemo(() => {
        return Movements.map((item, index) =>
        (
            <TouchableOpacity
                key={index}
                testID={`movement-${index}-row`}
                onPress={() => navigation.navigate('MovementDetails', item)}
                style={
                    {
                        flexDirection: 'row',
                        width: '100%',
                        marginTop: '2%'
                    }
                }>

                <BaseMovement key={index} movement={item}></BaseMovement>
            </TouchableOpacity>
        )
        );
    }, [Movements]);


    return (
        <View style={
            styles.container
        } >
            <Title text="Tus movimientos" weight="800" size={21} color="#9B9898"></Title>
            <ScrollView
                bounces={true}
                scrollEventThrottle={10}
                style={{
                    borderRadius: 10
                }}>
                {
                    memoizedList
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    movementLabel: {

    },
    container: {
        width: '100%',
        height: '50%',
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        overflow: 'scroll',
    }
})