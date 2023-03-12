import { View, StyleSheet } from "react-native"
import { filter, store } from "../../redux/stores/movements.store"
import Button from "../atoms/Button"
import { useEffect, useState } from "react"

export default function FiltersContainer() {
    const [Filter, setFilter] = useState<FilterPayload>('ALL')
    useEffect(() => {
    }, [Filter])
    return (
        <View testID="filters-container">
            {Filter == 'ALL' ? (
                <View style={styles.buttonContainer}>
                    <Button title="Ganados"  width="45%" onPress={() => {
                        setFilter('NOT_REDEMED')
                        store.dispatch(filter('NOT_REDEMED'))
                    }}></Button>
                    <Button title="Canjeados" width="45%" onPress={() => {
                        setFilter('REDEMED')
                        store.dispatch(filter('REDEMED'))
                    }}></Button>
                </View>
            ) : (
                <View style={styles.buttonContainer}>
                    <Button title="Todos" width="100%" onPress={() => {
                        setFilter('ALL')
                        store.dispatch(filter('ALL'))
                    }}></Button>
                </View>
            )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})