import { FlatList, ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Fragment, useEffect, useState } from 'react'
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
    return (
        <View style={
            styles.container
        } >
            <Title text="Your movements" weight="800" size={21} color="#9B9898"></Title>
            <ScrollView style={{
                borderRadius: 10
            }}>
                {
                    Movements.map((_movement, _index) => {
                        return (
                            <TouchableOpacity
                                key={_index}
                                onPress={() => navigation.navigate('MovementDetails', _movement)}
                                style={
                                    {
                                        flexDirection: 'row',
                                        width: '100%',
                                        marginTop: '2%'
                                    }
                                }>
                                <BaseMovement key={_index} movement={_movement}></BaseMovement>
                            </TouchableOpacity>
                        )
                    })
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